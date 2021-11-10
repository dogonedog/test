'use strict';

let outputArea = document.getElementsByClassName('output');
let outputImg = document.getElementsByClassName('output_img');
let priceArea = document.getElementById('price_box');
const list = document.getElementById('form').hamburger;

const hamburger = ['バンズ', 'ベーコン', 'パティ', 'レタス', 'トマト', '卵', 'チーズ', 'アボカド'];
const images = ['images/buns_top.png', 'images/bacon.png', 'images/patty.png', 'images/lettuce.png', 'images/tomate.png', 'images/fries_s.png', 'images/cheese.png', 'images/buns_under.png'];
const prices = [100, 100, 200, 100, 100, 150, 100, 100];

let count = 0;
let sum = 0;
let i = 0;
let ingredients;

const buns = document.getElementById('Buns');
const bacon = document.getElementById('Bacon');
const patty = document.getElementById('Patty');
const cheese = document.getElementById('Cheese');
const lettuce = document.getElementById('Lettuce');
const tomate = document.getElementById('Tomate');
const cucumber = document.getElementById('Cucumber');
const poteto = document.getElementById('Poteto');

buns.addEventListener('click', function () {
  count = 0;
  if (buns.checked) {
    outputImg[count].src = images[count];
    outputImg[count].classList.add('buns_top_adjust'/*, 'fade-in-top'*/);
    plu(count);
    outputImg[7].src = images[7];
    outputImg[7].classList.add('buns_adjust'/*, 'fade-in-top'*/);
    del(count);
  } else {
    outputImg[count].src = "";
    outputImg[7].src = "";
    min(count);
  }
})

bacon.addEventListener('click', function () {
  count = 1;
  if (bacon.checked) {
    outputImg[count].src = images[count];
    outputImg[count].classList.add('bacon_adjust'/*, 'fade-in-top'*/);
    plu(count);
  } else {
    outputImg[count].src = "";
    min(count);
  }
})

patty.addEventListener('click', function () {
  count = 2;
  if (patty.checked) {
    outputImg[count].src = images[count];
    plu(count);
    outputImg[count].classList.add('patty_adjust'/*, 'fade-in-top'*/);
  } else {
    outputImg[count].src = "";
    min(count);
  }
})

lettuce.addEventListener('click', function () {
  count = 3;
  if (lettuce.checked) {
    outputImg[count].src = images[count];
    plu(count);
    outputImg[count].classList.add('lettuce_adjust'/*, 'fade-in-top'*/);
  } else {
    outputImg[count].src = "";
    min(count);
  }
})

tomate.addEventListener('click', function () {
  count = 4;
  if (tomate.checked) {
    outputImg[count].src = images[count];
    plu(count);
    outputImg[count].classList.add('tomate_adjust'/*, 'fade-in-top'*/);
  } else {
    outputImg[count].src = "";
    min(count);
  }
})

poteto.addEventListener('click', function () {
  count = 5;
  if (poteto.checked) {
    outputImg[count].src = images[count];
    plu(count);
    outputImg[count].classList.add('poteto_adjust'/*, 'fade-in-top'*/);
  } else {
    outputImg[count].src = "";
    min(count);
  }
})

cheese.addEventListener('click', function () {
  count = 6;
  if (cheese.checked) {
    outputImg[count].src = images[count];
    plu(count);
    outputImg[count].classList.add('cheese_adjust'/*, 'fade-in-top'*/);
  } else {
    outputImg[count].src = "";
    min(count);// 総合計(pricesとnum一緒) = min(count)
  }
})

function min(count) {
  sum = sum - prices[count];
  priceArea.textContent = `Total ¥${sum}`;
  // return sum;
}

function plu() { //let sum = 0;がグローバルとして上にいるので引数はいらない。
  sum = sum + prices[count];
  priceArea.textContent = `Total ¥${sum}`;
  // return sum;
}

function del() {
  const element = document.getElementsByClassName('output_img');
  for (let item of element) {
    const src = item.getAttribute('src');
    if (src === "") {
      item.parentNode.style.fontSize = 0;
      item.parentNode.style.lineHeight = 0;
    }
    console.log("src", src);
  }
}

const targets = document.getElementsByName('hamburger');

const formEle = document.getElementById('form');
formEle.onsubmit = function () {
  // alert('SUBMIT')
}

formEle.onreset = function () {
  const element = document.getElementsByClassName('output_img');
  for (let item of element) {
    item.src = "";
    console.log(item);
    sum = 0;
    // alert('RESET');
  }
  priceArea.textContent = 'Total ¥0';
}

const input = document.querySelector('input');
input.setAttribute('autocomplete', 'off');

// .anim-box.fadein.is-animated {
//   animation: fadeIn 0.7s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
// }

// @keyframes fadeIn {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }