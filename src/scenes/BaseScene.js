import Phaser from 'phaser';

export default class BaseScene extends Phaser.Scene {
    constructor(sceneName) {
        super(sceneName);
    }

    preload() {
        this.load.image('Background', '../assets/Background.png');
        this.load.image('SplashHouse', '../assets/House.png');
        this.load.image('SplashLogo', '../assets/Start Name.png');
        this.load.image('Cursor', '../assets/Cursor.png');
        console.log('cursor loading');
    }

    create() {

        // Background Audio
        const music = this.sound.add('BackGroundMusic', { loop: true, volume: 0.5 });
        // music.play();
        music.stop();

        // Change the Cursor Style.
        this.input.setDefaultCursor('url(../assets/Cursor.png), pointer');
        console.log('cursor uploaded');

        // For Can the background image take all the frame.
        // SetOrigin set the origin of the background to start from top left corner with dimintion (x = 0, y = 0).
        const background = this.add.image(0, 0, 'Background').setOrigin(0);

        // Set the background image to take all the frame of the game i set 1400 and 900.
        background.displayWidth = this.sys.canvas.width;
        background.displayHeight = this.sys.canvas.height;
    }
}
