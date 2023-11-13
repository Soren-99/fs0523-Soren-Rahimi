let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/"
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGE1NzMyNWM5NzAwMTg3ZjlmN2IiLCJpYXQiOjE2OTk2MTMyNzEsImV4cCI6MTcwMDgyMjg3MX0.n6EIYBZEFWJ2X6DwaKXnpKeHNWBple7GsaakPQsmbIY"
let createButton = document.querySelector('#create');
let resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', async () => {
    resetForm();
});

async function removeCard(id) {
    try {
        let response = await fetch(fetchUrl + id, {
            method: 'DELETE',
            headers:{
                Authorization: apiKey
            }
        });
    
        if (response.ok) {
            sweetAlert.fire({
                position: "center",
                icon: "success",
                title: "Product removed successfully",
                showConfirmButton: false,
                timer:1000
            });

            resetForm();
        } else {
            throw new Error("Error in removing the product");
        }
    } catch (error) {
        sweetAlert.fire({
            position: "center",
            icon: "error",
            title: "error.message",
            showConfirmButton: false,
            timer:1000
        });
    }

};

function resetForm() {
    document.querySelector('#productName').value = '';
    document.querySelector('#description').value = '';
    document.querySelector('#brand').value = '';
    document.querySelector('#imageProduct').value ='';
    document.querySelector('#priceProduct').value = '';
}

createButton.addEventListener('click', async () => {
    let productName = document.querySelector('#productName').value;
    let description = document.querySelector('#description').value;
    let brand = document.querySelector('#brand').value;
    let imageProduct = document.querySelector('#imageProduct').value;
    let priceProduct = document.querySelector('#priceProduct').value;

    let newProduct = {
        name: productName,
        description: description,
        brand: brand,
        imageUrl: imageProduct,
        price: priceProduct
    }

    try {
        let response = await fetch(fetchUrl, {
            method: 'POST',
            headers: {
                Authorization: apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });

        if (response.ok) {
            sweetAlert.fire({
                position: "center",
                icon: "success",
                title: "Product create successfully",
                showConfirmButton: false,
                timer:1000
            });

            setTimeout(() => {
                location.href = "Home-page.html"
            }, 1000)
        } else {
            throw new Error("Fill at least one field")
        }
    } catch (error) {
        sweetAlert.fire({
            position:"center",
            icon: "error",
            title: error.message,
            showConfirmButton: "false",
            timer: 1000
        });
    }
});


let url = new URLSearchParams(location.search);
let id = url.get('id');
console.log(id)