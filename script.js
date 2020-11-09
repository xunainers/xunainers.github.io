
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
  
    var estilo = document.getElementById("meumodal1");
    estilo.style.display = 'inline-block';
    modalShow = true;
  //alert( 'Vai pedir IPA!' );
});


$('#botaocancel').on('click', function(e) {
  
  
  var estilo = document.getElementById("meumodal1");
  estilo.style.display = 'none';
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