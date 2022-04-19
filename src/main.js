// Jia Mei
// Rocket Patrol Mod
// April 18th, 2022
// This project took approxmiately 6 hours each over the course of 2 days to complete

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

/* POINT BREAKDOWN
    
    Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20 points) 
    Create and implement a new weapon (w/ new behavior and graphics) (20 points)
    Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20 points)
    Create a new title screen (e.g., new artwork, typography, layout) (10 points)
    Create a new scrolling tile sprite for the background (5 points)
    Add your own (copyright-free) background music to the Play scene (5 points)

*/