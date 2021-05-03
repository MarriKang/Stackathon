import 'phaser';

import WebFontFile from '../Config/WebFontFile'

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('Game')
        let dialogueArr;
        let index;
        let dialogueBox;
        let spriteTest;
        let oldSprite;
        let spriteLeft;
        let spriteRight;
        let choice1;
        let choice2;
        let tag1;
        let tag2;
    }

    preload() {
        this.load.addFile(new WebFontFile(this.load, 'Indie Flower'))
        this.load.image('farfalle', 'assets/Farfalle.png');
        this.load.image('susie', 'assets/Susie.png')
        this.load.image('dialogueBox', 'assets/textbox.png')
        this.load.image('bg', 'assets/BG.png')
        this.load.image('susieTag', 'assets/Susie tag.png')
        this.load.image('farfalleTag', 'assets/Farfalle tag.png')
        let clicked = false;
    }

    create() {
        this.dialogueArr = ['Oh! Farfalle...yes, I\'m afraid \nsomething terrible has happened.', 'I\'ve lost my favorite ring. \nI can\'t find it anywhere!', 'That sucks.', 'Yes...but there\'s nothing I can do \nabout it.', 'I guess I could use a hug...']
        this.index = 0;

        // this.text = this.add.text(400, 250, 'Game screen', {
        //     fontFamily: '"Indie Flower"',
        //     fontSize: '30px'
        // })

        const background = this.add.image(0, 0, 'bg').setOrigin(0)
        this.spriteLeft = this.add.sprite(100, 180, 'farfalle').setOrigin(0.2)
        this.spriteRight = this.add.sprite(500, 180, 'susie').setOrigin(0.2)

        this.susieTag = this.add.sprite(580, 370, 'susieTag').setVisible(false)
        this.farfalleTag = this.add.sprite(230, 370, 'farfalleTag')

        this.dialogueBox = this.add.sprite(250, 480, 'dialogueBox')
        this.dialogueBox.setOrigin(0.2, 0.5)
        this.dialogueBox.setInteractive();

        // this.text = this.add.text(400, 250, 'Game screen', {
        //     color: '#000000'
        // })

        this.text = this.add.text(180, 420, 'Hey. Are you crying?', {
            fontFamily: '"Indie Flower"',
            fontSize: '30px',
            color: "#000000"
        })


        this.dialogueBox.on('pointerdown', () => {
            this.clicked = true
        })
    }

    update() {
        if (this.clicked) {
            this.dialogueManager()
            this.index++;
            this.clicked = false;
        }

        if (this.index === this.dialogueArr.length + 1) {
            this.showChoices()
            this.dialogueBox.visible = false;
        }

        if(this.index === 0) {
            this.showDialogue();
        }
    }

    dialogueManager() {
        if (this.index === 0) {
            this.farfalleTag.visible = false;
            this.susieTag.visible = true;
        } else if (this.index === 2) {
            this.farfalleTag.visible = true;
            this.susieTag.visible = false;
            // console.log("whoa")
            // this.oldSprite = this.spriteTest
            // this.oldSprite.visible = false;
            // this.spriteTest = this.add.sprite(40, 200, 'p1').setScale(0.5).setOrigin(0.2)
            this.dialogueBox.set
        } else if (this.index === 3) {
            this.farfalleTag.visible = false;
            this.susieTag.visible = true;
        }
        this.text.setText(this.dialogueArr[this.index])
    }

    showChoices() {
        this.susieTag.visible = false;

        this.choice1 = this.add.rectangle(400, 100, 200, 50, '#000000', 1)
        this.add.text(323, 81, 'Punch them', {
            fontFamily: '"Indie Flower"',
            fontSize: '30px',
        })
        this.choice1.setInteractive({ useHandCursor: true })
        this.choice1.on('pointerdown', () => {
            this.index = 0;
            this.scene.switch('GameOver1')
        })

        this.choice2 = this.add.rectangle(400, 200, 200, 50, "#000000", 1)
        this.add.text(340, 181, 'Hug them', {
            fontFamily: '"Indie Flower"',
            fontSize: '30px',
        })
        this.choice2.setInteractive({ useHandCursor: true })
        this.choice2.on('pointerdown', () => {
            this.index = 0;
            // this.oldSprite.visible = false;
            // this.spriteTest.visible = false;
            this.scene.switch('Stage2')
        })
    }

    showDialogue() {
        this.dialogueBox.visible = true;
    }

}