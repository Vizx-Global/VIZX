// ResourceDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Resource {
  _id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
  categories: string[];
}

const ResourceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [resource, setResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setResource(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching resource:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (!resource) return <div className="text-white p-8">Resource not found</div>;

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: resource.title }} />
      <img src={resource.image} alt={resource.title} className="w-full h-auto mb-6" />
      <div className="blog-content leading-relaxed" dangerouslySetInnerHTML={{ __html: resource.content }} />
      <div className="mt-8">
        <Link to="/resources" className="text-orange-500 hover:underline">
          &larr; Back to Resources
        </Link>
      </div>
    </div>
  );
};

export default ResourceDetail;
