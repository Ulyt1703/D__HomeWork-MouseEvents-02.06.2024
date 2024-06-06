/* let fatherText = document.createElement('h1')
fatherText.className = 'title'
fatherText.textContent = "Привіт, це мій перший створений елемент!"
document.body.appendChild(fatherText) */



/* let images = [
    {
        url:
            "https://avatars.mds.yandex.net/i?id=2b80695503d20b2a26a72fd9c95b679f4c5ee163-10137431-images-thumbs&n=13",
        alt: "MacBook", 
    }
]

function getImg(images){
    images.forEach(image =>{
        let box = document.createElement("div")
        box.className = "box"

        box.innerHTML = `
            <img class="first-img" src="${image.url}" alt="${image.alt}">
            <button type="button" class="btn-img">Are you a programmer?</button>
        `
        document.body.appendChild(box)
    })
}
getImg(images) */



/* let links = [
    {
        href: "https://ua.sinoptik.ua/",
    }
]
function getLinks(links){
    let listHtml = document.getElementById("list")
    links.forEach(link =>{
        let liHtml = document.createElement('li')
        liHtml.className = "site-nav__item"
        liHtml.innerHTML = `
            "Картопля"
            <a target="_blank" href="${link.href}" class="site-nav__link">Про нас</a>
        `
        listHtml.appendChild(liHtml)
    })
}
getLinks(links) */



function createCard(title, descr, price){
    let cardHtml = document.querySelector(".info-card")
    let titleText = document.createElement("h2")
    let textDescription = document.createElement("h2")
    let countPrice = document.createElement("h2")
    titleText.className = 'product__name'
    textDescription.className = 'product__descr'
    countPrice.className = 'product__pridct'
    titleText.textContent = title
    textDescription.innerHTML = descr
    countPrice.innerHTML = price
    cardHtml.appendChild(titleText)
    cardHtml.appendChild(textDescription)
    cardHtml.appendChild(countPrice)
}
createCard("Name", "Desription", 120)