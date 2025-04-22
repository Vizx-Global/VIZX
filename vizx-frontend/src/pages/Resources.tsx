// Resources.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Resource {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  categories: string[];
}

const Resources: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(data => {
        setResources(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching resources:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-white p-8">Loading...</div>;

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map(resource => (
          <Link
            key={resource._id}
            to={`/resources/${resource._id}`}
            className="bg-gray-800 p-4 rounded hover:shadow-lg transition"
          >
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-48 object-cover mb-2"
            />
            <h2 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: resource.title }} />
            <div className="text-sm text-gray-300 mt-2" dangerouslySetInnerHTML={{ __html: resource.excerpt }} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Resources;
