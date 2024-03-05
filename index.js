/* DOVEDNOSTI */

const updateSkill = (skillId, value) => {
    const skillProgress = document.querySelector(`#${skillId} .skill__progress`)
    const skillValue = document.querySelector(`#${skillId} .skill__value`)

    skillProgress.style.width = value + "%"
    skillValue.textContent = value + " / 100"
}

const getAndUpdateSkills = () => {
    const html = parseInt(prompt("Jaká  je vaše úroveň HTML od 0-100"))
    const css = parseInt(prompt("Jaká  je vaše úroveň CSS od 0-100"))
    const javascript = parseInt(prompt("Jaká  je vaše úroveň JavaScriptu od 0-100"))
    let error = true

    if(html >= 0 && html <= 100) {
        updateSkill("skill1", html)
    } else {
        error = false
    }

    if(css >= 0 && css <= 100) {
        updateSkill("skill2", css)
    } else {
        error = false
    }

    if(javascript >= 0 && javascript <= 100) {
        updateSkill("skill3", javascript)
    } else {
        error = false
    }

    if(!error) {
        alert("Nesprávně zadané hodnoty!")
    } else {
        const max = max3(html, css, javascript)
        const maxSkill = document.querySelector(".max3")
        maxSkill.textContent = `Nejvyšší dosažená dovednost je: ${max} bodů`
    }
}

document.addEventListener("DOMContentLoaded", getAndUpdateSkills);

/* MAXIMUM ZE TŘÍ ČÍSEL */

const max3 = (a, b, c) => {
    if(a >= b && a >= c) {
        return a
    } else if(b >= a && b >= c) {
        return b
    } else {
        return c
    }
}