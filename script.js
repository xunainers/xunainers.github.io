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