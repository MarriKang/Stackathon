import "phaser";
import WebFontFile from '../Config/WebFontFile'

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }
  preload() {
    const font = new WebFontFile(this.load, "Indie Flower");
    this.load.addFile(font);
    this.load.image('title', 'assets/Title screen.png')
    this.load.image('start', 'assets/Start button.png')
  }

  create() {
    // const title = this.add.text(400, 250, "Hello, world!", {
    //   fontFamily: '"Indie Flower"',
    //   fontSize: "50px",
    // });

    this.add.image(0, 0, 'title').setOrigin(0)

    const startButton = this.add.image(400, 480, 'start').setOrigin(0.5,0.5)
    startButton.setInteractive({ useHandCursor: true });
    startButton.on("pointerdown", () => this.clickHandler());

    //const bg = this.add.image(0, 0, 'big-test').setOrigin(0,0).setScale(1)
  }

  clickHandler() {
    this.game.canvas.style.cursor = "";
    console.log("clicked")
    this.scene.switch('Game');
  }

  update() {}
}
