'use strict';

Product.allProducts = [];

function Product (name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Product.allProducts.push(this);
}

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

console.log(Product.allProducts);
