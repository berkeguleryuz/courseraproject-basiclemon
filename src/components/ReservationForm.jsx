import React, { useState } from 'react';

const ReservationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form doğrulamalarını eklemek gerekebilir

    // API'ye rezervasyon bilgilerini gönderme işlemi burada yapılabilir

    // Formu sıfırlama
    setFirstName('');
    setLastName('');
    setReservationDate('');
    setReservationTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Surname:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="reservationDate">Reservation Date:</label>
        <input
          type="date"
          id="reservationDate"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="reservationTime">Reservation Time:</label>
        <input
          type="time"
          id="reservationTime"
          value={reservationTime}
          onChange={(e) => setReservationTime(e.target.value)}
        />
      </div>
      <button type="submit">Reservation</button>
    </form>
  );
};

export default ReservationForm;
