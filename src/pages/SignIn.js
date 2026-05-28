import React from 'react';

const SignIn = () => {
  return (
    <div className="formPage">
      <div className="container formBox">
        <h1>Sign In</h1>

        <form>
          <div className="mb-4">
            <label>Email:</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="mb-4">
            <label>Password:</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>

          <button type="submit" className="btn btn-primary me-2">Sign In</button>
          <button type="reset" className="btn btn-secondary">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;