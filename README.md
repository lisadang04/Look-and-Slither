# Look and Slither: Eye-Tracking Snake Game

## Overview
**Look and Slither** is a gaze-controlled Snake game using **WebGazer.js** for eye tracking. Players move the snake with their eyes after completing a quick calibration. The game features classic Snake mechanics, real-time recalibration, and a responsive UI, showcasing accessibility and alternative input methods.

## Features
- **Eye-Tracking Control**: Uses WebGazer.js to map gaze position to directional movements.
- **Custom Calibration System**: Nine-point calibration for improved accuracy.
- **Classic Snake Gameplay**: Food collection, collision detection, and score tracking.
- **Pause, Restart & Recalibration**: Options for refining gaze accuracy mid-game.
- **Dynamic UI**: Responsive layout with real-time calibration feedback.

## Installation & Setup
### Requirements
- A browser supporting **JavaScript** and **WebGazer.js** (Chrome recommended).
- **Node.js** installed ([Download here](https://nodejs.org/en/download/)).

### Steps to Run Locally
1. Clone this repository and **WebGazer.js**:
   ```sh
   git clone https://github.com/brownhci/WebGazer.git
   cd WebGazer
   npm install
   npm run build
   ```
2. Run a local HTTPS server:
   ```sh
   mkcert -key-file key.pem -cert-file cert.pem localhost
   mkcert localhost
   http-server -S -C localhost.pem -K localhost-key.pem
   ```
3. Open `index.html` in a browser and **allow camera access** when prompted.
4. Follow the calibration instructions: Click each point five times while looking at it.
5. Once calibrated, the game starts! Control the snake with your gaze.

### Optional Controls
- **Pause**: Temporarily halt gameplay.
- **Restart**: Reset the game.
- **Recalibrate**: Restart the calibration process for better accuracy.

## Technical Highlights
- **WebGazer.js Integration**: Translates gaze data into directional inputs.
- **Optimized Calibration**: Custom-built system for better accuracy and user experience.
- **Collision Detection & Game Logic**: Ensures smooth gameplay and valid food placement.
- **Dynamic Recalibration**: Allows users to recalibrate mid-game if tracking becomes inaccurate.

## Why This Project?
Look and Slither is an experimental project exploring gaze-based interactions in gaming. It demonstrates how accessible design and eye-tracking technology can create new ways to interact with digital environments.

## License
This project is licensed under the **MIT License**.

## Acknowledgments
- [WebGazer.js](https://github.com/brownhci/WebGazer) for eye-tracking capabilities.
