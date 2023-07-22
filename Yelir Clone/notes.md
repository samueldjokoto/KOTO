                    <div class="product-item">
                        <img id="product-img" src="./Img/product.png" alt="">
                        <h4 id="product-title">white miami fit tee <br>  high value luggage logo</h4>
                        <p id="product-price">£75.00</p>
                    </div>
                    <div class="product-item">
                        <img id="product-img" src="./Img/product.png" alt="">
                        <h4 id="product-title">white miami fit tee <br>  high value luggage logo</h4>
                        <p id="product-price">£75.00</p>
                    </div>
                    <div class="product-item">
                        <img id="product-img" src="./Img/product.png" alt="">
                        <h4 id="product-title">white miami fit tee <br>  high value luggage logo</h4>
                        <p id="product-price">£75.00</p>
                    </div>
                    <div class="product-item">
                        <img id="product-img" src="./Img/product.png" alt="">
                        <h4 id="product-title">white miami fit tee <br> high value luggage logo</h4>
                        <p id="product-price">£75.00</p>
                    </div>
                    <div class="product-item">
                        <img id="product-img" src="./Img/product.png" alt="">
                        <h4 id="product-title">white miami fit tee <br>  high value luggage logo</h4>
                        <p id="product-price">£75.00</p>
                    </div><div class="product-item">
                        <img id="product-img" src="./Img/product.png" alt="">
                        <h4 id="product-title">white miami fit tee <br>  high value luggage logo</h4>
                        <p id="product-price">£75.00</p>
                    </div>
                    <div class="product-item">
                        <img id="product-img" src="./Img/product.png" alt="">
                        <h4 id="product-title">white miami fit tee <br>  high value luggage logo</h4>
                        <p id="product-price">£75.00</p>
                    </div>
                </div>

const menuBtn = document.getElementById('menu-btn')
const sidenav = document.getElementById('sidenav');

menuBtn.addEventListener('click', function(){
const isSidenavOpen = sidenav.style.width === '65%';
if (isSidenavOpen) {
closeNav();
} else {
openNav();
}

})

function openNav(){
sidenav.style.width = "65%";
}
function closeNav(){
sidenav.style.width = "0%";
}
