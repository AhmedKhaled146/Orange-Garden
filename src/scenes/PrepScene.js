import BaseScene from './BaseScene.js';

export default class PrepScene extends BaseScene {
    constructor() {
        super('PrepScene');
    }

    preload() {
        super.preload(); // Import the default preload. (To Get the Background Effects)
    }

    create() {
        super.create(); // Import the default Background.

        const SplashImage = this.add.image(650, 350, 'SplashImage').setOrigin(0.5);
        SplashImage.scale = 0.2;

        const StartButton = this.add.image(700, 750, 'StartButton').setOrigin(0.5);
        StartButton.scale = 0.3;

        // Make the StartButton interactive
        StartButton.setInteractive();

        StartButton.on('pointerdown', () => {
            console.log('Start button clicked');
            this.scene.start('MainScene');
        });
    }
}
