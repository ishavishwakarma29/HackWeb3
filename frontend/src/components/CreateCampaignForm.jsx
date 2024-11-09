// CreateCampaignForm.js
import React, { useState } from "react";
import "./css/CreateCampaignForm.css";

function CreateCampaignForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic here
  };

  return (
    <div className="create-campaign-form">
      <h2>Create a New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Campaign Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Target Amount (ETH):</label>
          <input
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Campaign Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
}

export default CreateCampaignForm;