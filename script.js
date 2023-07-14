
let body = document.querySelector('body');
let btnDark = document.querySelector('#darkmode');
nav = document.querySelector('nav');


console.log(btnDark,body,nav);

btnDark.addEventListener('click', function(){
body.classList.toggle('dark-theme');
if(body.classList.contains('dark-theme'))
  btnDark.innerHTML ="💜";
  else{
    btnDark.innerHTML ="🌚";
  }
})