import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported

const ResourceItem = ({ resource }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{resource.title}</h5>
        <p className="card-text">{resource.description}</p>
        <a href={resource.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ResourceItem;
