import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SignupPage() {
  return (
    <div>
      <h2>Signup Page</h2>
      {/* Signup form here */}
      <p>
        Already have an account?{' '}
        <Link to="/login">Login here</Link> {/* Add link to LoginPage */}
      </p>
    </div>
  );
}

export default SignupPage;