import React, { useEffect, useRef } from 'react';
import { FaWhatsapp, FaDiscord } from 'react-icons/fa'; // Import icons
import './cont.css';
import p5 from 'p5'; // Import p5.js for the canvas effect

const HackathonContainer = () => {
  // Use useRef to attach the p5 canvas to a specific div
  const canvasRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let DOT_STEP = 40;
      let FLEE_AMPLITUDE = 50;
      let WIDTH = p.windowWidth*0.95;
      let HEIGHT = p.windowHeight*0.6;
      let g_grid = [];

      p.setup = () => {
        let x, y;
        let x_max = Math.floor(WIDTH / DOT_STEP);
        let y_max = Math.floor(HEIGHT / DOT_STEP);
        let line;

        p.createCanvas(WIDTH, HEIGHT).parent(canvasRef.current); // Attach canvas to the specific div
        p.noCursor();
        p.mouseX = WIDTH / 2;
        p.mouseY = HEIGHT / 2;

        g_grid = []; // Initialize g_grid as an empty array

        for (y = 0; y < y_max; ++y) {
          line = [];
          for (x = 0; x < x_max; ++x) {
            line.push({
              x: x * DOT_STEP,
              y: y * DOT_STEP,
            });
          }
          g_grid.push(line);
        }
      };

      p.windowResized = () => {
        WIDTH = p.windowWidth;
        HEIGHT = p.windowHeight;
        let x_max = Math.floor(WIDTH / DOT_STEP);
        let y_max = Math.floor(HEIGHT / DOT_STEP);
        let line;

        p.resizeCanvas(WIDTH, HEIGHT);
        g_grid = []; // Reinitialize g_grid

        for (let y = 0; y < y_max; ++y) {
          line = [];
          for (let x = 0; x < x_max; ++x) {
            line.push({
              x: x * DOT_STEP,
              y: y * DOT_STEP,
            });
          }
          g_grid.push(line);
        }
      };

      p.draw = () => {
        let x, y;
        let x_max = Math.floor(WIDTH / DOT_STEP);
        let y_max = Math.floor(HEIGHT / DOT_STEP);
        let dot, vec;

        p.background(15, 61, 41);
        p.strokeWeight(2);
        p.stroke(255);
        for (y = 0; y < y_max; ++y) {
          if (!g_grid[y]) continue; // Skip if row is undefined

          for (x = 0; x < x_max; ++x) {
            dot = g_grid[y][x];

            if (dot) { // Ensure dot is defined
              vec = p.createVector(x * DOT_STEP - p.mouseX, y * DOT_STEP - p.mouseY);
              vec.normalize();
              dot.x = x * DOT_STEP + vec.x * FLEE_AMPLITUDE;
              dot.y = y * DOT_STEP + vec.y * FLEE_AMPLITUDE;
              p.point(dot.x, dot.y);
            }
          }
        }
      };
    };

    // Initialize p5 sketch
    const p5Instance = new p5(sketch);

    // Clean up the p5 instance on component unmount
    return () => {
      p5Instance.remove(); // This ensures the canvas is removed properly
    };
  }, []);

  return (
    <div className="hackathon-container">
      {/* p5.js Canvas */}
      <div ref={canvasRef} className="p5-canvas-container"></div> {/* This div will hold the p5.js canvas */}
      
      <div className="left-section">
        <h1 className="hackathon-title">HACKउत्सव 1.O 2024</h1>
      </div>

      <div className="right-section">
        <h2 className="event-subtitle">The National Hackathon</h2>
        <p className="hackathon-date">15-16 October 2024</p>
        <p className="hackathon-description">
          Join the technical hackathon and push the limits of your mind! Code, innovate, and create something amazing.
        </p>
        <div className="button-group" >
          <button className="register-btn" onClick={() => window.open('https://forms.gle/nineQAgsR7nnR9S3A', '_blank')}>REGISTER NOW</button>
        </div>
        {/* Community buttons below the register button */}
        <div className="community-btns">
          <button
            className="whatsapp-btn"
            onClick={() => window.open('https://chat.whatsapp.com/YourInviteLink', '_blank')}
          >
            <FaWhatsapp className="icon" /> WhatsApp
          </button>
          <button
            className="discord-btn"
            onClick={() => window.open('https://discord.gg/YourInviteLink', '_blank')}
          >
            <FaDiscord className="icon" /> Discord
          </button>
        </div>
      </div>
    </div>
  );
};
export default HackathonContainer;