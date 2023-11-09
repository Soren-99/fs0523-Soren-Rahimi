async function getImages(query){
    const PEXELS_URL = 'https://api.pexels.com/v1/search?query='
    const API_KEY = 'NTvKCYB8opHTUuAwuyg3YJyF8g0mWxYDDHwsTpnxPEuMBGoxnYWnfIa7' 
    return fetch(PEXELS_URL + query,{
        headers: {
            'Content-Type':'application/Json',
            Authorization: API_KEY
        }
    }).then(res => res.json())
}


let getImages1 = document.querySelector('#getImages1');
let getImages2 = document.querySelector('#getImages2');


[getImages1, getImages2].forEach(button => {
    button.addEventListener('click', getAndReplace)
})

async function getAndReplace(){
    let query = this.getAttribute('data-query');
    let immagini = await getImages(query);
    replaceImages(immagini.photos)
}



function replaceImages(imagesArr){
    let cardImages = document.querySelectorAll('.card img');

    cardImages.forEach((img,i) => {
        img.src = imagesArr[i].src.tiny
    })
}



