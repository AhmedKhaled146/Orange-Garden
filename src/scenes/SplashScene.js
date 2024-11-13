import BaseScene from './BaseScene.js';

function loading(scene) {
    // النص الأساسي لعرض التحميل
    const baseText = "تحميل";
    let points = '';
    const displayText = scene.add.text(680, 750, baseText, { 
        fontSize: '100px',
        fill: '#3a2652',
        fontStyle: 'Bolder',
        align: 'right',
        rtl: true
    }).setOrigin(0.5);

    scene.time.addEvent({
        delay: 500, // half second
        loop: true,
        callback: () => {
            if (points.length < 3) {
                points += '.';
            } else {
                points = ''; 
            }
            displayText.text = baseText + points;
        }
    });

    // just 10 second and Replacing ...
    scene.time.delayedCall(3000, () => {
        // displayText.destroy();
        scene.scene.start('PrepScene');

        // Replace Loading with Start Game Button
        // const StartButton = scene.add.image(700, 750, 'StartButton').setOrigin(0.5);
        // StartButton.scale = 0.3;


        // StartButton.setInteractive();

        // // Set the pointerdown event listener for the StartButton
        // StartButton.on('pointerdown', () => {
        //     console.log('Start button clicked');
        //     // Switch to the 'MainScene' when the button is clicked
        //     scene.scene.start('MainScene');
        // });
    });
}

export default class SplashScene extends BaseScene {
    constructor() {
        super('SplashScene');
    }

    preload() {
        super.preload(); // Import the default preload. (To Get the Background Effects)
    }

    create() {
        super.create(); // Import the default Background.        

        // Cordinates (X ,Y) and The Splash Screen is the image key.
        const SplashHouse = this.add.image(450, 350, 'SplashHouse').setOrigin(0.5);
        SplashHouse.scale = 0.5;

        const SmallSplashLogo = this.add.image(825, 400, 'SplashLogo').setOrigin(0.5);
        SmallSplashLogo.scale = 0.1; // Start with small Scale.

        // const Loading = this.add.image(680, 620, 'Loading').setOrigin(0.5);
        // Loading.scale = 0.3;

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

        loading(this);
        
    }
}
