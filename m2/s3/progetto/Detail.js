
let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGE1NzMyNWM5NzAwMTg3ZjlmN2IiLCJpYXQiOjE2OTk2MTMyNzEsImV4cCI6MTcwMDgyMjg3MX0.n6EIYBZEFWJ2X6DwaKXnpKeHNWBple7GsaakPQsmbIY ";

async function productCard() {
    let response = await fetch(fetchUrl, {
        headers: {
            Authorization: apiKey
        }
    })
    let data = await response.json();

    data.forEach( (item)=> {

        let cl = document.createElement('cl');
        let boxProduct = document.querySelector('.list');

        let cloneCard = getClone();

        let imgProduct = cloneCard.querySelector('.img');
        let nameProduct = cloneCard.querySelector('.name');
        let brandProduct = cloneCard.querySelector('.brand');
        let descriptionProduct = cloneCard.querySelector('.description');
        let priceProduct = cloneCard.querySelector('.price');
        let modifica = cloneCard.querySelector('.edit');
        let cancella = cloneCard.querySelector('.delete');
        
        imgProduct.src = item.Images;
        nameProduct.innerText = item.Name;
        brandProduct.innerText = item.Brand;
        descriptionProduct.innerText = item.Description;
        priceProduct.innerText = item.prezzo;
        modifica.href = 'Back-office.html?id=' + item._id;
        
        cancella.addEventListener('click', async () => {
            
            await deleteCard();
          async function deleteCard(){
             await fetch(fetchUrl + item._id, {
              method: 'DELETE',
              headers: {
                  Authorization: apiKey,
                  "Content-Type": "application/json"
              }
          })
          if (response.status === 200) {
            cl.remove();  
            sweetAlert.fire("file deleted successfully");
          }  
      }
      })

      cl.append(cloneCard);
      boxProduct.append(cl);


})

}

function getClone() {
    let template = document.getElementsByTagName('template')[0];
    return template.content.cloneNode(true);
}


 productCard() 


