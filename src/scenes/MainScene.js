import BaseScene from './BaseScene.js';

export default class MainScene extends BaseScene {
    constructor() {
        super('MainScene');
    }

    preload() {
        super.preload(); // Import the default preload.
    }

    create() {
        super.create(); // Import the default background.

        const SmallSplashLogo = this.add.image(1050, 220, 'SplashLogo').setOrigin(0.5);
        SmallSplashLogo.scale = 0.3;

        const StartText = this.add.image(1050, 520, 'StartText').setOrigin(0.5);
        StartText.scale = 0.2;

        const EmptyGround = this.add.image(1050, 620, 'EmptyGround').setOrigin(0);
        EmptyGround.scale = 1.1;

        const ground1Array = [];
        const emptyGroundArray = [];

        // Create Ground1 elements and store in an array
        let startXG1 = 250;
        let startYG1 = 305;
        let spacingXG1 = 40;
        let spacingYG1 = 25;
        let offsetXG1 = 40; 
        let offsetYG1 = 20;
        let rowsG1 = 7;
        let columnsG1 = 4;

        for (let row = 0; row < rowsG1; row++) {
            for (let i = 0; i < columnsG1; i++) {
                const ground1 = this.add.image(
                    startXG1 - row * offsetXG1 + i * spacingXG1,
                    startYG1 + row * offsetYG1 + i * spacingYG1,
                    'Ground1'
                ).setOrigin(0);
                ground1.scale = 0.5;
                ground1Array.push(ground1);
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

        // Create EmptyGround elements and store in an array
        let startXEmptyGround = 470;
        let startYEmptyGround = 420;
        let spacingXEmptyGround = 40;
        let spacingYEmptyGround = 25;
        let offsetXEmptyGround = 40; 
        let offsetYEmptyGround = 20;
        let rowsEmptyGround = 6;
        let columnsEmptyGround = 4;

        for (let row = 0; row < rowsEmptyGround; row++) {
            for (let i = 0; i < columnsEmptyGround; i++) {
                const groundType = (row === rowsEmptyGround - 1 || 
                                    i === columnsEmptyGround - 1 || 
                                    row === 0 || i === 0 || row === 1) ? 'Ground1' : 'EmptyGround';

                const ground = this.add.image(
                    startXEmptyGround - row * offsetXEmptyGround + i * spacingXEmptyGround,
                    startYEmptyGround + row * offsetYEmptyGround + i * spacingYEmptyGround,
                    groundType
                ).setOrigin(0);
                ground.scale = 0.5;

                if (groundType === 'EmptyGround') {
                    emptyGroundArray.push(ground);
                }
            }
        }

        const Seed = this.add.image(850, 600, 'Seed').setOrigin(0);
        Seed.scale = 0.03;
        Seed.setInteractive({ draggable: true }); // Step 1: Enable interaction and dragging
        let startXSeed = Seed.x;  // the original place
        let startYSeed = Seed.y;

        // Step 4: Enable drag events for Seed
        this.input.setDraggable(Seed);

        // On drag start, make the seed follow the pointer
        Seed.on('drag', (pointer, dragX, dragY) => {
            Seed.x = dragX;
            Seed.y = dragY;
        });

        // On drag end, check the final position
        Seed.on('dragend', () => {
            let isOnEmptyGround = false;

            // Step 2: Check if Seed is over EmptyGround and hide if so
            emptyGroundArray.forEach((emptyGround) => {
                if (Phaser.Geom.Intersects.RectangleToRectangle(Seed.getBounds(), emptyGround.getBounds())) {
                    isOnEmptyGround = true;
                }
            });

            if (isOnEmptyGround) {
                Seed.setVisible(false); // Step 3: Hide Seed if on EmptyGround
                this.sound.play('Success');
            } else {
                // Optional: Snap Seed to nearest Ground1
                let closestGround = null;
                let closestDistance = Infinity;

                ground1Array.forEach((ground1) => {
                    let distance = Phaser.Math.Distance.Between(Seed.x, Seed.y, ground1.x, ground1.y);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestGround = ground1;
                    }
                });

                if (closestGround) {
                    this.sound.play('Failed');
                    Seed.x = closestGround.x;
                    Seed.y = closestGround.y;
                }
            }
        });
    }
}
