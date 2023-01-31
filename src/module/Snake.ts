/** 贪吃蛇类 */
class Snake {
  /** 蛇元素的DOM对象 */
  element: HTMLElement
  /** 蛇头元素的DOM对象 */
  snakeHead: HTMLElement
  /** 蛇身体的DOM对象的集合(包含蛇头) */
  snakeBody: HTMLCollection
  get X() {
    return this.snakeHead.offsetLeft
  }
  set X(v) {
    //判断蛇是否撞墙
    if (v < 0 || v > 290) {
      throw new Error('蛇撞墙了!!')
    }
    this.snakeHead.style.left = v + 'px'
  }
  get Y() {
    return this.snakeHead.offsetTop
  }
  set Y(v) {
    if (v < 0 || v > 290) {
      throw new Error('蛇撞墙了!!')
    }
    this.snakeHead.style.top = v + 'px'
  }

  /** 贪吃蛇类构造函数 */
  constructor() {
    this.element = document.getElementById('snake')!
    this.snakeHead = document.querySelector('#snake>div')!
    this.snakeBody = this.element.getElementsByTagName('div')
  }
  /** 蛇移动的方法 */
  move(xOffset: number = 0, yOffset: number = 0) {
    if (xOffset !== 0) {
      //让身体一起移动
      this.moveBody()
      this.X += xOffset * 10
    }
    if (yOffset !== 0) {
      //让身体一起移动
      this.moveBody()
      this.Y += yOffset * 10
    }
    //判断蛇是否撞到自己
    this.check()
  }
  /** 检测蛇是否撞到自己的身体 */
  check() {
    for (let i = 1; i < this.snakeBody.length; i++) {
      let elehead = this.snakeBody[0] as HTMLElement
      let elebody = this.snakeBody[i] as HTMLElement
      if (elehead.offsetLeft === elebody.offsetLeft && elebody.offsetTop === elehead.offsetTop) {
        throw new Error('撞到自己了!')
      }
    }
  }
  /** 蛇身体增加一个 */
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }
  /** 蛇的身体移动 */
  moveBody() {
    for (let i = this.snakeBody.length - 1; i >= 1; i--) {
      let beforeelement = this.snakeBody[i - 1] as HTMLElement
      let nowelement = this.snakeBody[i] as HTMLElement
      nowelement.style.left = beforeelement.offsetLeft + 'px'
      nowelement.style.top = beforeelement.offsetTop + 'px'
    }
  }
}

export default Snake
