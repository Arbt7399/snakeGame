const cellSize = 22            //每个格子的大小
const areaSize = cellSize * 12 //游戏区域的大小
let moveSpeed                  //移动速度
let tailSpeed                  //尾巴变短速度
let maxScore = 0               //最高分
let totalScore                 //总分数
let snakeScore                 //储存分数
let tail                       //尾巴要加多长
let speedUp                    //是否加速
let eatFood                    //是否吃到食物
let holeExist                  //洞口是否已出现
let firstHole                  //是否为第一个洞口
let musicIsOn                  //音乐是否开启
let gameOn                     //初始状态
let gameOver                   //死亡状态
let pause                      //暂停状态
let settle                     //结算状态
let settling                   //结算中

let snake  //蛇的位置
let food   //食物的位置
let hole   //洞的位置

const body = document.querySelector('body')
const whole = document.querySelector('.whole')
const head = document.querySelector('.bgHead')
const game = document.querySelector('.background')
const keyboard = document.querySelector('.bgKeyboard')
const gameContainer = document.querySelector('.background')
const pauseButton = document.querySelector('.pause')
const speedButton = document.querySelector('.speedUp')
const dirControlButton = document.querySelector('.dirControl')
const scoreText = document.querySelector('.score')
const tip = document.querySelector('.tip')
const pausePanel = document.querySelector('.pausePanel')
const word1 = document.querySelector('.word1')
const musicON = document.querySelector('.musicON')
const continueButton = document.querySelector('.continue')
const dirUp = document.querySelector('#up')
const dirDown = document.querySelector('#down')
const dirLeft = document.querySelector('#left')
const dirRight = document.querySelector('#right')
const gameOverPanel = document.querySelector('.gameOverPanel')
const gameOverBG = document.querySelector('.gameOverBG')
const word2 = document.querySelector('.word2')
const icon = document.querySelector('.icon')
const again = document.querySelector('.again')
const maxScoreText = document.querySelector('.maxScore')
const currentScoreText = document.querySelector('.currentScore')

let windowHeight, bodySize, gameWidth, headHeight, headWidth, dirControlWidth
let keyboardHeight, buttonWidth, buttonTop1, buttonTop2, buttonLeft, i
let keyboardTop, keyboardLeft, score1, score2, font, letter, Left, Top
let tipWidth, tipHeight, tipTop, tipLeft, windowWidth, pausePanelHeight
let pausePanelWidth, pausePanelTop, pausePanelLeft, word11, word12
let font1, musicWidth, musicHeight, musicTop, musicLeft, continueHeight
let continueWidth, continueTop, continueLeft, goHeight, goWidth, goTop
let gobgWidth, gobgHeight, iconWidth, againWidth, againTop, againLeft
let maxScore1, maxScore2, currentScore1, currentScore2

