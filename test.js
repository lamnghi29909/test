const array = [
    {
        id : 1,
        img:"img/burger.png",
        comment : "Big and Juicy Wagyu Beef Cheeseburger",
        img1 : "img/30minutes.png",
        img2 : "img/snack.png",
    },    
    {
        id : 2,
        img :"img/fish.png",
        comment : "Fresh Lime Roasted Salmon",
        img1 : "img/30minutes.png",
        img2 : "img/fish(2).png",
    },    
    {
        id : 3,
        img :"img/chicken.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        img1 : "img/30minutes.png",
        img2 : "img/snack.png",
    },    
    {
        id : 4,
        img :"img/mixed.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        img1 : "img/30minutes.png",
        img2 : "img/healthy.png",
    },    
    {
        id : 5,
        img :"img/pasta.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        img1 : "img/30minutes.png",
        img2 : "img/noodles.png",
    },    
    {
        id : 6,
        img :"img/pancake.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        img1 : "img/30minutes.png",
        img2 : "img/sweet.png",
    },
];
function showProduct(data) {
    let Product_item = document.querySelector(".dishes")
    Product_item.innerHTML = "";
    if (Product_item) {
        for (let item of data) {
            Product_item.innerHTML += `
            <a href="test2.html?id=${item.id}">
                <div class="img">
                    <img src="${item.img}" alt="">
                </div>
                <div class="comment">
                    <div class="text-comment">
                        <h4>${item.comment}</h4>
                    </div>
                    <div class="pic-comment">
                        <img src="${item.img1}" alt="">
                        <img src="${item.img2}" alt="">
                    </div> 
                </div>
            </a>
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
mainProduct();
let arrayCart = [];
let arrayCartNew = JSON.parse(localStorage.getItem("cart"))
if ( arrayCartNew == null) {
    localStorage.setItem("cart" , JSON.stringify(arrayCart))
}
function addcart() {
    let url = new URLSearchParams(window.location.search).get("id");
    let cart = array.find(function(item) {
        return item.id == url;
    })
    arrayCartNew.push({
        img : cart.img,
        name : cart.comment,
    });
    localStorage.setItem("cart" , JSON.stringify(arrayCartNew));
}

function showCart() {
    let id = JSON.parse(localStorage.getItem("cart"));
    console.log(id);
    let show = document.querySelector(".special")
    for ( let item of id) {
        show.innerHTML += `
        <th class="checkbox"><input type="checkbox"></th>
        <th class="m"><img src="${item.img}" alt="" class="img"> <p class="n"> ${item.name}</p></th>
        <th>335.000đ</th>
        <th class="special1"><p  class="soluong">1</p></th>
        <th>335.000đ</th>
        <th><p class="x">x</p></th>
        `;
    }
}