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
        this.load.image('Ground1', '../assets/Ground 1.png');
        this.load.image('Ground2', '../assets/Ground 2.png');
        this.load.image('Ground3', '../assets/Ground 3.png');
        this.load.image('Fence', '../assets/Fence.png');
        this.load.image('Seed', '../assets/Seed.png');
        this.load.image('OrangeTree', '../assets/Tree2.png');

    }

    create() {
        super.create(); // Import the default Background.

        const SmallSplashLogo = this.add.image(1050, 220, 'SplashLogo').setOrigin(0.5);
        SmallSplashLogo.scale = 0.3;

        const StartText = this.add.image(1050, 520, 'StartText').setOrigin(0.5);
        StartText.scale = 0.2;

        const EmptyGround = this.add.image(1050, 620, 'EmptyGround').setOrigin(0);
        EmptyGround.scale = 1.1;

        const Seed = this.add.image(850, 600, 'Seed').setOrigin(0)
        Seed.scale = 0.1;


        // let startX = 200;
        // let startY = 285;
        // let spacingX = 40;
        // let spacingY = 25;

        // for (let i = 0; i < 4; i++) {
        //     const ground = this.add.image(startX + (i) * spacingX, startY + Math.floor(i) * spacingY, 'Ground1').setOrigin(0);
        //     ground.scale = 0.5;
        // }

        let startX = 250;
        let startY = 305;
        let spacingX = 40;
        let spacingY = 25;
        let offsetX = 40; // Amount to shift left for each new row
        let offsetY = 20;
        let rows = 7; // Number of rows
        let columns = 4; // Number of columns in each row

        for (let row = 0; row < rows; row++) {
            for (let i = 0; i < columns; i++) {
                const ground = this.add.image(
                    startX - row * offsetX + i * spacingX,
                    startY + row * offsetY + i * spacingY,
                    'Ground1'
                ).setOrigin(0);
                ground.scale = 0.5;
            }
        }

        const SplashHouse = this.add.image(460, 265, 'SplashHouse').setOrigin(0.5);
        SplashHouse.scale = 0.4;

        const OrangeTree = this.add.image(190, 310, 'OrangeTree').setOrigin(0.5);
        OrangeTree.scale = 0.5;

        const Fence = this.add.image(180, 480, 'Fence').setOrigin(0.5);
        Fence.scale = 0.4;

    }
}
