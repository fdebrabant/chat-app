import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact
      img="https://randomuser.me/api/portraits/men/32.jpg"
      name="Juan Willis"
      />
      <Contact
      img="https://randomuser.me/api/portraits/women/2.jpg"
      name="Minnie Freeman"
      online/>
      <Contact
      img="https://randomuser.me/api/portraits/women/96.jpg"
      name="Elizabeth Alexander"
      />
    </div>
  );
}

export default App;
