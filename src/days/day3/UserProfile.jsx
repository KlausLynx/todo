import React from 'react';
import { Twitter, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { MapPin } from 'lucide-react';

// 1. UserAvatar - image + online status
const UserAvatar = ({ src, alt, isOnline = true }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img 
        src={src} 
        alt={alt}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '3px solid white',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }} 
      />
      {/* ✨ Online status indicator */}
      <div style={{
        position: 'absolute',
        bottom: '5px',
        right: '5px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: isOnline ? '#4ade80' : '#gray',
        border: '3px solid white'
      }} />
    </div>
  );
};

// 2. UserInfo - name, bio, location
const UserInfo = ({ name, role, bio, location }) => {
  return (
    <div className='mt-4 p-6 bg-white rounded-lg shadow'>
      <h2 className='text-xl font-bold'>{name}</h2>
      <p className='text-gray-600'>{role}</p>
      <p className='mt-2 text-gray-700'>{bio}</p>
      <div className='mt-2 flex items-center gap-1 text-gray-500'>
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
      </div>
    </div>
  );
};

// 3. UserStats - followers, following, posts
const UserStats = ({ followers, following, posts }) => {
  const stats = [
    { label: 'Followers', value: followers },
    { label: 'Following', value: following },
    { label: 'Posts', value: posts }
  ];

  return (
    <div className='mt-4 p-6 bg-white rounded-lg shadow'>
      <div className='flex justify-around'>
        {stats.map((stat) => (
          <div key={stat.label} className='text-center'>
            <p className='text-2xl font-bold'>{stat.value}</p>
            <p className='text-sm text-gray-500'>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. SocialLinks - Twitter, GitHub, LinkedIn
const SocialLinks = ({ twitter, github, linkedin }) => {
  const links = [
    { icon: Twitter, url: twitter, color: 'text-blue-400' },
    { icon: Github, url: github, color: 'text-gray-800' },
    { icon: Linkedin, url: linkedin, color: 'text-blue-700' },
    { icon: Facebook, url: '#', color: 'text-blue-600' },
    { icon: Instagram, url: '#', color: 'text-pink-500' },
  ];

  return (
    <div className="mt-4 p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Social Links</h3>
      <div className="flex gap-4 justify-center">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            className={`${link.color} hover:opacity-75 transition`}
            target="_blank"
            rel="noopener noreferrer"  // ✨ Security for external links
          >
            <link.icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

// 5. UserProfile - main component using composition
const UserProfile = ({ user }) => {
  return (
    <div className='max-w-md bg-linear-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg'>
      <div className='text-center mb-4'>
        <UserAvatar 
          src={user.avatar} 
          alt={user.name}
          isOnline={user.isOnline}
        />
      </div>
      
      <UserInfo 
        name={user.name}
        role={user.role}
        bio={user.bio}
        location={user.location}
      />
      
      <UserStats 
        followers={user.followers}
        following={user.following}
        posts={user.posts}
      />
      
      <SocialLinks 
        twitter={user.social.twitter}
        github={user.social.github}
        linkedin={user.social.linkedin}
      />
    </div>
  );
};


export default UserProfile