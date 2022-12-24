const arrayDishesProducts = [
    {
        img:"img/mixmini.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        cost : "$30",
        cate : 'Breakfast'
    },    
    {
        img :"img/pastamini.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        cost : "$30",
        cate : 'Vegan'
    },    
    {
        img :"img/pancakemini.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        cost : "$30",
        cate : 'Meat'
    },    
    {
        img :"img/mixmini.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        cost : "$30",
        cate : 'Dessert'
    },    
    {
        img :"img/pastamini.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        cost : "$30",
        cate : 'Lunch'
    },    
    {
        img :"img/pancakemini.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        cost : "$30",
        cate : 'Chocolate'
    },
];

function showProduct(data) {
    let Product_item = document.querySelector(".bai-viet")
    Product_item.innerHTML = "";
    if (Product_item) {
        for (let item of data) {
            Product_item.innerHTML += `                
        <div class="baiviet">
            <div class="pic">
                <img src="${item.img}" alt="">
            </div>
            <div class="comment">
                <p>${item.comment}</p>
                <p>${item.cost}</p>
                <button>Add To Cart</button>
            </div>
        </div>
        `;
        }
    }
}
showProduct(arrayDishesProducts);

let filter = document.querySelector("#loc");

function filterProduct(data) {
    let _Breakfast = data.filter(function(item) {
        return item.cate == 'Breakfast';
    });
    let _Vegan = data.filter(function(item) {
        return item.cate == 'Vegan';
    });
    let _Meat = data.filter(function(item) {
        return item.cate == 'Meat';
    });
    let _Dessert = data.filter(function(item) {
        return item.cate == 'Dessert';
    });
    let _Lunch = data.filter(function(item) {
        return item.cate == 'Lunch';
    });
    let _Chocolate = data.filter(function(item) {
        return item.cate == 'Chocolate';
    });

    if (filter.value == "Breakfast") showProduct(_Breakfast)
    else if(filter.value == "Vegan") showProduct(_Vegan);
    else if(filter.value == "Meat") showProduct(_Meat);
    else if(filter.value == "Dessert") showProduct(_Dessert);
    else if(filter.value == "Lunch") showProduct(_Lunch);
    else if(filter.value == "Chocolate") showProduct(_Chocolate);
    else showProduct(arrayDishesProducts);
}
filter.addEventListener("click" , filterProduct(arrayDishesProducts));