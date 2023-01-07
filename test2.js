const array = [
    {
        id : 1,
        img:"img/mixed.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        cost : "$30"
    },    
    {
        id:2,
        img :"img/pasta.png",
        comment : "The Creamiest Creamy Chicken",
        cost : "$30"
    },    
    {
        id:3,
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
                    <button>Add to Cart</button>
                </div>
            </div>
            `;
        }
    }
}

showProduct(array);
function mainProduct() {
    let url = new URLSearchParams(window.location.search).get("id");
    let newarrayproduct = array.find(function(item) {
        return item.id == url;
    });
    let gioithieu = document.querySelector(".gioithieu");
    gioithieu.innerHTML = `
    <div class="comment">
            <h1>${newarrayproduct.comment}</h1>
            <div class="cost">
                <p>$30</p>
            </div>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <input type="text" placeholder="Quanity">
            <button>Add To Chart</button>
    </div>
        <div class="picture">
            <img src="${newarrayproduct.img}" alt="">
        </div>
    `
}