import BaseScene from './BaseScene.js';

export default class PrepScene extends BaseScene {
    constructor() {
        super('PrepScene');
    }

    preload() {
        super.preload(); // Import the default preload. (To Get the Background Effects)

        // Load images
        this.load.image('SplashImage', '../assets/Splash Image.png');
        this.load.image('StartButton', '../assets/Start Button.png');

        // Load Audios
        this.load.audio('BackGroundMusic', '../assets/In Game Sound.mp3');
    }

    create() {
        super.create(); // Import the default Background.

        // Background Audio
        const music = this.sound.add('BackGroundMusic', { loop: true, volume: 0.5 });
        music.stop();

        const SplashImage = this.add.image(650, 350, 'SplashImage').setOrigin(0.5);
        SplashImage.scale = 0.2;

        const StartButton = this.add.image(700, 750, 'StartButton').setOrigin(0.5);
        StartButton.scale = 0.3;

        // Make the StartButton interactive
        StartButton.setInteractive();

        // Set the pointerdown event listener for the StartButton
        StartButton.on('pointerdown', () => {
            console.log('Start button clicked');
            // Switch to the 'MainScene' when the button is clicked
            this.scene.start('MainScene');
        });
    }
}
