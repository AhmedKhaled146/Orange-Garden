import Phaser from 'phaser';

export default class BaseScene extends Phaser.Scene {
    constructor(sceneName) {
        super(sceneName);
    }

    preload() {
        this.load.image('Background', '../assets/Background.png');
    }

    create() {

        // For Can the background image take all the frame.
        // SetOrigin set the origin of the background to start from top left corner with dimintion (x = 0, y = 0).
        const background = this.add.image(0, 0, 'Background').setOrigin(0);

        // Set the background image to take all the frame of the game i set 1400 and 900.
        background.displayWidth = this.sys.canvas.width;
        background.displayHeight = this.sys.canvas.height;
    }
}
