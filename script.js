

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
   return; 

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