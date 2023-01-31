import Food from "./Food";
import Bottom from "./bottom";
import Snake from "./Snake";
/** 游戏控制类 */
class GameConsole {
  snake: Snake;
  bottom: Bottom;
  food: Food;
  isEnd = false;
  xOffset = 0;
  yOffset = 0;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.bottom = new Bottom();
  }
  /** 游戏初始化(开始) */
  init() {
    //绑定按键事件
    document.addEventListener("keydown", this.keyDown.bind(this));
    //开始游戏
    this.run();
  }
  /** 按键按下事件 */
  keyDown(e: KeyboardEvent) {
    let x = this.xOffset;
    let y = this.yOffset;
    switch (e.key) {
      case "ArrowUp":
        this.yOffset = y === 1 ? y : -1;
        this.xOffset = 0;
        break;
      case "ArrowDown":
        this.yOffset = y === -1 ? y : 1;
        this.xOffset = 0;
        break;
      case "ArrowLeft":
        this.xOffset = x === 1 ? x : -1;
        this.yOffset = 0;
        break;
      case "ArrowRight":
        this.xOffset = x === -1 ? x : 1;
        this.yOffset = 0;
        break;
      default:
        // this.xOffset = 0
        // this.yOffset = 0
        break;
    }
  }
  /* ArrowUp ArrowDown ArrowLeft ArrowRight */
  /** 控制游戏开始运行 */
  run() {
    // 判断蛇是否吃到食物
    if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
      this.bottom.scoreAdd();
      this.food.change();
      this.snake.addBody();
    }
    //让蛇进行移动,并捕获是否发生异常
    try {
      this.snake.move(this.xOffset, this.yOffset);
      console.log(this.snake.X, this.snake.Y);
    } catch (error) {
      alert(error);
      this.isEnd = true;
    }
    //检测游戏是否结束
    if (!this.isEnd) {
      setTimeout(this.run.bind(this), (11 - this.bottom.level) * 30);
    }
  }
}

export default GameConsole;
