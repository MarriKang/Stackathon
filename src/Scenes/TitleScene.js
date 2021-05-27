import "phaser";
import WebFontFile from '../Config/WebFontFile'

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }
  preload() {
    const font = new WebFontFile(this.load, "Indie Flower");
    this.load.addFile(font);
    this.load.image('title', 'public/assets/Title screen.png')
    this.load.image('start', 'public/assets/Start button.png')
  }

  create() {

    this.add.image(0, 0, 'title').setOrigin(0)

    const startButton = this.add.image(400, 480, 'start').setOrigin(0.5,0.5)
    startButton.setInteractive({ useHandCursor: true });
    startButton.on("pointerdown", () => this.clickHandler());
  }

  clickHandler() {
    this.game.canvas.style.cursor = "";
    this.scene.switch('Game');
  }

  update() {}
}
