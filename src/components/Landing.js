import React from 'react';
import { useNavigate } from 'react-router-dom';


const navigate = useNavigate()

export default function Landing() {
  return (
    <div className="main">
      <div className="text">
        Expenses <br /> Tracker App
      </div>
      <div className="box3">
        <div className="container">
          <div className="logo">
            <img src="Logo.png" alt="logo" />
          </div>
          <div className="menu">
            <ul>
              <li>login</li>
              <li>Sign up</li>
              <li>home</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
