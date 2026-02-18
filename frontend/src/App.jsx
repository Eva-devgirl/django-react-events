
import {useEffect, useState } from 'react';

export default function App() {
	const [events, setEvents] = useState([]);
	const [error, setError] = useState(null);

	useEffect (() => {
	  fetch("http://127.0.0.1:8000/api/events/")
	    .then((res) => {
	      if (!res.ok) throw new Error ("API Fehler: " + res.status);
	      return res.json();
	    })
	    .then(setEvents)
	    .catch((e) => setError(e.message));
       }, []);
	
      return (
	<div style={{ padding: 20, fontFamily: "sans-serif" }}>
	   <h1>Events</h1>

	  {error && ( 
	    <p style={{ color: "red" }}>
 	      {error}
             </p>
	   )}
	  
	  {events.length === 0 ? (
	     <p>Keine Events gefunden.</p>
	  ) : (
	    <ul>
	      {events.map((ev) => (
	        <li key={ev.id}>
	          <b>{ev.title}</b> - {ev.date} - {ev.location}
		</li>
	      ))}
	     </ul>
	   )}
	 </div>
       );
     }
	 

