const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
<h1 align="center"><img src="https://emojis.slackmojis.com/emojis/images/1531849430/4246/blob-sunglasses.gif?1531849430" width="30" alt='Hello'/> Hey! 👋  Nice to see you💬✨.</h1>

<p>Qin📫，来自山东济南🤔，目前在██工作👯。</p>
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisDDDYear * 100).toFixed(2)} %

---
<p align="center">⏰该 <b>README</b> 文件 <b>每三小时</b> 更新一次！🌱 上次更新于: ${new Date().toLocaleDateString().replace(/\//g, "-") + " " + new Date().toTimeString().substr(0, 8)}<br />

![Progress Bar CI](https://github.com/liununu/liununu/workflows/Progress%20Bar%20CI/badge.svg)
<img alt="Stars" src="https://img.shields.io/github/stars/thmsgbrt/thmsgbrt?style=flat-square&labelColor=343b41"/> 
<img alt="Forks" src="https://img.shields.io/github/forks/thmsgbrt/thmsgbrt?style=flat-square&labelColor=343b41"/>
\
`

console.log(readme)