//按屏幕比例缩放
function resize() {
  windowHeight = window.innerHeight
  windowWidth = window.innerWidth
  bodySize = 1000 / 659 * windowHeight
  gameWidth = 286 / 659 * windowHeight
  headHeight = 152 / 659 * windowHeight
  headWidth = 308 / 659 * windowHeight
  keyboardHeight = 221 / 659 * windowHeight
  Top = (152 - 5) / 659 * windowHeight
  Left = (308 - 286) / 2 / 659 * windowHeight

  score1 = 123 / 659 * windowHeight
  score2 = 110 / 659 * windowHeight
  font = 17 / 659 * windowHeight
  letter = 1 / 659 * windowHeight

  buttonWidth = 53 / 659 * windowHeight  //圆按钮直径
  buttonTop1 = 25 / 659 * windowHeight
  buttonTop2 = 100 / 659 * windowHeight
  buttonLeft = 32 / 659 * windowHeight

  dirControlWidth = 157 / 659 * windowHeight  //方向键边长
  keyboardTop = 12 / 659 * windowHeight
  keyboardLeft = 115 / 659 * windowHeight

  tipWidth = 185 / 659 * windowHeight
  tipHeight = 110 / 659 * windowHeight
  tipTop = 490 / 659 * windowHeight
  tipLeft = windowWidth / 2 + gameWidth / 2 + 50

  pausePanelHeight = 150 / 659 * windowHeight
  pausePanelWidth = 225 / 659 * windowHeight
  pausePanelTop = 205 / 659 * windowHeight
  pausePanelLeft = windowWidth / 2 - pausePanelWidth / 2 - 2

  word11 = 32 / 659 * windowHeight
  word12 = 105 / 659 * windowHeight
  font1 = 17 / 659 * windowHeight

  musicWidth = 88 / 659 * windowHeight
  musicHeight = 37 / 659 * windowHeight
  musicTop = 89 / 659 * windowHeight
  musicLeft = 30 / 659 * windowHeight

  continueHeight = 36 / 659 * windowHeight
  continueWidth = 68 / 659 * windowHeight
  continueTop = 90 / 659 * windowHeight
  continueLeft = 130 / 659 * windowHeight

  goHeight = 200 / 659 * windowHeight
  goWidth = 225 / 659 * windowHeight
  goTop = 20 / 659 * windowHeight

  gobgHeight = 180 / 659 * windowHeight
  gobgWidth = 215 / 659 * windowHeight

  iconWidth = 78 / 659 * windowHeight

  againWidth = 100 / 659 * windowHeight
  againTop = 147 / 659 * windowHeight
  againLeft = 63 / 659 * windowHeight

  maxScore1 = 83 / 659 * windowHeight
  maxScore2 = 107 / 659 * windowHeight

  currentScore1 = 113 / 659 * windowHeight
  currentScore2 = 105 / 659 * windowHeight

  body.style.backgroundSize = bodySize + 'px'

  whole.style.width = headWidth + 'px'

  head.style.height = headHeight + 'px'
  head.style.width = headWidth + 'px'
  head.style.backgroundSize = headWidth + 'px ' + headHeight + 'px'

  game.style.height = gameWidth + 'px'
  game.style.width = gameWidth + 'px'
  game.style.top = Top + 'px'
  game.style.left = Left + 'px'
  game.style.backgroundSize = gameWidth + 'px ' + gameWidth + 'px'

  keyboard.style.height = keyboardHeight + 'px'
  keyboard.style.width = gameWidth + 'px'
  keyboard.style.top = gameWidth + Top - 2 + 'px'
  keyboard.style.left = Left + 'px'
  keyboard.style.backgroundSize = gameWidth + 'px ' + keyboardHeight + 'px'

  pauseButton.style.height = buttonWidth + 'px'
  pauseButton.style.width = buttonWidth + 'px'
  pauseButton.style.backgroundSize = buttonWidth + 'px ' + buttonWidth + 'px'
  pauseButton.style.top = buttonTop1 + 'px'
  pauseButton.style.left = buttonLeft + 'px'

  speedButton.style.height = buttonWidth + 'px'
  speedButton.style.width = buttonWidth + 'px'
  speedButton.style.backgroundSize = buttonWidth + 'px ' + buttonWidth + 'px'
  speedButton.style.top = buttonTop2 + 'px'
  speedButton.style.left = buttonLeft + 'px'

  dirControlButton.style.height = dirControlWidth + 'px'
  dirControlButton.style.width = dirControlWidth + 'px'
  dirControlButton.style.backgroundSize = dirControlWidth + 'px ' + dirControlWidth + 'px'
  dirControlButton.style.top = keyboardTop + 'px'
  dirControlButton.style.left = keyboardLeft + 'px'

  dirUp.style.height = buttonWidth + 'px'
  dirUp.style.width = buttonWidth + 'px'
  dirUp.style.top = keyboardTop + 'px'
  dirUp.style.left = keyboardLeft + buttonWidth + 'px'

  dirDown.style.height = buttonWidth + 'px'
  dirDown.style.width = buttonWidth + 'px'
  dirDown.style.top = keyboardTop + buttonWidth * 2 + 'px'
  dirDown.style.left = keyboardLeft + buttonWidth + 'px'

  dirLeft.style.height = buttonWidth + 'px'
  dirLeft.style.width = buttonWidth + 'px'
  dirLeft.style.top = keyboardTop + buttonWidth + 'px'
  dirLeft.style.left = keyboardLeft + 'px'

  dirRight.style.height = buttonWidth + 'px'
  dirRight.style.width = buttonWidth + 'px'
  dirRight.style.top = keyboardTop + buttonWidth + 'px'
  dirRight.style.left = keyboardLeft + buttonWidth * 2 + 'px'

  scoreText.style.marginTop = score1 + 'px'
  scoreText.style.marginLeft = score2 + 'px'
  scoreText.style.fontSize = font + 'px'
  scoreText.style.letterSpacing = letter + 'px'

  tip.style.height = tipHeight + 'px'
  tip.style.width = tipWidth + 'px'
  tip.style.backgroundSize = tipWidth + 'px ' + tipHeight + 'px'
  tip.style.top = tipTop + 'px'
  tip.style.left = tipLeft + 'px'

  pausePanel.style.height = pausePanelHeight + 'px'
  pausePanel.style.width = pausePanelWidth + 'px'
  pausePanel.style.backgroundSize = pausePanelWidth + 'px ' + pausePanelHeight + 'px'
  pausePanel.style.top = pausePanelTop + 'px'
  pausePanel.style.left = pausePanelLeft + 'px'

  word1.style.top = word11 + 'px'
  word1.style.left = word12 + 'px'
  word1.style.fontSize = font1 + 'px'

  musicON.style.height = musicHeight + 'px'
  musicON.style.width = musicWidth + 'px'
  musicON.style.backgroundSize = musicWidth + 'px ' + musicHeight + 'px'
  musicON.style.top = musicTop + 'px'
  musicON.style.left = musicLeft + 'px'

  continueButton.style.height = continueHeight + 'px'
  continueButton.style.width = continueWidth + 'px'
  continueButton.style.backgroundSize = continueWidth + 'px ' + continueHeight + 'px'
  continueButton.style.top = continueTop + 'px'
  continueButton.style.left = continueLeft + 'px'

  gameOverPanel.style.height = goHeight + 'px'
  gameOverPanel.style.width = goWidth + 'px'
  gameOverPanel.style.top = goTop + 'px'
  gameOverPanel.style.left = pausePanelLeft + 'px'

  gameOverBG.style.height = gobgHeight + 'px'
  gameOverBG.style.width = gobgWidth + 'px'
  gameOverBG.style.backgroundSize = gobgWidth + 'px ' + gobgHeight + 'px'

  word2.style.top = word11 + 'px'
  word2.style.left = word12 + 'px'
  word2.style.fontSize = font1 + 'px'

  icon.style.height = iconWidth + 'px'
  icon.style.width = iconWidth + 'px'
  icon.style.backgroundSize = iconWidth + 'px ' + iconWidth + 'px'

  again.style.height = continueHeight + 'px'
  again.style.width = againWidth + 'px'
  again.style.top = againTop + 'px'
  again.style.left = againLeft + 'px'
  again.style.backgroundSize = againWidth + 'px ' + continueHeight + 'px'

  maxScoreText.style.top = maxScore1 + 'px'
  maxScoreText.style.left = maxScore2 + 'px'
  maxScoreText.style.fontSize = font + 'px'
  maxScoreText.style.letterSpacing = letter + 'px'

  currentScoreText.style.top = currentScore1 + 'px'
  currentScoreText.style.left = currentScore2 + 'px'
  currentScoreText.style.fontSize = font + 'px'
  currentScoreText.style.letterSpacing = letter + 'px'
}

window.addEventListener('resize', function () {
  resize()
  drawGame()
})

resize()
init()

function init() { //初始化
  moveSpeed = 200
  tailSpeed = 50
  totalScore = 0
  snakeScore = 0
  tail = 0
  speedUp = false
  eatFood = false
  holeExist = false
  firstHole = true
  musicIsOn = true
  gameOn = false
  gameOver = false
  pause = false
  settle = false
  settling = false
  snake = [{ x: 6, y: 6, dirX: 0, dirY: 1 }]
  food = [{ x: myRandom(0, areaSize / cellSize), y: myRandom(0, areaSize / cellSize), id: myRandom(1, 3) }]
  hole = {}
  drawGame()
}

function gameLoop() { //主循环
  if (!pause) {
    if (!gameOver) whetherBumpSnake()
    if (!gameOver && snake.length > 2) whetherEnterHole()
    if (!gameOver && !settle) moveSnake()
    if (!gameOver && !settle) {
      if ((firstHole || snake.length > 15) && !holeExist) holeApply()
      whetherEatFood()
      if (!eatFood) deleteTail()
      else if (tail === 0) eatFood = false
      else tail -= 1
      drawGame()
      if (gameOn) setTimeout(gameLoop, moveSpeed)
    }
  }
}

function whetherEatFood() { //判断是否吃到食物
  food.forEach((obj, idx) => {
    if (snake[0].x === obj.x && snake[0].y === obj.y) {
      eatFood = true
      switch (obj.id) {
        case 1:
          snakeScore += 15
          tail += 15 / 5
          break
        case 2:
          snakeScore += 5
          tail += 5 / 5
          break
        case 3:
          snakeScore += 10
          tail += 10 / 5
          break
      }
      food.splice(idx, 1)
      foodApply()
    }
  })
}

function whetherBumpSnake() { //判断是否撞到蛇身
  for (let idx = 2; idx < snake.length - 1; idx++) {
    if (snake[0].x === snake[idx].x && snake[0].y - 1 === snake[idx].y && snake[0].dirY === -1) {
      GameOver()
      return
    }
    else if (snake[0].x - 1 === snake[idx].x && snake[0].y === snake[idx].y && snake[0].dirX === -1) {
      GameOver()
      return
    }
    else if (snake[0].x + 1 === snake[idx].x && snake[0].y === snake[idx].y && snake[0].dirX === 1) {
      GameOver()
      return
    }
    else if (snake[0].x === snake[idx].x && snake[0].y + 1 === snake[idx].y && snake[0].dirY === 1) {
      GameOver()
      return
    }
  }
}

function whetherEnterHole() { //判断是否进入洞口
  if (snake[0].x === hole.x && snake[0].y - 1 === hole.y && snake[0].dirY === -1 && !(snake[1].x === hole.x && snake[1].y === hole.y)) {
    settleScore()
    return
  }
  else if (snake[0].x - 1 === hole.x && snake[0].y === hole.y && snake[0].dirX === -1 && !(snake[1].x === hole.x && snake[1].y === hole.y)) {
    settleScore()
    return
  }
  else if (snake[0].x + 1 === hole.x && snake[0].y === hole.y && snake[0].dirX === 1 && !(snake[1].x === hole.x && snake[1].y === hole.y)) {
    settleScore()
    return
  }
  else if (snake[0].x === hole.x && snake[0].y + 1 === hole.y && snake[0].dirY === 1 && !(snake[1].x === hole.x && snake[1].y === hole.y)) {
    settleScore()
    return
  }
}

function settleScore() { //结算分数
  settle = true
  settling = true
  holeExist = false
  i = totalScore
  scoreRefreshLoop()
  totalScore += snakeScore
  snakeScore = 0
  drawGame()
  hole = {}
  settleLoop()
}

function settleLoop() { //结算循环
  deleteTail()
  drawGame()
  if (snake.length > 2) setTimeout(settleLoop, tailSpeed)
  else settling = false
}

function scoreRefresh(sc) { //分数更新
  if (sc > 9999999999) sc = 9999999999
  let t = 0
  let s = sc
  while (s > 0) {
    s = parseInt(s) / 10
    t++
  }
  if (sc === 0) t = 2
  let str = ""
  for (let i = 10 - t; i >= 0; i--) {
    str += "0"
  }
  str += sc
  scoreText.innerHTML = str
}

function scoreRefreshLoop() { //分数更新循环
  scoreRefresh(i)
  i += 1
  if (i <= totalScore + snakeScore) setTimeout(scoreRefreshLoop, 25)
}

function drawGame() { //打印贴图
  gameContainer.innerHTML = "";

  //打印洞口
  if (holeExist) {
    const img = document.createElement("img")
    img.style.top = hole.y * cellSize / 659 * windowHeight + 'px'
    img.style.left = hole.x * cellSize / 659 * windowHeight + 'px'
    img.classList.add('object')
    img.style.width = cellSize / 659 * windowHeight + 'px'
    img.style.height = cellSize / 659 * windowHeight + 'px'
    img.src = './assets/hole.png'
    gameContainer.appendChild(img)
  }

  //打印头部
  const head = document.createElement("img")
  head.style.top = snake[0].y * cellSize / 659 * windowHeight + 'px'
  head.style.left = snake[0].x * cellSize / 659 * windowHeight + 'px'
  head.classList.add('object')
  head.style.width = cellSize / 659 * windowHeight + 'px'
  head.style.height = cellSize / 659 * windowHeight + 'px'

  if (!gameOn && !gameOver) {
    head.src = './assets/sleep.png'
  }
  else if (snake[0].dirX === 0 && snake[0].dirY === 1) {
    if (gameOver) head.src = './assets/deadV.png'
    else head.src = './assets/headV.png'
  }
  else if (snake[0].dirX === 0 && snake[0].dirY === -1) {
    if (gameOver) head.src = './assets/deadV.png'
    else head.src = './assets/headV.png'
    head.classList.add('flipV')
  }
  else if (snake[0].dirX === -1 && snake[0].dirY === 0) {
    if (gameOver) head.src = './assets/deadH.png'
    else head.src = './assets/headH.png'
  }
  else if (snake[0].dirX === 1 && snake[0].dirY === 0) {
    if (gameOver) head.src = './assets/deadH.png'
    else head.src = './assets/headH.png'
    head.classList.add('flipH')
  }
  else {
    if ((gameOver || settle) && snake.length > 1) {
      if (snake[0].dirX === 1 && snake[0].dirY === -1 && snake[1].x === snake[0].x + 1 || snake[0].dirX === -1 && snake[0].dirY === -1 && snake[1].x === snake[0].x - 1) {
        if (gameOver) head.src = './assets/deadV.png'
        else head.src = './assets/headV.png'
        head.classList.add('flipV')
      }
      else if (snake[0].dirX === 1 && snake[0].dirY === 1 && snake[1].x === snake[0].x + 1 || snake[0].dirX === -1 && snake[0].dirY === 1 && snake[1].x === snake[0].x - 1) {
        if (gameOver) head.src = './assets/deadV.png'
        else head.src = './assets/headV.png'
      }
      else if (snake[0].dirX === -1 && snake[0].dirY === 1 && snake[1].y === snake[0].y + 1 || snake[0].dirX === -1 && snake[0].dirY === -1 && snake[1].y === snake[0].y - 1) {
        if (gameOver) head.src = './assets/deadH.png'
        else head.src = './assets/headH.png'
      }
      else if (snake[0].dirX === 1 && snake[0].dirY === -1 && snake[1].y === snake[0].y - 1 || snake[0].dirX === 1 && snake[0].dirY === 1 && snake[1].y === snake[0].y + 1) {
        if (gameOver) head.src = './assets/deadH.png'
        else head.src = './assets/headH.png'
        head.classList.add('flipH')
      }
    }
    else if (snake.length > 1) {
      if (snake[1].dirX === 0 && snake[1].dirY === 1) {
        head.src = './assets/headV.png'
      }
      else if (snake[1].dirX === 0 && snake[1].dirY === -1) {
        head.src = './assets/headV.png'
        head.classList.add('flipV')
      }
      else if (snake[1].dirX === -1 && snake[1].dirY === 0) {
        head.src = './assets/headH.png'
      }
      else if (snake[1].dirX === 1 && snake[1].dirY === 0) {
        head.src = './assets/headH.png'
        head.classList.add('flipH')
      }
    }
  }
  gameContainer.appendChild(head)

  //打印尾部
  if (snake.length > 1) {
    const tail = document.createElement("img")
    tail.style.top = snake[snake.length - 1].y * cellSize / 659 * windowHeight + 'px'
    tail.style.left = snake[snake.length - 1].x * cellSize / 659 * windowHeight + 'px'
    tail.classList.add('object')
    tail.style.width = cellSize / 659 * windowHeight + 'px'
    tail.style.height = cellSize / 659 * windowHeight + 'px'
    if (snake[snake.length - 1].dirX === 0 && snake[snake.length - 1].dirY === 1) {
      tail.src = './assets/tailV.png'
    }
    else if (snake[snake.length - 1].dirX === 0 && snake[snake.length - 1].dirY === -1) {
      tail.src = './assets/tailV.png'
      tail.classList.add('flipV')
    }
    else if (snake[snake.length - 1].dirX === -1 && snake[snake.length - 1].dirY === 0) {
      tail.src = './assets/tailH.png'

    }
    else if (snake[snake.length - 1].dirX === 1 && snake[snake.length - 1].dirY === 0) {
      tail.src = './assets/tailH.png'
      tail.classList.add('flipH')
    }
    else {
      if (snake[snake.length - 2].x === snake[snake.length - 1].x - 1) {
        tail.src = './assets/tailH.png'
      }
      else if (snake[snake.length - 2].x === snake[snake.length - 1].x + 1) {
        tail.src = './assets/tailH.png'
        tail.classList.add('flipH')
      }
      else if (snake[snake.length - 2].y === snake[snake.length - 1].y - 1) {
        tail.src = './assets/tailV.png'
        tail.classList.add('flipV')
      } else if (snake[snake.length - 2].y === snake[snake.length - 1].y + 1) {
        tail.src = './assets/tailV.png'
      }
    }
    gameContainer.appendChild(tail)
  }

  //打印身体
  snake.forEach((obj, idx) => {
    if (idx !== 0 && idx !== snake.length - 1) {
      const img = document.createElement("img")
      img.style.top = obj.y * cellSize / 659 * windowHeight + 'px'
      img.style.left = obj.x * cellSize / 659 * windowHeight + 'px'
      img.classList.add('object')
      img.style.width = cellSize / 659 * windowHeight + 'px'
      img.style.height = cellSize / 659 * windowHeight + 'px'
      if (obj.dirX === 0 && obj.dirY === 1) {
        img.src = './assets/straightV.png'
      }
      else if (obj.dirX === 0 && obj.dirY === -1) {
        img.src = './assets/straightV.png'
        img.classList.add('flipV')
      }
      else if (obj.dirX === -1 && obj.dirY === 0) {
        img.src = './assets/straightH.png'
      }
      else if (obj.dirX === 1 && obj.dirY === 0) {
        img.src = './assets/straightH.png'
        img.classList.add('flipH')
      }
      else {
        img.src = './assets/bent.png'
        if (obj.dirX === 1 && obj.dirY === 1) {
          img.classList.add('flipV')
        }
        else if (obj.dirX === -1 && obj.dirY === -1) {
          img.classList.add('flipH')
        }
        else if (obj.dirX === -1 && obj.dirY === 1) {
          img.classList.add('flipVH')
        }
      }
      gameContainer.appendChild(img)
    }
  })

  //打印食物
  if (gameOn) {
    food.forEach(obj => {
      const img = document.createElement("img")
      img.style.top = obj.y * cellSize / 659 * windowHeight + 'px'
      img.style.left = obj.x * cellSize / 659 * windowHeight + 'px'
      img.classList.add('object')
      img.style.width = cellSize / 659 * windowHeight + 'px'
      img.style.height = cellSize / 659 * windowHeight + 'px'
      img.src = './assets/food' + obj.id + '.png'
      gameContainer.appendChild(img)
    })
  }

  //打印地图边缘线
  const img = document.createElement("img")
  img.style.height = 286 / 659 * windowHeight + 'px'
  img.style.width = 286 / 659 * windowHeight + 'px'
  img.style.top = '0px'
  img.style.left = '0px'
  img.style.position = 'absolute'
  img.src = './assets/line.png'
  gameContainer.appendChild(img)
}

function moveSnake() { //移动逻辑
  let Y1 = snake[0].y + 1
  if (Y1 > areaSize / cellSize && snake[0].dirY === 1) {
    GameOver()
    return
  }

  let Y2 = snake[0].y - 1
  if (Y2 < 0 && snake[0].dirY === -1) {
    GameOver()
    return
  }

  let X1 = snake[0].x + 1
  if (X1 > areaSize / cellSize && snake[0].dirX === 1) {
    GameOver()
    return
  }

  let X2 = snake[0].x - 1
  if (X2 < 0 && snake[0].dirX === -1) {
    GameOver()
    return
  }

  if (snake[0].dirX === 0 || snake[0].dirY === 0) {
    let X = snake[0].x + snake[0].dirX
    if (X > areaSize / cellSize || X < 0) {
      GameOver()
      return
    }

    let Y = snake[0].y + snake[0].dirY
    if (Y > areaSize / cellSize || Y < 0) {
      GameOver()
      return
    }

    snake.unshift({ x: X, y: Y, dirX: snake[0].dirX, dirY: snake[0].dirY })
  }
  else if (snake.length > 1) {
    if (snake[0].dirX === -1 && snake[0].dirY === 1 && snake[1].x === X2 || snake[0].dirX === 1 && snake[0].dirY === 1 && snake[1].x === X1) {
      snake.unshift({ x: snake[0].x, y: Y1, dirX: 0, dirY: 1 })
    }
    else if (snake[0].dirX === 1 && snake[0].dirY === -1 && snake[1].x === X1 || snake[0].dirX === -1 && snake[0].dirY === -1 && snake[1].x === X2) {
      snake.unshift({ x: snake[0].x, y: Y2, dirX: 0, dirY: -1 })
    }
    else if (snake[0].dirX === -1 && snake[0].dirY === 1 && snake[1].y === Y1 || snake[0].dirX === -1 && snake[0].dirY === -1 && snake[1].y === Y2) {
      snake.unshift({ x: X2, y: snake[0].y, dirX: -1, dirY: 0 })
    }
    else if (snake[0].dirX === 1 && snake[0].dirY === 1 && snake[1].y === Y1 || snake[0].dirX === 1 && snake[0].dirY === -1 && snake[1].y === Y2) {
      snake.unshift({ x: X1, y: snake[0].y, dirX: 1, dirY: 0 })
    }
  }
  // console.log(snake);
}

function deleteTail() { //删除尾部
  if (snake.length > 2 || snake.length > 1 && settle) snake.pop()
  // console.log(snake);
}

function myRandom(x, y) { //x到y的随机整数
  return x + parseInt(Math.random() * (y + 1 - x))
}

function foodApply() { //食物刷新
  let X, Y
  while (true) {
    let f = true
    X = myRandom(0, areaSize / cellSize)
    Y = myRandom(0, areaSize / cellSize)
    food.forEach(obj => {
      if (obj.x === X && obj.y === Y) f = false
    })
    snake.forEach(obj => {
      if (obj.x === X && obj.y === Y) f = false
    })
    if (hole.x === X && hole.y === Y) f = false
    if (f) break
  }
  food.push({ x: X, y: Y, id: myRandom(1, 3) })
}

function holeApply() { //洞口刷新
  if (firstHole) {
    firstHole = false
    holeExist = true
    hole = { x: 6, y: 6 }
  }
  else {
    holeExist = true
    let X, Y
    while (true) {
      let f = true
      X = myRandom(2, areaSize / cellSize - 2)
      Y = myRandom(2, areaSize / cellSize - 2)
      food.forEach(obj => {
        if (obj.x === X && obj.y === Y) f = false
      })
      snake.forEach(obj => {
        if (obj.x === X && obj.y === Y) f = false
      })
      if (f) break
    }
    hole = { x: X, y: Y }
  }
}

