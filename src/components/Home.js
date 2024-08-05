import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; // Ensure the path is correct
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="container text-center py-5">
          <h1 className="display-4">Welcome to Resources4u</h1>
          <p className="lead">Your go-to platform for high-quality educational resources</p>
          <a href="#resources" className="btn btn-success btn-lg">Explore Resources</a> {/* Changed from btn-primary to btn-success */}
        </div>
      </header>

      

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="feature-card p-4 shadow-sm">
                <i className="fas fa-code fa-2x mb-3"></i>
                <h3>Comprehensive Tutorials</h3>
                <p>Step-by-step guides to master various subjects and skills.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card p-4 shadow-sm">
                <i className="fas fa-graduation-cap fa-2x mb-3"></i>
                <h3>Curated Resources</h3>
                <p>Handpicked materials to help you excel in your studies.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card p-4 shadow-sm">
                <i className="fas fa-users fa-2x mb-3"></i>
                <h3>Community Support</h3>
                <p>Join a community of learners and get help when you need it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5 text-center bg-light">
        <div className="container">
          <h2>Ready to Start Learning?</h2>
          <a href="/resources" className="btn btn-warning btn-lg">Browse Resources</a> {/* Changed from btn-success to btn-warning */}
        </div>
      </section>

      {/* Modal Example */}
      <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="infoModalLabel">Learn More</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Discover more about our features and resources.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a href="/resources" className="btn btn-info">Explore Resources</a> {/* Changed from btn-primary to btn-info */}
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
