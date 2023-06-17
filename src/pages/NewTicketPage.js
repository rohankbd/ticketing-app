import React, { useState } from 'react';

const NewTicketPage = () => {
  const [leadSource, setLeadSource] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleRegistrationNumber, setVehicleRegistrationNumber] = useState('');
  const [breakdownIssue, setBreakdownIssue] = useState('');
  const [location, setLocation] = useState('');
  const [serviceFee, setServiceFee] = useState('');
  const [assistanceTime, setAssistanceTime] = useState(new Date());
  const [comments, setComments] = useState('');
  const [isTaskCreated, setIsTaskCreated] = useState(false);

  const handleLeadSourceChange = (event) => {
    setLeadSource(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleVehicleMakeChange = (event) => {
    setVehicleMake(event.target.value);
  };

  const handleVehicleRegistrationNumberChange = (event) => {
    const input = event.target.value.toUpperCase().replace(/\s/g, '');
    setVehicleRegistrationNumber(input);
  };

  const handleBreakdownIssueChange = (event) => {
    setBreakdownIssue(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleServiceFeeChange = (event) => {
    setServiceFee(event.target.value);
  };

  const handleAssistanceTimeChange = (event) => {
    setAssistanceTime(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      leadSource === '' ||
      name === '' ||
      contactNumber === '' ||
      email === '' ||
      vehicleMake === '' ||
      vehicleRegistrationNumber === '' ||
      breakdownIssue === '' ||
      location === ''
    ) {
      // Handle mandatory field validation
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Handle invalid email address
      return;
    }

    // Handle form submission
    setIsTaskCreated(true);
  };

  const handlePopupClose = () => {
    setIsTaskCreated(false);
  };

  return (
    <div>
      <h1>New Ticket Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Lead Source:
          <select value={leadSource} onChange={handleLeadSourceChange}>
            <option value="">Select</option>
            <option value="Web">Web</option>
            <option value="Chat">Chat</option>
            <option value="Call">Call</option>
          </select>
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="text"
            value={contactNumber}
            onChange={handleContactNumberChange}
          />
        </label>
        <br />
        <label>
          Email Address:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Vehicle Make:
          <input
            type="text"
            value={vehicleMake}
            onChange={handleVehicleMakeChange}
          />
        </label>
        <br />
        <label>
          Vehicle Registration Number:
          <input
            type="text"
            value={vehicleRegistrationNumber}
            onChange={handleVehicleRegistrationNumberChange}
          />
        </label>
        <br />
        <label>
          Breakdown Issue:
          <textarea
            value={breakdownIssue}
            onChange={handleBreakdownIssueChange}
          ></textarea>
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>
        <br />
        <label>
          Service Fee:
          <input
            type="text"
            value={serviceFee}
            onChange={handleServiceFeeChange}
          />
        </label>
        <br />
        <label>
          Assistance Time:
          <input
            type="datetime-local"
            value={assistanceTime}
            onChange={handleAssistanceTimeChange}
          />
        </label>
        <br />
        <label>
          Comments:
          <textarea value={comments} onChange={handleCommentsChange}></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {isTaskCreated && (
        <div className="popup">
          <div className="popup-content">
            <h2>New Task Created Successfully</h2>
            <button onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewTicketPage;