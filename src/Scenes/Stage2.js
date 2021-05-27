import 'phaser';

import WebFontFile from '../Config/WebFontFile'

export default class Stage2 extends Phaser.Scene {
    constructor() {
        super('Stage2')
    }

    preload() {
        this.load.image('win', 'public/assets/Win.png')
    }

    create() {

    //     const text = this.add.text(400, 250, 'Good job :)', {
    //         fontFamily: '"Indie Flower"',
    //         fontSize: '30px'
    //     })
    //     text.setOrigin(0.5,0.5)

    //     //this.restartButton = this.add.rectangle(400, 400, 100, 50, 0xfffff, 1);
    //     text.setInteractive({ useHandCursor: true });
    //     text.on("pointerdown", () => this.clickHandler());

        this.add.image(0, 0, 'win').setOrigin(0, 0)
    }

    update() {
    }

    // clickHandler() {
    //     this.game.canvas.style.cursor = "";
    //     console.log("clicked")
    //     this.scene.switch('Title');
    //   }

}