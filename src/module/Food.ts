/** 食物类 */
class Food {
  /** 保存食物元素的DOM对象 */
  element: HTMLElement

  /** 食物类构造函数 */
  constructor() {
    this.element = document.getElementById('BigFood')!
    // this.X
  }

  /** 食物的横坐标 */
  get X(): number {
    return this.element.offsetLeft
  }
  /** 食物的纵坐标 */
  get Y(): number {
    return this.element.offsetTop
  }
  /** 改变食物的位置 */
  change() {
    //随机生成两个数作为XY坐标
    let x = Math.round(Math.random() * 29) * 10
    let y = Math.round(Math.random() * 29) * 10
    //改变食物元素的坐标
    this.element.style.left = x + 'px'
    this.element.style.top = y + 'px'
  }
}

/** 默认导出 */
export default Food
