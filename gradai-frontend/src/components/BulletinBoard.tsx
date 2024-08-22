/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/BulletinBoard.tsx
import React, { useState, useEffect } from 'react';
import { getBulletinBoardPosts } from '../services/api';
import { BulletinPost } from '../services/types';

const BulletinBoard: React.FC = () => {
  const [posts, setPosts] = useState<BulletinPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBulletinBoardPosts();
        setPosts(data);
      } catch (err) {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Bulletin Board</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><em>By {post.author} on {post.date}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletinBoard;