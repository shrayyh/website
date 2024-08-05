import React from 'react';
import ResourceItem from './ResourceItem';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is included
import '../styles.css';  // Ensure your custom styles are included

const ResourceList = ({ resources }) => {
  return (
    <div className="container my-4"> {/* Add Bootstrap container and margin */}
      <div className="row">
        {resources.map(resource => (
          <div className="col-md-4 mb-4" key={resource.id}> {/* Use Bootstrap grid for layout */}
            <ResourceItem resource={resource} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
