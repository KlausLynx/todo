import '../../index.css';
import profileImage from '../../assets/Untitled-1.png';
import './ProfileCard.css';

const ProfileCard = () => {
    // Data inside component
    const profile = {
        name: "Klaus Lynx",
        age: 21,
        hobbies: ["reading", "coding", "gaming"],
        isStudent: true,
        favColor: "blue",
        bio: "Hello, my name is Klaus Lynx and I am 21 years old. I am learning React because I love coding and building web applications, and it'll be a dream come true to create innovative solutions and ideas.",
        goals: [
            "I want to become a structural full-stack developer",
            "I want to build a career in tech and contribute to open-source projects",
            "I want to be part of innovative minded people that run the digital world"
        ]
    };

    return (
        <div className="profile-card-container">
            <div className="profile-card">
                <img 
                    src={profileImage} 
                    alt={`${profile.name}'s profile picture`}
                    className="profile-image"
                />
                
                <h2 className="profile-name">{profile.name}</h2>
                
                <div className="profile-details">
                    <p><strong>Age:</strong> {profile.age}</p>
                    <p><strong>Hobbies:</strong> {profile.hobbies.join(', ')}</p>
                    <p><strong>Student:</strong> {profile.isStudent ? 'Yes' : 'No'}</p>
                    <p><strong>Favorite Color:</strong> {profile.favColor}</p>
                </div>

                <p className="profile-bio">{profile.bio}</p>

                <div className="profile-goals">
                    <h3>My Goals</h3>
                    <ul>
                        {profile.goals.map((goal, index) => (
                            <li key={index}>{goal}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;