import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('p1', 'assets/p1.png');
  }

  create () {
    this.scene.start('Preloader');
  }
}