function GameOver() { //游戏结束
  gameOn = false
  gameOver = true
  drawGame()
  if (totalScore > maxScore) maxScore = totalScore
  if (maxScore > 99999) {
    maxScoreText.innerHTML = Math.floor(maxScore / 100) / 100 + '万'
  }
  else maxScoreText.innerHTML = maxScore
  if (totalScore > 99999) {
    currentScoreText.innerHTML = Math.floor(totalScore / 100) / 100 + '万'
  }
  else currentScoreText.innerHTML = totalScore
  gameOverPanel.style.visibility = 'visible'
}

window.addEventListener('keydown', function (e) {
  e.preventDefault();
  //空格键暂停
  if (gameOn && !gameOver) {
    if (pause) {
      if (e.key === ' ') {
        pause = false
        pauseButton.style.backgroundImage = 'url(./assets/pause_default.png)'
        pausePanel.style.visibility = 'hidden'
        gameLoop()
      }
      return
    }
    else {
      if (e.key === ' ') {
        pause = true
        pauseButton.style.backgroundImage = 'url(./assets/pause_hold.png)'
        drawGame()
        pausePanel.style.visibility = 'visible'
      }
    }
  }

  switch (e.key) {
    case 'ArrowUp':
      if (!gameOn || settle && !settling) {
        snake[0].dirX = 0
        snake[0].dirY = -1
      }
      else if (snake[0].dirX === 1 && snake[0].dirY === 0) {
        snake[0].dirX = -1
        snake[0].dirY = -1
      }
      else if (snake[0].dirX === -1 && snake[0].dirY === 0) {
        snake[0].dirX = 1
        snake[0].dirY = -1
      }
      dirControlButton.style.backgroundImage = 'url(./assets/up_hold.png)'
      break
    case 'ArrowDown':
      if (!gameOn || settle && !settling) {
        snake[0].dirX = 0
        snake[0].dirY = 1
      }
      else if (snake[0].dirX === 1 && snake[0].dirY === 0) {
        snake[0].dirX = -1
        snake[0].dirY = 1
      }
      else if (snake[0].dirX === -1 && snake[0].dirY === 0) {
        snake[0].dirX = 1
        snake[0].dirY = 1
      }
      dirControlButton.style.backgroundImage = 'url(./assets/down_hold.png)'
      break
    case 'ArrowLeft':
      if (!gameOn || settle && !settling) {
        snake[0].dirX = -1
        snake[0].dirY = 0
      }
      else if (snake[0].dirX === 0 && snake[0].dirY === 1) {
        snake[0].dirX = -1
        snake[0].dirY = -1
      }
      else if (snake[0].dirX === 0 && snake[0].dirY === -1) {
        snake[0].dirX = -1
        snake[0].dirY = 1
      }
      dirControlButton.style.backgroundImage = 'url(./assets/left_hold.png)'
      break
    case 'ArrowRight':
      if (!gameOn || settle && !settling) {
        snake[0].dirX = 1
        snake[0].dirY = 0
      }
      else if (snake[0].dirX === 0 && snake[0].dirY === 1) {
        snake[0].dirX = 1
        snake[0].dirY = -1
      }
      else if (snake[0].dirX === 0 && snake[0].dirY === -1) {
        snake[0].dirX = 1
        snake[0].dirY = 1
      }
      dirControlButton.style.backgroundImage = 'url(./assets/right_hold.png)'
      break
    case 's':
      if (gameOn && !gameOver) {
        speedUp = true
        speedButton.style.backgroundImage = 'url(../assets/speed_hold.png)'
        moveSpeed = moveSpeed / 2
        break
      }
  }

  //初始状态：按方向键开始游戏
  //settle结束，方向键继续游戏
  if ((!gameOn || settle && !settling) && (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
    gameOn = true
    settle = false
    gameLoop()
  }

  //死亡状态：按空格键回到初始状态
  if (gameOver && e.key === ' ') {
    gameOver = false
    gameOverPanel.style.visibility = 'hidden'
    init()
  }
})

window.addEventListener('keyup', function (e) {
  e.preventDefault();
  if (e.key === 's') {
    speedUp = false
    speedButton.style.backgroundImage = 'url(./assets/speed_default.png)'
    moveSpeed = moveSpeed * 2
  }

  if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    dirControlButton.style.backgroundImage = 'url(./assets/keyboard_default.png)'
  }
})

musicON.addEventListener('mousedown', function (e) {  //音量键
  e.preventDefault();
  if (pausePanel.style.visibility === 'visible') {
    if (musicIsOn) {
      // console.log('音乐关');
      musicIsOn = false
      musicON.style.backgroundImage = 'url(./assets/OFF.png)'
    }
    else {
      // console.log('音乐开');
      musicIsOn = true
      musicON.style.backgroundImage = 'url(./assets/ON.png)'
    }
  }
});

