import React from 'react';
import InboxScreen from './components/InboxScreen';
import NewTask from './components/NewTask/NewTask'


import './App.css';

function App() {
  return (
    <div>
      <NewTask />
      <InboxScreen />
    </div>
  );
}

export default App;
