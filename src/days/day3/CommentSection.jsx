import DefaultAvatar from '../../assets/default-avatar.png';
// import '../day3/CommentSection.css';

// Single Comment Component
const Comment = ({ author, text, time, avatar }) => {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        marginBottom: '0.5rem'
      }}>
        <img 
          src={avatar} 
          alt={`${author}'s avatar`}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover'  // ✨ Prevents image stretching
          }} 
        />
        <div>
          <p style={{ margin: 0 }}>
            <strong>{author}</strong>
          </p>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
            {time}
          </p>
        </div>
      </div>
      <p style={{ marginLeft: '65px' }}>{text}</p>  {/* ✨ Align with text */}
    </div>
  );
};

// CommentList Component
const CommentList = ({ comments }) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      {comments.map((comment) => (
        <Comment 
          key={comment.id}
          author={comment.author}
          text={comment.text}
          time={comment.time}
          avatar={DefaultAvatar}
        />
      ))}
    </div>
  );
};

// Main CommentSection
const CommentSection = () => {
  const comments = [
    { id: 1, author: 'Alice', text: 'Great post!', time: '2 hours ago' },
    { id: 2, author: 'Bob', text: 'Thanks for sharing', time: '1 hour ago' },
    { id: 3, author: 'Charlie', text: 'Awesome content!', time: '30 minutes ago' },
  ];

  return (
    <div style={{
      backgroundColor: 'white',
      maxWidth: '600px',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '1.5rem' }}>
        Comments ({comments.length})
      </h2>
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentSection;