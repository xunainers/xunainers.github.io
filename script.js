
var Abas = document.querySelectorAll(".opcao");
Abas[0].focus();
var vData = new Date();
var hoje = vData.getDate();


document.getElementById("treta").innerHTML = '#####';

if (hoje < 10)
  hoje = '0' + vData.getDate() + '/' + vData.getFullYear();
else
  hoje = vData.getDate() + '/' + vData.getYear();  

document.getElementById("info").innerHTML += '<b>Data: '+ hoje +'</b>';


$('.produto1').on('click', function(e) {
   alert( 'Vai pedir IPA!' );
});

$('.produto2').on('click', function(e) {
  alert( 'Vai pedir Pilsen!' );
});

$('.produto3').on('click', function(e) {
  alert( 'Vai pedir Dry Stout!' );
});

$('.produto4').on('click', function(e) {
  alert( 'Vai pedir Lagger!' );
});

$('.produto5').on('click', function(e) {
  alert( 'Vai pedir Gin Tonika!' );
});