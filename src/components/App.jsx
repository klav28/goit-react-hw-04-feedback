import React from 'react';
import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <>
      <h1>Feedback</h1>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Feedback />
      </div>
    </>
  );
};
