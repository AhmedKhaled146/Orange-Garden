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

        const EmptyGround = this.add.image(1050, 770, 'EmptyGround').setOrigin(0.5);
        EmptyGround.scale = 0.5;

        const ground1Array = [];
        const emptyGroundArray = [];
        const soilGrounds = [];

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
        // const groundTextures = ['Ground1', 'Ground2', 'Ground3']; // for change the same ground
        // let currentTextureIndex = 0;  // for change the same ground

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
                    soilGrounds.push(ground);
                }
            }
        }

        const seedStartX = 870
        const seedStartY = 720

        const Seed = this.add.image(seedStartX, seedStartY, 'Seed').setOrigin(0);
        Seed.scale = 0.05;
        Seed.setInteractive({ draggable: true }); // setInteractive ==> Enable interaction and dragging

        // Enable drag events for Seed
        this.input.setDraggable(Seed);

        // On drag start, make the seed follow the pointer
        Seed.on('drag', (pointer, dragX, dragY) => {
            Seed.x = dragX;
            Seed.y = dragY;
        });

        // On drag end, check the final position
        Seed.on('dragend', () => {
            let isOnEmptyGround = false;
            let targetEmptyGround = null;

            // Check if Seed is over EmptyGround and hide if so
            emptyGroundArray.forEach((emptyGround) => {
                if (Phaser.Geom.Intersects.RectangleToRectangle(Seed.getBounds(), emptyGround.getBounds())) {
                    isOnEmptyGround = true;
                    targetEmptyGround = emptyGround;
                }
            });

            if (isOnEmptyGround) {
                Seed.setVisible(false); // Hide Seed if on EmptyGround
                this.sound.play('Success');

                if (targetEmptyGround) {
                    targetEmptyGround.setTexture('Ground1');
                    emptyGroundArray.splice(emptyGroundArray.indexOf(targetEmptyGround), 1);
                }

                // Change the same land Levels
                // if (targetEmptyGround) {
                //     targetEmptyGround.setTexture(groundTextures[currentTextureIndex]);
                //     currentTextureIndex = (currentTextureIndex + 1) % groundTextures.length;
                // }

                this.time.delayedCall(1000, () => {
                    Seed.setPosition(seedStartX, seedStartY);
                    Seed.setVisible(true);
                });
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
                    Seed.setPosition(seedStartX, seedStartY);
                }
            }
        });

        const SmallTree = this.add.image(515, 392, 'SmallTree').setOrigin(0.5);
        SmallTree.scale = 0.4;

        const GrowthPlant = this.add.image(610, 415, 'OrangeTree').setOrigin(0.5);
        GrowthPlant.scale = 0.5;

        const objects = [
            { image: 'Object1', x: 300, y: 770, scale: 0.04 },
            { image: 'Object2', x: 400, y: 770, scale: 0.05 },
            { image: 'Object3', x: 500, y: 770, scale: 0.04 },
            { image: 'Object4', x: 600, y: 770, scale: 0.05 },
            { image: 'Object5', x: 700, y: 770, scale: 0.04 },
            { image: 'Object6', x: 800, y: 770, scale: 0.05 },
        ];

        // Create objects and make them interactive
        objects.forEach(objData => {
            const obj = this.add.image(objData.x, objData.y, objData.image)
                .setOrigin(0.5)
                .setScale(objData.scale)
                .setInteractive();

            // Store original position
            obj.originalX = obj.x;
            obj.originalY = obj.y;

            // Enable dragging
            this.input.setDraggable(obj);

            obj.on('drag', (pointer, dragX, dragY) => {
                obj.x = dragX;
                obj.y = dragY;
            });

            obj.on('dragend', () => {
                // For not Duplicated with Seed Drag
                // Return the object to its original position if not dropped on a valid target
                obj.x = obj.originalX;
                obj.y = obj.originalY;
            });
        });

    }
}
