import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions';
import './index.css';

function Home() {
  const userDetails = useSelector((state) => state.userManagementReducer.userDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    navigate('/');
  }

  const { name, email, phoneNumber, fileURL } = userDetails.values;

  return (
    <div className="home-page">
      <div className="logout-btn">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="user-profile">
        <img src={fileURL} alt="preview-img" className="profile-image" />
      </div>
      <div className="registration-detail">
        <h2>Hello, {name}!</h2>
        <p>You are registered with:</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>
      </div>
    </div>
  );
}

export default Home;
