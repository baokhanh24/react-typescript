import React, { useState } from 'react';

import './App.css';
import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import Footer from './layouts/Footer';

type Contact = {
  address: string
  phoneNumber: string
}

type Person = {
  name: string
  age: number
  contact?: Contact
}

function App() {
  const person: Person = {
     name: "Thi",
     age: 20,
  }

  console.log(person.contact?.address)

  const [name, setName] = useState('thi')
  return (
    <div className="App">
      <Header/>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
