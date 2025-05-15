import React from 'react';
// import '../styles/Background.css';


function Background() {
  return (
    <div
      className="animated-bg"
      style={{
        backgroundImage: "url('/assets/background3.gif')",
        backgroundSize: 'cover',              // Or 'contain' if you want full integrity
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        imageRendering: 'pixelated',          
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}



export default Background;
