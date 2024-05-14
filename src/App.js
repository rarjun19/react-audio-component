import React from 'react';
import AudioPlayer from './AudioPlayer';

const App = () => {
  const audioFile = process.env.PUBLIC_URL + '/audio/example-hello.wav';
  // Define segments data
  const segments = [
    { start: 0, end: 1 },
    { start: 1, end: 2 }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Audio Player</h1>
      <AudioPlayer audioFile={audioFile} segments={segments} />
    </div>
  );
};

export default App;
