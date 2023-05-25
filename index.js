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
[comment]: <> (⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %)

<p align="center">
    
</p>

<br/>

<h1 align="center"><img src="https://emojis.slackmojis.com/emojis/images/1531849430/4246/blob-sunglasses.gif?1531849430" width="30" alt='Hello'/> Hey! 👋  Nice to see you💬✨.</h1>
<br/>


<br/>
<p align="center">
    ⏰上述信息 <b>每12小时</b> 更新一次！（坐标济南）🌱 上次更新于: <b>${new Date().toLocaleDateString('zh-CN', {timeZone: 'Asia/Shanghai'})}</b> ![GitHub Actions](https://github.com/JuvenileQ/JuvenileQ/workflows/profile/badge.svg)
</p>
\`