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
      currentProduct.numTimesShown += 1;
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


//push images to divs

function renderProducts() {
  for(var i = 0; i < 3; i++) {
    var displayProduct = document.getElementById('product-display' + (i + 1));
    displayProduct.setAttribute('src', threeImg[i].filepath);
    threeImg[i].shownBefore = true;
  }
}


renderProducts();


//create event listeners for choosing Products

var target1 = document.getElementById('product-display1'); //x3  for each img element in HTML
var target2 = document.getElementById('product-display2');
var target3 = document.getElementById('product-display3');


target1.addEventListener('click', handleImgClick); //x3
target2.addEventListener('click', handleImgClick);
target3.addEventListener('click', handleImgClick);


//event
function handleImgClick(e) {
  var clicked = e.target.currentSrc.slice(64, -4);
  for(var i = 0; i < Product.allProducts.length; i++) {
    if(clicked === Product.allProducts[i].name) {
      Product.allProducts[i].totalClicks += 1;
    }
  }

  if(totalCounter < 24) {
    threeImg = generateThree();
    renderProducts();
    totalCounter += 1
    for(var i = 0; i < Product.allProducts.length; i++){
      var  currentImageInAllImages = Product.allProducts[i]
      for(var j = 0; j < threeImg.length; j++) {
        var currentImageInThreeImg = threeImg[j];
        if(currentImageInAllImages.name !== currentImageInThreeImg.name) {
          currentImageInAllImages.shownBefore = false;
        }
      }
    }
  }
}

























//kjkjlkl
