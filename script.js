

var Abas = document.querySelectorAll(".opcao1");
Abas[0].focus();
var vData = new Date();
var hoje = vData.getDate();
var modalShow = false;
var modalShowing = "";

document.getElementById("treta").innerHTML = '#####';

if (hoje < 10)
  hoje = '0' + vData.getDate() + '/' + vData.getFullYear();
else
  hoje = vData.getDate() + '/' + vData.getFullYear();

document.getElementById("info").innerHTML += '<b>Data: '+ hoje +'</b>';


$('#botaocancel').on('click', function(e) {
  
  
  var estilo = document.getElementById("meumodal1");
  estilo.style.visibility = 'hidden';
  estilo.style.opacity = 0;
  modalShow = false;

});

// Controle de FOCO : Cardapio - Pedidos - Conta
// Click Cardapio
$('.opcao1').on('click', function(e) { 
  var estiloCardapio = document.getElementById("cardapio");
  var estiloPedido = document.getElementById("pedido");
  var estiloConta = document.getElementById("status");

  // Estilos de foco para cardapio
  estiloCardapio.style.color = "white";
  estiloCardapio.style.borderBottomStyle = "solid"

  //Estilos padrao para restante

  estiloPedido.style.color = "#4a6075";
  estiloPedido.style.borderBottomStyle = "none";

  estiloConta.style.color = "#4a6075";
  estiloConta.style.borderBottomStyle = "none";
});


// Click Pedidos
$('.opcao2').on('click', function(e) {
  var estiloCardapio = document.getElementById("cardapio");
  var estiloPedido = document.getElementById("pedido");
  var estiloConta = document.getElementById("status");

  // Estilos de foco para Pedidos
  estiloPedido.style.color = "white";
  estiloPedido.style.borderBottomStyle = "solid"

  //Estilos padrao para restante

  estiloCardapio.style.color = "#4a6075";
  estiloCardapio.style.borderBottomStyle = "none";

  estiloConta.style.color = "#4a6075";
  estiloConta.style.borderBottomStyle = "none";
});

// Click Conta
$('.opcao3').on('click', function(e) {
  var estiloCardapio = document.getElementById("cardapio");
  var estiloPedido = document.getElementById("pedido");
  var estiloConta = document.getElementById("status");

  // Estilos de foco para Conta
  estiloConta.style.color = "white";
  estiloConta.style.borderBottomStyle = "solid"

  //Estilos padrao para restante

  estiloCardapio.style.color = "#4a6075";
  estiloCardapio.style.borderBottomStyle = "none";

  estiloPedido.style.color = "#4a6075";
  estiloPedido.style.borderBottomStyle = "none";
});


/************************************************************************
 * Clique DIV de produtos
 ***********************************************************************/

$('.produto1').on('click', function(e) {
  var vProd = document.getElementById("1nomecervejas1").innerHTML;

  document.getElementById("mHeader").innerHTML = vProd;
  document.getElementById("mImg").innerHTML = '<img src="https://i.ibb.co/RPGMSzr/IPA-Wide-Cut.png" class="mImg" border=0>';

  var estilo = document.getElementById("meumodal1");
  estilo.style.visibility = 'visible';
  estilo.style.opacity = 1;
  modalShow = true;

});


$('.produto2').on('click', function(e) {
  var vProd = document.getElementById("2nomecervejas1").innerHTML;

  document.getElementById("mHeader").innerHTML = vProd;
  document.getElementById("mImg").innerHTML = '<img src="https://i.ibb.co/f2N5p70/Pilsen-Wide-Cut.png" class="mImg" border=0>';

  var estilo = document.getElementById("meumodal1");
  estilo.style.visibility = 'visible';
  estilo.style.opacity = 1;
  modalShow = true;

});

$('.produto3').on('click', function(e) {
  var vProd = document.getElementById("3nomecervejas1").innerHTML;

  document.getElementById("mHeader").innerHTML = vProd;
  document.getElementById("mImg").innerHTML = '<img src="https://i.ibb.co/jDpfrC3/Stout-Wide-Cut.png" class="mImg" border=0>';

  var estilo = document.getElementById("meumodal1");
  estilo.style.visibility = 'visible';
  estilo.style.opacity = 1;
  modalShow = true;
});

$('.produto4').on('click', function(e) {
  var vProd = document.getElementById("4nomecervejas1").innerHTML;

  document.getElementById("mHeader").innerHTML = vProd;
  document.getElementById("mImg").innerHTML = '<img src="https://i.ibb.co/f2N5p70/Pilsen-Wide-Cut.png" class="mImg" border=0>';

  var estilo = document.getElementById("meumodal1");
  estilo.style.visibility = 'visible';
  estilo.style.opacity = 1;
  modalShow = true;
});

$('.produto5').on('click', function(e) {
  var vProd = document.getElementById("5nomecervejas1").innerHTML;

  document.getElementById("mHeader").innerHTML = vProd;
  document.getElementById("mImg").innerHTML = '<img src="https://i.ibb.co/6Xh6ft1/GIN-Wide-Cut.png" class="mImg" border=0>';

  var estilo = document.getElementById("meumodal1");
  estilo.style.visibility = 'visible';
  estilo.style.opacity = 1;
  modalShow = true;
});


/*$("div").click(function (e) {
  
  // Remove any old one
  $(".ripple").remove();

  // Setup
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight =  $(this).height();
  
  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  
 // Make it round!
  if(buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight; 
  }
  
  // Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;
  
 
  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});*/

/*function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByClassName("produto1");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}*/