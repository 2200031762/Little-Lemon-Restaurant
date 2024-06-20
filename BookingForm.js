import React, { useState } from 'react';
import '../styles.css';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Book a Table</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Date:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <label>
                Time:
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </label>
            <label>
                Number of Guests:
                <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" required />
            </label>
            <button type="submit">Reserve</button>
        </form>
    );
};

export default BookingForm;
