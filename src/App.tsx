import React from 'react';
import './App.css';

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [string, number];

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

function App() {
  return <div className="App">Hello World</div>;

}

export default App;
