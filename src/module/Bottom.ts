/** 记分牌类 */
class Bottom {
  /** 成绩 */
  score = 0
  /** 等级 */
  level = 1
  /** 成绩元素的DOM对象 */
  private scoreEle: HTMLElement
  /** 等级元素的DOM对象 */
  private levelEle: HTMLElement
  /** 最大等级 */
  private maxLevel: number
  /** 提高等级所需的分数 */
  private scoreUp: number
  /** 记分牌类构造函数 */
  constructor(scoreUp: number = 10, maxLevel: number = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.scoreUp = scoreUp
  }

  /** 分数增加 */
  scoreAdd() {
    this.scoreEle.innerHTML = ++this.score + ''
    //当分数为10的整数倍的时候提升等级
    if (this.score % this.scoreUp === 0) {
      this.levelUp()
    }
  }

  /** 改变等级 */
  private levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

export default Bottom
