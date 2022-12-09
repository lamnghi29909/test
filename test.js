const array = [
    {
        img:"img/burger.png",
        comment : "Big and Juicy Wagyu Beef Cheeseburger",
        img1 : "img/30minutes.png",
        img2 : "img/snack.png",
    },    
    {
        img :"img/fish.png",
        comment : "Fresh Lime Roasted Salmon",
        img1 : "img/30minutes.png",
        img2 : "img/fish(2).png",
    },    
    {
        img :"img/chicken.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        img1 : "img/30minutes.png",
        img2 : "img/snack.png",
    },    
    {
        img :"img/mixed.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        img1 : "img/30minutes.png",
        img2 : "img/healthy.png",
    },    
    {
        img :"img/pasta.png",
        comment : "Fresh and Healthy Mixed Mayonnaise Salad",
        img1 : "img/30minutes.png",
        img2 : "img/noodles.png",
    },    
    {
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
            <a href="test2.html">
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