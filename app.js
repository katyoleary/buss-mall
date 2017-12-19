'use strict';


//Constructor Function for all Products//


Product.allProducts = [];
var totalCounter = 0;


function Product (name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.totalClicks = 0;
  this.numTimesShown = 0;
  this.shownBefore = false;
  Product.allProducts.push(this);
}

//creating new instances of Product

new Product ('bag', 'img/bag.png');
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
new Product ('pet sweep', 'img/pet-sweep.jpg');
new Product ('scissors', 'img/scissors.jpg');
new Product ('shark', 'img/shark.jpg');
new Product ('sweep', 'img/sweep.png');
new Product ('tauntaun', 'img/tauntaun.jpg');
new Product ('unicorn', 'img/unicorn.jpg');
new Product ('usb', 'img/usb.gif');
new Product ('water can', 'img/water-can.jpg');
new Product ('wine glass', 'img/wine-glass.jpg');

// console.log(Product.allProducts.length);


//get random number

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
// }


//get random number in our array of products

function generateThree () {
  var counter = 0;
  var three = [];
  while(counter < 3) {
    var index = Math.floor(Math.random() * (Product.allProducts.length - 1));
    var currentProduct = Product.allProducts[index];
    if(!currentProduct.shownBefore) {
      currentProduct.shownBefore = true;
      counter += 1;
      totalCounter++;
      three.push(currentProduct);
    }
    for(var i = 0; i < Product.allProducts.length; i++){
      if(i !== index) {
        Product.allProducts[i].shownBefore = false;
      }
    }
  }
  return three;
}

var threeImg = generateThree();
console.log(threeImg);


//push images to divs

function renderProducts() {
  for(var i = 0; i < 3; i++) {
    var displayProduct = document.getElementById('product-display' + (i + 1));
    displayProduct.innerHTML = '<img src="' + threeImg[i].filepath + '">';
  }
}

renderProducts();































//kjkjlkl
