
var Abas = document.querySelectorAll(".opcao");
Abas[0].focus();
var vData = new Date();
var hoje = vData.getDate();
var modalShow = false;
var modalShowing = "";

document.getElementById("treta").innerHTML = '#####';

if (hoje < 10)
  hoje = '0' + vData.getDate() + '/' + vData.getFullYear();
else
  hoje = vData.getDate() + '/' + vData.getYear();  

document.getElementById("info").innerHTML += '<b>Data: '+ hoje +'</b>';


$('.produto1').on('click', function(e) {
    var vProd = document.getElementById("1nomecervejas1").innerHTML;

    document.getElementById("mHeader").innerHTML = vProd;
    document.getElementById("mImg").innerHTML = '<img src="https://i.ibb.co/RPGMSzr/IPA-Wide-Cut.png" class="mImg" border=0>';

    var estilo = document.getElementById("meumodal1");
    estilo.style.visibility = 'visible';
    estilo.style.opacity = 1;
    modalShow = true;
  //alert( 'Vai pedir IPA!' );
});


$('#botaocancel').on('click', function(e) {
  
  
  var estilo = document.getElementById("meumodal1");
  estilo.style.visibility = 'hidden';
  estilo.style.opacity = 0;
  modalShow = false;
//alert( 'Vai pedir IPA!' );
});




$('.produto2').on('click', function(e) {
  if (!modalShow)
    alert( 'Vai pedir Pilsen!' );
});

$('.produto3').on('click', function(e) {
  if (!modalShow)
    alert( 'Vai pedir Dry Stout!' );
});

$('.produto4').on('click', function(e) {
  if (!modalShow)
    alert( 'Vai pedir Lagger!' );
});

$('.produto5').on('click', function(e) {
  if (!modalShow)
    alert( 'Vai pedir Gin Tonika!' );
});