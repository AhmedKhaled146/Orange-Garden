import Phaser from 'phaser';
import SplashScene from './scenes/splash_scene';

const config = {
    type: Phaser.AUTO,
    width: 1400,
    height: 900,
    scene: [ SplashScene ]
};

const game = new Phaser.Game(config);


