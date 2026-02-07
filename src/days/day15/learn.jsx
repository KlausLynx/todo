import {useState, useEffect}from 'react';
import Spinner from '../../Components/Spinner';
// 🏋️ Practice Exercises
// Exercise 1: User Card (Easy)
// Create a component that fetches and displays a random user from https://jsonplaceholder.typicode.com/users/1 with:

// Loading spinner
// Error message
// Display: name, email, phone

export default function MainComponent() {
    return (
        <>
        <UserCard />
        <SearchPosts />
        <UserSelector />
        <RandomUser />
        <Pagination />
        </>
    )
}

function UserCard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; 
        
        // setLoading(true);
        
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network Error: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (isMounted) {  
                    setUser(data);
                    setLoading(false);
                    setError(null);
                }
            })
            .catch((err) => {
                if (isMounted) {  
                    setError(err.message);
                    setLoading(false);
                }
            });
        
        return () => {
            isMounted = false; 
        };
    }, []);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className="border p-4 rounded shadow-md max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="mb-1"><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
        </div>
    );
}

// Exercise 2: Search Posts (Medium)
// Create a search component:

// Input field for search term
// Fetch posts from https://jsonplaceholder.typicode.com/posts
// Filter posts by title containing search term
// Show loading/error states

const SearchPosts = () => {
    const [searchTerm, setSearchTerm ] = useState('');
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    useEffect(()=> {
        let ignore = false;

        setLoading(true);

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if(!response.ok) {
                throw new Error(`Network Failed ${response.status}`);
            }
            return response.json()
        })
        .then(data => {
            if (!ignore) {
                console.log(data)
                setPosts(data)
                setLoading(false)
            }
        })
        .catch((err) => {
            if (!ignore) {
                setError(err.message)
                setLoading(false)
            }
        })

        return () => {
            ignore = true
        }

    }, [])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <div className='text-red-500'>Error: {error}</div>
    }

    const filteredPost = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <div>
            <input type="search" name="" id="" value={searchTerm} placeholder='Search.....' onChange={handleSearch} />

            <div>
                {filteredPost.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

// Exercise 3: User Selector (Medium)
// Create a dropdown that:

// Fetches users list: https://jsonplaceholder.typicode.com/users
// Lets user select from dropdown
// Fetches that user's posts: https://jsonplaceholder.typicode.com/posts?userId={id}
// Displays the posts

const UserSelector = () => {
    const [posts, setUserPost] = useState([]);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        let ignore = false;

        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok) {
                    throw new Error(`Http error status! ${response.status}`)
                };
                
                const data = await response.json()

                if (!ignore) {
                    setUsers(data);
                    console.log(data);
                    setError(null);
                }
            } catch (err) {
                if(!ignore) {
                    setError(err.message)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchUser()

        return () => {
            ignore = true
        }

    }, [])

    useEffect(()=> {
        let ignore = false;

        const fetchPosts = async () => {
            if (!userId) return
            setLoading(true);
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                if (!res.ok) {
                    throw new Error(`Failed to fetch!: ${res.status} `)
                }

                const postData =  await res.json()
                if(!ignore) {
                    setUserPost(postData)
                    console.log(postData)
                    setError(null)
                }

            } catch (err) {
                if(!ignore) {
                    setError(err.message);
                }
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()

        return () => {
            ignore = true
        }
    }, [userId])


    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <div className='text-red-500'>Error: {error}</div>
    }
    return (
        <div>
            <select name="dropdown" id="" onChange={(e) => setUserId(e.target.value)}>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>Select User</option>
                ))}
            </select>

            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}

// Exercise 4: Refetch Button (Medium-Hard)
// Enhance Exercise 1 to:

// Add a "Refresh" button
// Fetch a random user (userId 1-10)
// Show loading state while refetching
// Prevent button clicks while loading

const RandomUser = () => {
    const [userId, setUserId] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setErrors] = useState(null);
    const [user, setUser] = useState({})

    useEffect(() => {
        let ignore = false;

        const fetchUser = async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                if (!res.ok) {
                    throw new Error(`Http Error status! ${res.status}`)
                }

                const userData = await res.json();
                console.log(userData)

                if (!ignore) {
                    setUser(userData)
                    console.log(userData)
                    setErrors(null)
                }
            } catch (err) {
                if (!ignore) {
                    setErrors(err.message)
                }
                
            } finally {
                setLoading(false)
            }
        }

        fetchUser()

        return () => {
            ignore = true
        }
 
    }, [userId])

    const randomNumber = () => {
        return Math.floor(Math.random() * 10) + 1
    }

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <div className='text-red-500'>Error: {error}</div>
    }

    return (
        <div>
            <button type="button" onClick={() => setUserId(randomNumber())}>
                Refresh
            </button>

            <div>
                {user && (
                    <div>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

// Exercise 5: Pagination (Hard)
// Create a paginated posts list:

// Fetch https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5
// Add Previous/Next buttons
// Update page number in URL
// Handle loading between page changes

function Pagination () {
    const [posts, setPosts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState();

    useEffect(() => {
        let ignore = false;
        const fetchPost = async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts? page=${pageNumber} &_limit=5`);
                if(!res.ok) {
                    throw new Error(`https error status! ${res.status}`)
                };

                const postData = await res.json()

                if(!ignore) {
                    setPosts(postData)
                    console.log(postData)
                }
            } catch (err) {
                if(!ignore) {
                     setErrors(err.message)
                }
            } finally {
                setLoading(false)
            }
        }

         fetchPost()

        return () => {
            ignore = true
        }
    }, [pageNumber])

    if (loading) {
        return <Spinner />
    }

    if (errors) {
        return <div className='text-red-500'>Error: {errors}</div>
    }

    const goFoward = () => {
        if(pageNumber > 0) {
            setLoading(true)
            setPageNumber(pageNumber + 1)
        }
    }

    const goBack = () => {
        if(pageNumber > 1 ) {
            setLoading(true)
            setPageNumber(pageNumber - 1)
        }
    }
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className='border-1 border-gray-800 px-3'>
                    <h3 className='text-cyan-600'>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
            <button onClick={goFoward}>next</button>
            <button onClick={goBack}>Previous</button>
        </div>
    )
}