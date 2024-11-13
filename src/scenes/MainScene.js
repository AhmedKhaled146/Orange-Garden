import BaseScene from './BaseScene.js';

export default class MainScene extends BaseScene {
    constructor() {
        super('MainScene');
    }

    preload() {
        super.preload(); // Import the default preload. (To Get the Background Effects)
    }

    create() {
        super.create(); // Import the default Background.

        const SmallSplashLogo = this.add.image(1050, 220, 'SplashLogo').setOrigin(0.5);
        SmallSplashLogo.scale = 0.3;

        const StartText = this.add.image(1050, 520, 'StartText').setOrigin(0.5);
        StartText.scale = 0.2;

        const EmptyGround = this.add.image(1050, 620, 'EmptyGround').setOrigin(0);
        EmptyGround.scale = 1.1;

        // const Seed = this.add.image(850, 600, 'Seed').setOrigin(0);
        // Seed.scale = 0.1;

        const Seed = this.add.image(470 + 40 * 3, 420 + 25 * 5, 'Seed').setOrigin(0).setInteractive();
        Seed.scale = 0.1;

        // Add the Seed interaction
        Seed.on('pointerdown', () => {
            // this.handleSeedInteraction(Seed); // Call a function to handle the interaction
            console.log('Seed clicked');
        });
        this.input.setDraggable(Seed);

        // let startX = 200;
        // let startY = 285;
        // let spacingX = 40;
        // let spacingY = 25;

        // for (let i = 0; i < 4; i++) {
        //     const ground = this.add.image(startX + (i) * spacingX, startY + Math.floor(i) * spacingY, 'Ground1').setOrigin(0);
        //     ground.scale = 0.5;
        // }

        let startXG1 = 250;
        let startYG1 = 305;
        let spacingXG1 = 40;
        let spacingYG1 = 25;
        let offsetXG1 = 40; // Amount to shift left for each new row
        let offsetYG1 = 20;
        let rowsG1 = 7; // Number of rows
        let columnsG1 = 4; // Number of columns in each row

        for (let row = 0; row < rowsG1; row++) {
            for (let i = 0; i < columnsG1; i++) {
                const ground1 = this.add.image(
                    startXG1 - row * offsetXG1 + i * spacingXG1,
                    startYG1 + row * offsetYG1 + i * spacingYG1,
                    'Ground1'
                ).setOrigin(0);
                ground1.scale = 0.5;
            }
        }

        const SplashHouse = this.add.image(460, 265, 'SplashHouse').setOrigin(0.5);
        SplashHouse.scale = 0.4;

        const OrangeTree = this.add.image(190, 310, 'OrangeTree').setOrigin(0.5);
        OrangeTree.scale = 0.5;

        const Fence = this.add.image(180, 480, 'Fence').setOrigin(0.5);
        Fence.scale = 0.4;


        let startXG2 = 425;
        let startYG2 = 400;
        let offsetXG2 = 40; // مقدار التحرك لليسار لكل صف جديد
        let offsetYG2 = 20; // مقدار التحرك لأسفل لكل صف جديد
        let rowsG2 = 6; // عدد الصفوف في العمود الواحد

        for (let row = 0; row < rowsG2; row++) {
            const ground2 = this.add.image(
                startXG2 - row * offsetXG2, // تقليل X لكل صف جديد
                startYG2 + row * offsetYG2, // زيادة Y لكل صف جديد
                'Ground2'
            ).setOrigin(0);
            ground2.scale = 0.5;
        }

        let startXEmptyGround = 470;
        let startYEmptyGround = 420;
        let spacingXEmptyGround = 40;
        let spacingYEmptyGround = 25;
        let offsetXEmptyGround = 40; // Amount to shift left for each new row
        let offsetYEmptyGround = 20;
        let rowsEmptyGround = 6; // Number of rows
        let columnsEmptyGround = 4; // Number of columns in each row
        
        for (let row = 0; row < rowsEmptyGround; row++) {
            for (let i = 0; i < columnsEmptyGround; i++) {
                // Check if it's the last row or last column
                let groundType = (row === rowsEmptyGround - 1 || 
                                  i === columnsEmptyGround - 1 || 
                                  row === 0 || i === 0 || row === 1
                                  || columnsEmptyGround[i] === 1) ? 'Ground1' : 'EmptyGround';
        
                const ground = this.add.image(
                    startXEmptyGround - row * offsetXEmptyGround + i * spacingXEmptyGround,
                    startYEmptyGround + row * offsetYEmptyGround + i * spacingYEmptyGround,
                    groundType // Use the chosen ground type
                ).setOrigin(0);
                ground.scale = 0.5;
            }
        }

        const SmallTree = this.add.image(515, 392, 'SmallTree').setOrigin(0.5);
        SmallTree.scale = 0.4;

        const GrowthPlant = this.add.image(610, 415, 'OrangeTree').setOrigin(0.5);
        GrowthPlant.scale = 0.5;



    }
}
