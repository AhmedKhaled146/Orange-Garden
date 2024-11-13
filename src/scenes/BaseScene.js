import Phaser from 'phaser';

export default class BaseScene extends Phaser.Scene {
    constructor(sceneName) {
        super(sceneName);
    }

    preload() {
        this.load.image('Background', '../assets/Background.png');
        this.load.image('SplashHouse', '../assets/House.png');
        this.load.image('SplashLogo', '../assets/Start Name.png');
        this.load.image('StartText', '../assets/Start Text.png');
        this.load.image('EmptyGround', '../assets/Ground 4.png');
        this.load.image('Ground1', '../assets/Ground 1.png');
        this.load.image('Ground2', '../assets/Ground 2.png');
        this.load.image('Ground3', '../assets/Ground 3.png');
        this.load.image('Fence', '../assets/Fence.png');
        this.load.image('Seed', '../assets/Seed.png');
        this.load.image('OrangeTree', '../assets/Tree2.png');
        this.load.image('SmallTree', '../assets/Tree1.png');
        this.load.image('Cursor', '../assets/Cursor.png');
        console.log('cursor loading');

        this.load.image('Loading', '../assets/Loading.png');
        this.load.image('StartButton', '../assets/Start Button.png');
        this.load.image('Object1', '../assets/Object 01.png');
        this.load.image('Object2', '../assets/Object 02.png');
        this.load.image('Object3', '../assets/Object 03.png');
        this.load.image('Object4', '../assets/Object 04.png');
        this.load.image('Object5', '../assets/Object 05.png');
        this.load.image('Object6', '../assets/Object 06.png');

        // Load Audios
        this.load.audio('BackGroundMusic', '../assets/In Game Sound.mp3');
        this.load.audio('Failed', '../assets/Fail.wav');
        this.load.audio('Success', '../assets/Success.mp3');

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
