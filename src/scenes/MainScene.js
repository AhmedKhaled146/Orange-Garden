import BaseScene from './BaseScene.js';

export default class MainScene extends BaseScene {
    constructor() {
        super('MainScene');
    }

    preload() {
        super.preload(); // Import the default preload. (To Get the Background Effects)

        // Load images
        this.load.image('StartText', '../assets/Start Text.png');
        this.load.image('EmptyGround', '../assets/Ground 4.png');
        this.load.image('Seed', '../assets/Seed.png');

    }

    create() {
        super.create(); // Import the default Background.
        

        const SplashHouse = this.add.image(500, 220, 'SplashHouse').setOrigin(0.5);
        SplashHouse.scale = 0.5;

        const SmallSplashLogo = this.add.image(1050, 220, 'SplashLogo').setOrigin(0.5);
        SmallSplashLogo.scale = 0.3;

        const StartText = this.add.image(1050, 520, 'StartText').setOrigin(0.5);
        StartText.scale = 0.2;

        const EmptyGround = this.add.image(1050, 620, 'EmptyGround').setOrigin(0);
        EmptyGround.scale = 1.1;

        const Seed = this.add.image(850, 600, 'Seed').setOrigin(0);
        Seed.scale = 0.1;





    }
}
