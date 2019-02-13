function putarSatu () {
  const imgKocok = document.querySelectorAll('.img-kocok')[0];
  const putar = [1,2,3,4,5,6];
  let i = 0;

  const waktuMulai = new Date().getTime();


  setInterval (function(){
    if (new Date().getTime() - waktuMulai > 1000){
      clearInterval;
      return;
    }
    imgKocok.setAttribute('src', 'images/dice'+putar[i++]+'.png');
    if (i == putar.length) i =0;
  }, 100);
}
function putarDua() {
  const imgKocok = document.querySelectorAll('.img-kocok')[1];
  const putar = [1,4,6,2,5];
  let i = 0;

  const waktuMulai = new Date().getTime();


  setInterval (function(){
    if (new Date().getTime() - waktuMulai > 1000){
      clearInterval;
      return;
    }
    imgKocok.setAttribute('src', 'images/dice'+putar[i++]+'.png');
    if (i == putar.length) i =0;
  }, 100);
}





const kocok = document.querySelector('.btn');
kocok.addEventListener('click', function (){
  putarSatu();
  putarDua();
  setTimeout(function (){
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;

    const randomDiceImage = "images/dice" + randomNumber1 + ".png";

    document.querySelectorAll('img')[0].setAttribute('src', randomDiceImage);

    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const randomImageSource2 = "images/dice"+ randomNumber2+ ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


    if (randomNumber1 > randomNumber2){
      document.querySelector("h1").innerHTML = "🚩 Player 1 Menang";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 2 Menang 🚩";
    } else {
      document.querySelector("h1").innerHTML = "🤵 Seri Pak";
    }
  }, 1000);
});


// function cariAngkaSatu () {
//   const angkaSatu = Math.floor(Math.random() * 6) + 1;
//   const gambar = "images/dice"+angkaSatu+".png";
//   document.querySelectorAll('img')[0].setAttribute('src', gambar);
// }
//
// function cariAngkaDua () {
//   const angkaDua = Math.floor(Math.random() * 6) + 1;
//   const gambar = "images/dice"+angkaDua+".png";
//   document.querySelectorAll('img')[1].setAttribute('src', gambar);
// }
//
// function getHasil (playerDua, playerSatu) {
//   if (playerSatu > playerDua){
//     document.querySelector('h1').innerHTML = "🚩 Player 1 Menang";
//   } else if (playerSatu < playerDua){
//     document.querySelector('h1').innerHTML = "🚩 Player 2 Menang";
//   } else {
//     document.querySelector("h1").innerHTML = "🤵 Seri Pak";
//   }
// }
// const kocok = document.querySelector('.btn');
// kocok.addEventListener('click', function(){
//   const angkaSatu = Math.floor(Math.random() * 6) + 1;
//   const angkaDua = Math.floor(Math.random() * 6) + 1;
//   cariAngkaSatu();
//   cariAngkaDua();
//   getHasil(angkaSatu,angkaDua);
// });
