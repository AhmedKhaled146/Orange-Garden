import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 900,
    scene: {
        preload: function () {
            this.load.image('Background', '../assets/Background.png');
        },
        create: function () {
            this.add.image(0, 0, 'Background');
        }
    }
};

const game = new Phaser.Game(config);


