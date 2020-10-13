import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact
      img="https://randomuser.me/api/portraits/men/32.jpg"
      alt="Juan Willis"
      name="Juan Willis"
      offline/>
      <Contact
      img="https://randomuser.me/api/portraits/women/2.jpg"
      alt="Minnie Freeman"
      name="Minnie Freeman"
      online/>
      <Contact
      img="https://randomuser.me/api/portraits/women/96.jpg"
      lt="Elizabeth Alexander"
      name="Elizabeth Alexander"
      offline/>
    </div>
  );
}

export default App;
