const latestItems = [
  {
    imgSrc: "./Img/product.png",
    title: "White Miami Fit Tee",
    description: "High Value Luggage Logo",
    price: "£75.00",
  },
  {
    imgSrc: "./Img/product.png",
    title: "Black Leather Jacket",
    description: "Classic Biker Style",
    price: "£120.00",
  },
  {
    imgSrc: "./Img/product.png",
    title: "Blue Denim Jeans",
    description: "Slim Fit",
    price: "£50.00",
  },
  {
    imgSrc: "./Img/product.png",
    title: "Red Plaid Shirt",
    description: "Casual Flannel",
    price: "£35.00",
  },
  {
    imgSrc: "./Img/product.png",
    title: "White Sneakers",
    description: "Minimalist Design",
    price: "£80.00",
  },
  {
    imgSrc: "./Img/product.png",
    title: "Floral Print Dress",
    description: "Elegant Summer Wear",
    price: "£65.00",
  },
  {
    imgSrc: "./Img/product.png",
    title: "Brown Leather Bag",
    description: "Stylish Tote",
    price: "£90.00",
  },
];


let width = document.getElementById('width');
var onresize = function() {
   width.innerText = document.body.clientWidth;
   width.classList.add('display-width');
   setTimeout(() => {
       width.classList.remove('display-width');
   }, 2000)
}
window.addEventListener("resize", onresize);


//NAVIGATION MENU
const menuBtn = document.getElementById('menu-btn')
const sidenav = document.getElementById('sidenav');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', function () {
  sidenav.classList.toggle('sidenav-open');
});

closeBtn.addEventListener('click', function () {
  sidenav.classList.remove('sidenav-open');
});


//SEARCH MENU
function openSearch() {
  document.querySelector('.search-input').style.display = "flex";
  document.getElementById('searchbox').style.width = "100%";
  document.getElementById('searchbox').style.opacity = 1;
  document.querySelector('.search-close-btn').style.visibility = "visible";
}

function closeSearch() {
  document.getElementById('searchbox').style.width = "0";
  document.getElementById('searchbox').style.opacity = 0;
  document.querySelector('.search-close-btn').style.visibility = "hidden";
  document.querySelector('.search-input').style.display = "none";
}

const searchBtn = document.querySelector('.search');
searchBtn.addEventListener('click', openSearch);

const searchCloseBtn = document.querySelector('.search-close-btn');
searchCloseBtn.addEventListener('click', closeSearch);

const latestProductContainer = document.querySelector(".latest-product-container");
const productItems = document.querySelectorAll('.product-item');



function renderLatestItemsHtml() {
  let productItemHtml = '';
  latestItems.forEach(function (item) {
    productItemHtml += `
      <div class="product-item">
        <img class="product-img" src="${item.imgSrc}" alt="">
        <h4 class="product-title">${item.title}<br>${item.description}</h4>
        <p class="product-price">${item.price}</p>
      </div>`;
  });
  return productItemHtml;
}

function render() {
  latestProductContainer.innerHTML = renderLatestItemsHtml();
}

render();