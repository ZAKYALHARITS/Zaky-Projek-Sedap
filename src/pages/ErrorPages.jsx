import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ErrorPage.css'; // Import the CSS file for styling

// ErrorPage Component
const ErrorPage = ({ errorCode, errorMessage }) => {
  const navigate = useNavigate(); // Get navigate function

  // Handle the "Go Back" button click
  const handleGoBack = () => {
    navigate('/'); // Navigate to the dashboard route
  };

  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-content">
          <div className="text-content">
            <h1 className="error-code">{errorCode}</h1>
            <h2 className="error-message">{errorMessage}</h2>
            <div className="error-icons">
              <div className="icon">&#9888;</div>
              <div className="icon">&#9888;</div>
              <div className="icon">&#9888;</div>
            </div>
            {/* Go Back Button */}
            <button 
              className="go-back-btn" 
              onClick={handleGoBack}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ErrorPages Component with dynamic errorCode
const ErrorPages = ({ errorCode }) => {
  let errorMessage = 'An unknown error occurred.';

  // Customize the error message based on the error code
  if (errorCode === "400") {
    errorMessage = 'Bad Request!';
  } else if (errorCode === "401") {
    errorMessage = 'Unauthorized!';
  } else if (errorCode === "403") {
    errorMessage = 'Forbidden!';
  }

  return <ErrorPage errorCode={errorCode} errorMessage={errorMessage} />;
};

export default ErrorPages;
