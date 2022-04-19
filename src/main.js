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
    Allow the player to control the Rocket after it's fired (5 points)
    Create a new scrolling tile sprite for the background (5)
    Create a new title screen (e.g., new artwork, typography, layout) (10)
*/