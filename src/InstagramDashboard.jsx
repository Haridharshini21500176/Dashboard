import React from 'react';
import './InstagramDashboard.css';
import event from '../public/1.jpg'

// Mock data (replace with your actual data structure)
const mockPosts = [
  { id: '1', media_url: 'https://serenitydiamondbeach.com.au/wp-content/uploads/2018/10/Kids-at-Beach.jpg', caption: 'Awesome day at the beach!' },
  { id: '2', media_url: 'https://th.bing.com/th/id/OIP.gCKDuZxEFQl6itytZPnfmAHaHa?rs=1&pid=ImgDetMain', caption: 'Throwback to last summer 🌞' },
  { id: '3', media_url: 'https://img.onmanorama.com/content/dam/mm/en/travel/beyond-kerala/images/2017/3/27/travel1.jpg', caption: 'Exploring new places 🌍' },
];
const user = {
    username: 'USER : explorer_arrives',
    followers: 100,
    following: 50,
    profile_picture: event,
  };

  const InstagramDashboard = () => {
    return (
      <div className="instagram-dashboard">
        {/* Instagram Dashboard Header */}
        <div className="header">
          <h2>Instagram Dashboard</h2>
          <div className="user-info">
            <img src={user.profile_picture} alt="Profile" />
            <div>
              <p>{user.username}</p>
              <p>Followers: {user.followers} | Following: {user.following}</p>
            </div>
          </div>
        </div>
  
        {/* Posts Container */}
        <div className="posts-container">
          {/* Map through mockPosts and render each post */}
          {mockPosts.map(post => (
            <div key={post.id} className="post-item">
              {/* Post Image */}
              <img src={post.media_url} alt={post.caption} />
  
              {/* Post Info */}
              <div className="post-info">
                <p>{post.caption}</p>
                <p>Likes: 100 {post.likes}</p>
                <p>Comments: WOW!!{post.comments}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  

export default InstagramDashboard;
