let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/"
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGE1NzMyNWM5NzAwMTg3ZjlmN2IiLCJpYXQiOjE2OTk2MTMyNzEsImV4cCI6MTcwMDgyMjg3MX0.n6EIYBZEFWJ2X6DwaKXnpKeHNWBple7GsaakPQsmbIY"

async function productCard() {
    let response = await fetch(fetchUrl, {
        headers: {
            Authorization: apiKey
        }
    })
    let data = await response.json();
    let areaCard = document.querySelector('.row');
    data.forEach( (item) => {
        let cloneCard = getClone();
        let cardImage = cloneCard.querySelector('.card-img-top');
        let cardTitle = cloneCard.querySelector('.card-title');
        let brandName = cloneCard.querySelector('.brand');
        let cardDescription = cloneCard.querySelector('.card-text-description');
        let cardPrice = cloneCard.querySelector('.card-text-price');

        cardImage.src = item.imageUrl;
        cardTitle.innerText = item.name;
        brandName.innerText = item.brand;
        cardDescription.innerText = item.description;
        cardPrice.innerText = item.price + "£";

    areaCard.append(cloneCard);

    })
}


function getClone() {
    let template = document.getElementsByTagName('template')[0];
    return template.content.cloneNode(true);
}

productCard();

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        if (event.target.matches('.details')) {
            event.preventDefault();
            let url = 'Detail.html';
            window.location.href = url;
        }
    });
});


