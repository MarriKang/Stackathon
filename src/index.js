import "phaser";
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import TitleScene from './Scenes/TitleScene';
import GameOver1 from './Scenes/GameOver1'

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Title', TitleScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver1', GameOver1)
    this.scene.start('Title');
  }
}

window.game = new Game();
