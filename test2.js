const array = [
    {
        img:"img/mixed.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        cost : "$30"
    },    
    {
        img :"img/pasta.png",
        comment : "The Creamiest Creamy Chicken",
        cost : "$30"
    },    
    {
        img :"img/pancake.png",
        comment : "Fruity Pancake with Orange & Blueberry",
        cost : "$30"
    },    
];
function showProduct(data) {
    let Product_item = document.querySelector(".baiviet")
    Product_item.innerHTML = "";
    if (Product_item) {
        for (let item of data) {
            Product_item.innerHTML += `
            <div class="dishes">
                <div class="img">
                    <img src="${item.img}" alt="">
                </div>
                <div class="comment">
                    <p>${item.comment}</p>
                    <p class="cost">${item.cost}</p>
                    <button>Add To Cart</button>
                </div>
            </div>
            `;
        }
    }
}
showProduct(array);