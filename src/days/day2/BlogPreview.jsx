function BlogPreview() {
  const post = {
    title: "Understanding React JSX: A Comprehensive Guide for Beginners",
    author: "Jane Doe",
    date: "2024-11-27",
    content: "Lorem ipsum...",
    wordCount: 500,
    tags: ["React", "JavaScript", "Tutorial"]
  };


  const truncateTitle = () => {
    return post.title.length > 50 
      ? post.title.slice(0, 50) + '...' 
      : post.title;
  }

  // Calculate read time
  const readTime = Math.ceil(post.wordCount / 200);

  // Tag colors
  const tagColors = {
    React: { bg: '#e0f2fe', text: '#0369a1' },
    JavaScript: { bg: '#fef3c7', text: '#92400e' },
    Tutorial: { bg: '#e0e7ff', text: '#3730a3' }
  };

  return (
    <div className="blog-preview">
      <h2>{truncateTitle()}</h2>
      
      <p style={{ color: '#666', fontSize: '14px' }}>
        By <strong>{post.author}</strong> • {post.date} • {readTime} min read
      </p>
      
      <div className="tags">
        {post.tags.map((tag, index) => {
          const colors = tagColors[tag] || { bg: '#f3f4f6', text: '#374151' };
          return (
            <span 
              key={index}
              style={{
                backgroundColor: colors.bg,
                color: colors.text,
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '13px',
                fontWeight: '600'
              }}
            >
              #{tag}
            </span>
          );
        })}
      </div>
      
      <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
        {post.content.slice(0, 150)}...
      </p>
      
      <a 
        href="#" 
        style={{
          color: '#2563eb',
          textDecoration: 'none',
          fontWeight: '600',
          alignSelf: 'flex-start'
        }}
      >
        Read More →
      </a>
    </div>
  );
}

export default BlogPreview;