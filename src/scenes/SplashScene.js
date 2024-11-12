import BaseScene from './BaseScene.js';

export default class SplashScene extends BaseScene {
    constructor() {
        super('SplashScene');
    }

    preload() {
        super.preload(); // Import the default preload. (To Get the Background Effects)

        // Load images
        this.load.image('SplashHouse', '../assets/House.png');
        this.load.image('SplashLogo', '../assets/Start Name.png');

        // Load Audios
        this.load.audio('BackGroundMusic', '../assets/In Game Sound.mp3');
    }

    create() {
        super.create(); // Import the default Background.

        // Background Audio
        const music = this.sound.add('BackGroundMusic', { loop: true, volume: 0.5 });
        music.play();

        // Splash Screen
        // We're using '+=10' to move the house up and down the screen.
        // The 'yoyo: true' makes the house move back and forth.
        // The 'repeat: -1' makes the house move indefinitely.
        // The 'ease: 'Sine.easeInOut'' makes the house move smoothly.
        // The 'targets: SplashHouse' specifies the object to be moved.
        // The 'y: '+=10'' specifies the amount to move the object up and down.
        // The 'duration: 1000' specifies the time it takes for the object to move up and down.
        // The 'repeat: -1' makes the movement repeat indefinitely.

        // Cordinates (X ,Y) and The Splash Screen is the image key.
        const SplashHouse = this.add.image(450, 350, 'SplashHouse').setOrigin(0.5);
        SplashHouse.scale = 0.5;

        const SmallSplashLogo = this.add.image(825, 400, 'SplashLogo').setOrigin(0.5);
        SmallSplashLogo.scale = 0.1; // Start with small Scale.

        // Up and Down house.
        this.tweens.add({
            targets: SplashHouse,
            y: '+=10', // Move 10 pixels down
            duration: 1000,
            yoyo: true, // Move back to the original position
            repeat: -1, // Infinite loop
            ease: 'Sine.easeInOut' // Smooth in and out
        });

        // Small and Big Logo.
        this.tweens.add({
            targets: SmallSplashLogo,
            scale: 0.3, // Original scale size
            duration: 2000, // Duration of the scaling effect (0.2 seconds)
            ease: 'Power2'
        });

    }
}
