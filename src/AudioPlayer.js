import React, { useState, useRef } from 'react';
import './AudioPlayer.css'; // Import the CSS file

const AudioPlayer = ({ audioFile, segments }) => {
  const audioRef = useRef(null);
  const [currentSegment, setCurrentSegment] = useState(null);

  const handlePlaybackSpeedChange = (speed) => {
    audioRef.current.playbackRate = speed;
  };

  const handleSegmentClick = (start, end) => {
    setCurrentSegment({ start, end });
    audioRef.current.currentTime = start;
    audioRef.current.play();

    // Pause the audio after the segment duration
    const segmentDuration = (end - start) * 1000; // Convert seconds to milliseconds
    setTimeout(() => {
      audioRef.current.pause();
    }, segmentDuration);
  };

  return (
    <div className="audio-player-container">
      <audio
        ref={audioRef}
        controls
        className="audio-element"
        onEnded={() => setCurrentSegment(null)}
      >
        <source src={audioFile} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
      <div className="controls">
        <div className="playback-speed">
          <p>Playback Speed:</p>
          <button onClick={() => handlePlaybackSpeedChange(0.5)}>0.5x</button>
          <button onClick={() => handlePlaybackSpeedChange(1)}>1x</button>
          <button onClick={() => handlePlaybackSpeedChange(1.5)}>1.5x</button>
          <button onClick={() => handlePlaybackSpeedChange(2)}>2x</button>
        </div>
        <div className="segments">
          <p>Segments:</p>
          {segments && segments.map((segment, index) => (
            <button
              key={index}
              onClick={() => handleSegmentClick(segment.start, segment.end)}
              className={currentSegment === segment ? 'active' : ''}
            >
              {`${segment.start}s - ${segment.end}s`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
