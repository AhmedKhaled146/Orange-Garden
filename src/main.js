import Phaser from 'phaser';
import SplashScene from './scenes/SplashScene';

const config = {
    type: Phaser.AUTO,
    width: 1400,
    height: 900,
    scene: [ SplashScene ] // In array that we can pass many scenes as we want...
};

const game = new Phaser.Game(config);


