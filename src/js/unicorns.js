// Получить кнопку:
mybutton = document.getElementById("myBtn");

mybutton.addEventListener('click', ()=>{
    $('html, body').animate({scrollTop: 0}, 100)
})

// Когда пользователь прокручивает вниз 20px от верхней части документа, покажите кнопку
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