continueButton.addEventListener('mousedown', function (e) {  //继续
  e.preventDefault();
  if (pausePanel.style.visibility === 'visible') {
    pause = false
    pauseButton.style.backgroundImage = 'url(./assets/pause_default.png)'
    pausePanel.style.visibility = 'hidden'
    gameLoop()
  }
})

pauseButton.addEventListener('mousedown', function (e) {  //暂停键
  e.preventDefault();
  if (gameOn && !gameOver) {
    if (pause) {
      pause = false
      pauseButton.style.backgroundImage = 'url(./assets/pause_default.png)'
      pausePanel.style.visibility = 'hidden'
      gameLoop()
      return
    }
    else {
      pause = true
      pauseButton.style.backgroundImage = 'url(./assets/pause_hold.png)'
      drawGame()
      pausePanel.style.visibility = 'visible'
    }
  }
})

speedButton.addEventListener('mousedown', function (e) {  //加速键
  e.preventDefault();
  if (gameOn && !gameOver && e.button === 0) {
    speedUp = true
    speedButton.style.backgroundImage = 'url(./assets/speed_hold.png)'
    moveSpeed = moveSpeed / 2
  }
})

window.addEventListener('mouseup', function (e) {
  e.preventDefault();
  if (speedUp) {
    speedUp = false
    speedButton.style.backgroundImage = 'url(./assets/speed_default.png)'
    moveSpeed = moveSpeed * 2
  }
  dirControlButton.style.backgroundImage = 'url(./assets/keyboard_default.png)'
})

dirUp.addEventListener('mousedown', function (e) {  //上
  e.preventDefault();
  if (!gameOn || settle && !settling) {
    snake[0].dirX = 0
    snake[0].dirY = -1
  }
  else if (snake[0].dirX === 1 && snake[0].dirY === 0) {
    snake[0].dirX = -1
    snake[0].dirY = -1
  }
  else if (snake[0].dirX === -1 && snake[0].dirY === 0) {
    snake[0].dirX = 1
    snake[0].dirY = -1
  }
  dirControlButton.style.backgroundImage = 'url(./assets/up_hold.png)'
  if ((!gameOn || settle && !settling)) {
    gameOn = true
    settle = false
    gameLoop()
  }
})

dirDown.addEventListener('mousedown', function (e) {  //下
  e.preventDefault();
  if (!gameOn || settle && !settling) {
    snake[0].dirX = 0
    snake[0].dirY = 1
  }
  else if (snake[0].dirX === 1 && snake[0].dirY === 0) {
    snake[0].dirX = -1
    snake[0].dirY = 1
  }
  else if (snake[0].dirX === -1 && snake[0].dirY === 0) {
    snake[0].dirX = 1
    snake[0].dirY = 1
  }
  dirControlButton.style.backgroundImage = 'url(./assets/down_hold.png)'
  if ((!gameOn || settle && !settling)) {
    gameOn = true
    settle = false
    gameLoop()
  }
})

dirLeft.addEventListener('mousedown', function (e) {  //左
  e.preventDefault();
  if (!gameOn || settle && !settling) {
    snake[0].dirX = -1
    snake[0].dirY = 0
  }
  else if (snake[0].dirX === 0 && snake[0].dirY === 1) {
    snake[0].dirX = -1
    snake[0].dirY = -1
  }
  else if (snake[0].dirX === 0 && snake[0].dirY === -1) {
    snake[0].dirX = -1
    snake[0].dirY = 1
  }
  dirControlButton.style.backgroundImage = 'url(./assets/left_hold.png)'
  if ((!gameOn || settle && !settling)) {
    gameOn = true
    settle = false
    gameLoop()
  }
})

dirRight.addEventListener('mousedown', function (e) {  //右
  e.preventDefault();
  if (!gameOn || settle && !settling) {
    snake[0].dirX = 1
    snake[0].dirY = 0
  }
  else if (snake[0].dirX === 0 && snake[0].dirY === 1) {
    snake[0].dirX = 1
    snake[0].dirY = -1
  }
  else if (snake[0].dirX === 0 && snake[0].dirY === -1) {
    snake[0].dirX = 1
    snake[0].dirY = 1
  }
  dirControlButton.style.backgroundImage = 'url(./assets/right_hold.png)'
  if ((!gameOn || settle && !settling)) {
    gameOn = true
    settle = false
    gameLoop()
  }
})

again.addEventListener('mousedown', function (e) {  //再玩一次
  e.preventDefault();
  if (gameOver) {
    gameOver = false
    gameOverPanel.style.visibility = 'hidden'
    init()
  }
})
