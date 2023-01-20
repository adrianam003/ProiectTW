import React, { useState } from 'react';

function InviteForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // cod pentru a trimite invitația la adresa de e-mail introdusă
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adresa de e-mail:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <input type="submit" value="Invită" />
    </form>
  );
}

export default InviteForm;