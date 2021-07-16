//Bai 1

// let multiply = [];
// function adjacentElementsProduct(inputArray) {
//   for (let i = 0; i < inputArray.length - 1; i++) {
//     let b = 0;
//     b = inputArray[i] * inputArray[i + 1];
//     multiply.push(b);

//   }
//   console.log(multiply);
//   let max = 0;
//   for (let t = 0; t < multiply.length; t++) {
//     if (max < multiply[t]) {
//       max = multiply[t];
//     }
//   }
//   console.log(max);

// }
// adjacentElementsProduct([3, 4, 5, 3, -8]);

//------------------------------------------------------------//

//Bai 2

// let team1 = []
// let team2 = []
// function alternatingSums(a) {

//    for (let i = 0; i < a.length; i++) {
//        if (i % 2 == 0) {
//            team1.push(a[i])
//        } else {
//            team2.push(a[i])
//        }
//    }
//  let sum1= 0;
//  let sum2 = 0;
// for (let t = 0; t< team1.length; t++){
//     sum1 += team1[t]
// }

// for (let t = 0; t< team2.length; t++){
//     sum2 += team2[t]
// }
// let sum = [sum1, sum2]
// console.log(sum);
// }

// alternatingSums([2,3,6,7,8,10,2])

//------------------------------------------------------------//

//Bai 3
let urlInput = document.querySelector("#url");
let btnInpunt = document.querySelector(".submit");
let shrtCode = document.querySelector("#shrtcode");
let prdeCode = document.querySelector("#prde");
let shinyCode = document.querySelector("#shiny");

let shortUrl = document.querySelector(".short-url");
let showShortenLink = document.querySelector(".showShortenLink");

async function shortenLink(url) {
  let api = `https://api.shrtco.de/v2/shorten?url=`;
  apikey = api + url;
  let response = await fetch(apikey);
  response = await response.json();
  console.log(response.result);
  if (shrtCode.checked) {
    shortUrl.innerHTML = response.result.short_link;
  } if (prdeCode.checked) {
    shortUrl.innerHTML = response.result.short_link2;
  } if(shinyCode.checked) {
    shortUrl.innerHTML = response.result.short_link3;
  }
}

btnInpunt.onclick = function getUrl(e) {
  e.preventDefault();
    console.log(urlInput.value);
    shortenLink(urlInput.value);
};
