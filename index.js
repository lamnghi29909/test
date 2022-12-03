const arrListProduct = [
    {
        img: "img/image 26.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger"
    },
    {
        img: "img/image 26.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger"
    }, {
        img: "img/image 26.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger"
    },
    {
        img: "img/image 26.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger"
    },
    {
        img: "img/image 26.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger"
    }, {
        img: "img/image 26.png",
        name: "Big and Juicy Wagyu Beef Cheeseburger"
    }
];

function showProduct(data) {
    //cấu trục của query : vd :document.querySelector("[css của thẻ muốn lấy]")
    let Product_item = document.querySelector(".six");
    //kiểm tra xem nó có tồn tại hay k
    if (Product_item) {
        for (let item of data) {
            //cách để đổ dữ liệu từ js sang html
            //${["giá trị muốn thay đổi"]} dùng để thay giá trị các bạn muốn thay đổi vào 
            Product_item.innerHTML += `
        <div class="one">
                <img src="${item.img}" alt="" class="dishes_img">
                <h4> ${item.name} </h4>
            <div class="one_text">
                <div>
                    <img src="img/Timer.png" alt="">
                    <p> 30 Minutes</p>
                    <img src="img/ForkKnife.png" alt="">
                    <p>
                        Snack
                    </p>
                </div>
            </div>
        </div>
            `;
        }
    }
}
showProduct(arrListProduct);