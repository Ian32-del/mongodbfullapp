import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({ name: '', message: '' });

  const fetchFeedbacks = async () => {
    const res = await fetch('http://192.168.49.2:30501/api/feedback');
    const data = await res.json();
    setFeedbacks(data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://192.168.49.2:30501/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({ name: '', message: '' });
    fetchFeedbacks();
  };

  return (
    <div className="container">
      <h1 className="title">📬 User Feedback</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="input"
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="textarea"
          required
        />
        <button type="submit" className="button">Submit</button>
      </form>

      <div className="list-container">
        <h2>💬 Feedback List</h2>
        {feedbacks.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          feedbacks.map((f, index) => (
            <div key={index} className="card">
              <strong>{f.name}</strong>
              <p>{f.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
