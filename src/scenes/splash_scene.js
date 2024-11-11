import BaseScene from './BaseScene.js';

export default class SplashScene extends BaseScene {
    constructor() {
        super('SplashScene');
    }

    create() {
        super.create(); // Import the default Background

        this.add.text(700, 100, 'Splash Screen', {
            fontSize: '48px',
            color: '#ffffff',
        }).setOrigin(0.5);
    }
}
