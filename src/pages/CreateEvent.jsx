import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import './CreateEvent.css';

const CreateEvent = () => {
  const navigate = useNavigate();
  const { addEvent } = useContext(EventContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: 'Workshop',
    image: '',
    maxCapacity: 100,
    details: '',
    organizer: ''
  });

  const [errors, setErrors] = useState({});

  const categories = ['Workshop', 'Hackathon', 'Fest', 'Seminar'];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.organizer.trim()) newErrors.organizer = 'Organizer name is required';
    if (formData.maxCapacity < 1) newErrors.maxCapacity = 'Capacity must be at least 1';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'maxCapacity' ? parseInt(value) : value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      addEvent(formData);
      alert('Event created successfully!');
      navigate('/events');
    }
  };

  return (
    <div className="create-event-page">
      <div className="create-event-container">
        <div className="form-header">
          <h1>Create a New Event</h1>
          <p>Share your event with the college community</p>
        </div>

        <form className="event-form" onSubmit={handleSubmit}>
          {/* Basic Info */}
          <fieldset className="form-section">
            <legend>Basic Information</legend>
            
            <div className="form-group">
              <label htmlFor="title">Event Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                className={errors.title ? 'error' : ''}
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Short Description *</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Brief description of the event"
                className={errors.description ? 'error' : ''}
              />
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={errors.date ? 'error' : ''}
                />
                {errors.date && <span className="error-message">{errors.date}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="time">Time *</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={errors.time ? 'error' : ''}
                />
                {errors.time && <span className="error-message">{errors.time}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Where will the event be held?"
                className={errors.location ? 'error' : ''}
              />
              {errors.location && <span className="error-message">{errors.location}</span>}
            </div>
          </fieldset>

          {/* Event Details */}
          <fieldset className="form-section">
            <legend>Event Details</legend>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="maxCapacity">Maximum Capacity *</label>
                <input
                  type="number"
                  id="maxCapacity"
                  name="maxCapacity"
                  value={formData.maxCapacity}
                  onChange={handleChange}
                  min="1"
                  className={errors.maxCapacity ? 'error' : ''}
                />
                {errors.maxCapacity && <span className="error-message">{errors.maxCapacity}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="organizer">Organizer Name *</label>
              <input
                type="text"
                id="organizer"
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                placeholder="Name of the organizing club/department"
                className={errors.organizer ? 'error' : ''}
              />
              {errors.organizer && <span className="error-message">{errors.organizer}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL (Optional)</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="form-group">
              <label htmlFor="details">Detailed Description (Optional)</label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Provide more details about the event..."
                rows="5"
              ></textarea>
            </div>
          </fieldset>

          {/* Form Actions */}
          <div className="form-actions">
            <button type="submit" className="submit-button">Create Event</button>
            <button 
              type="button" 
              className="cancel-button"
              onClick={() => navigate('/events')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
