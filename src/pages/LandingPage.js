import React from 'react';

const LandingPage = ({ username }) => {
  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 12) {
      return 'morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  };

  return (
    <div>
      <h1>Good {getTimeOfDay()}, Rescuer!</h1>
      <p>How are you doing today, {username}?</p>
      <nav>
        <ul>
          <li>
            <a href="/new-ticket">Create New Ticket</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
