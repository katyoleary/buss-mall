'use strict';


//Constructor Function for all Products//


Product.allProducts = [];

function Product (name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.totalClicks = 0;
  this.previouslyShown = false;
  Product.allProducts.push(this);
}

//creating new instances

new Product ('bag', 'img/bag.jpg');
new Product ('banana', 'img/banana.jpg');
new Product ('bathroom', 'img/bathroom.jpg');
new Product ('boots', 'img/boots.jpg');
new Product ('breakfast', 'img/breakfast.jpg');
new Product ('bubblegum', 'img/bubblegum.jpg');
new Product ('chair', 'img/chair.jpg');
new Product ('cthulhu', 'img/cthulhu.jpg');
new Product ('dog duck', 'img/dog-duck.jpg');
new Product ('dragon', 'img/dragon.jpg');
new Product ('pen', 'img/pen.jpg');
new Product ('pet sweep', 'img/pet-sweep');
new Product ('scizzors', 'img/scizzors.jpg');
new Product ('shark', 'img/shark.jpg');
new Product ('sweep', 'img/sweep.png');
new Product ('tauntaun', 'img/tauntaun.jpg');
new Product ('unicorn', 'img/unicorn.jpg');
new Product ('usb', 'img/usn.gif');
new Product ('water can', 'img/water-can.jpg');
new Product ('wine glass', 'img/wine-glass.jpg');

console.log(Product.allProducts.length);


//get random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}

//get random number in our array of products
function getRandomProduct() {
  return random((0, Product.allProducts.length) - 1);
}

//push images to divs

// var randProduct2 = document.getElementById('random-products2');
// var randProduct3 = document.getElementById('random-products3');


function renderProducts(product) {
  var randProduct = document.getElementById('random-products');
  var productEl = document.createElement('img');

  var attribute = document.createAttribute('id');
  attribute.value = Product.name;
  productEl.setAttribute(attribute); //W3 schools

  attribute = document.createAttribute('class');
  attribute.value = 'product-img';
  productEl.setAttributeNode(attribute); //w3 schools

  productEl.src = Product.filepath;
  productEl.addEventListener('click', removeImg);
  randProduct.appendChild(productEl);
}

function pushRandProducts() {
  var counter = 0;

  while(counter < 3) {
    var randomProduct = Product.allProducts[getRandomProduct()];

    if randomProduct.previouslyShown === false) {
      renderProducts(randomProduct);
      randomProduct.preventDefault = true;
      counter++;
    }
  }
}
pushRandProducts();




























//kjkjlkl
