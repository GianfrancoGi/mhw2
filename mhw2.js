
let currentIndex=0;
let test=0;

let slides = document.querySelectorAll('.slide');

const prev = document.getElementById('prev');
prev.addEventListener('click', prevSlide)

const next = document.getElementById('next');
next.addEventListener('click', nextSlide)

function show(index){
    if (index < 0) {
        index = slides.length - 1;
   } else if (index >= slides.length) {
        index = 0;
   }
   
   currentIndex = index;

   for (let i = 0; i < slides.length; i++){
      if(i === currentIndex) {
         slides[i].classList.add('active');
         slides[i].classList.remove('slide');
      }
      if(i !== currentIndex) {
        slides[i].classList.remove('active');
        slides[i].classList.add('slide');
      }
   }

}

function nextSlide() {
    show(currentIndex + 1);
}

function prevSlide() {
     show(currentIndex - 1);
}


const kart = document.getElementById('carrello');
kart.addEventListener('click', ticket)

function ticket(){
  if(test===0){
    let valore = document.createElement('strong');
    valore.textContent = "Effettuare prima l'accesso, clicca su ACCEDI";
    let container = document.querySelector('.market');
    container.appendChild(valore);
    let container2 =document.querySelector('#imgcentrale');
    container2.src="img/errore.jpg";
    test=1;
  }
  else{
    let container = document.querySelector('.market');
    container.innerHTML='';
    let container2 =document.querySelector('#imgcentrale');
    container2.src="img/dolcenera.jpg";
    test=0;
  }
}
