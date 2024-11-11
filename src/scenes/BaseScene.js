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

        const background = this.add.image(0, 0, 'Background').setOrigin(0);

        background.displayWidth = this.sys.canvas.width;
        background.displayHeight = this.sys.canvas.height;
    }
}
