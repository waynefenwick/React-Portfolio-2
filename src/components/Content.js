import React from 'react';

const Content = () => {
  return (
    <section>
      {        <div id="profile-container">
            <div class="profile-left-column">
                <div id="profile">
                    <img src="./assets/Profile Pic.png" class="profile-picture" alt="Profile Picture">
                </div>
            </div>
            <div class="profile-right-column">
                <div id="profile-header">
                    <h1><u>Personal Profile</u></h1>
                </div>
                <br>
                <div id="profile-list">
                    <h3>
                        <ul>
                        <li>Born and raised in South Africa</li>
                        <li>Am a naturalized American</li>
                        <li>Have a certificate in coding through UT Austin</li>
                        <li>Accrued numerous transferable skills</li>
                        <li>Extensive Project Management experience</li>
                        <li>BA in communication; MA in counseling</li>
                        <li>German and Turkish international experience</li>
                        <li>Am an avid and competitive cyclist</li>
                        </ul>
                    </h3>
                </div>
            </div>
        </div>}
    </section>
  );
};

export default Content;
