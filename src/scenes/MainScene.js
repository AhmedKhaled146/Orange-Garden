import BaseScene from './BaseScene.js';

export default class MainScene extends BaseScene {
    constructor() {
        super('MainScene');
    }

    preload() {
        super.preload(); // Import the default preload. (To Get the Background Effects)

        // Load images

        // Load Audios
        this.load.audio('BackGroundMusic', '../assets/In Game Sound.mp3');
    }

    create() {
        super.create(); // Import the default Background.
        

        // Background Audio
        const music = this.sound.add('BackGroundMusic', { loop: true, volume: 0.5 });
        // music.play();
        music.stop();

        // Change the Cursor Style.
        // const Cursor = this.input.setDefaultCursor('url(../assets/Cursor.png), Cursor');
        // Cursor.

        const SplashImage = this.add.image(650, 350, 'SplashImage').setOrigin(0.5);
        SplashImage.scale = 0.2;



    }
}
