import Phaser from 'phaser';
import SplashScene from './scenes/SplashScene';
import PrepScene from './scenes/PrepScene';
import MainScene from './scenes/MainScene';

// Configration Setup for Phaser
const config = {
    type: Phaser.AUTO,
    width: 1400,
    height: 900,
    scene: [ SplashScene, MainScene, PrepScene ] // In array that we can pass many scenes as we want...
};

const game = new Phaser.Game(config);


