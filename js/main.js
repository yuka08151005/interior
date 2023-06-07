'use strict';

{
  const ham = document.getElementById('js-ham');
  const nav = document.getElementById('js-nav');
  const mask = document.getElementById('mask');
  
  ham.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    mask.classList.toggle('active');
  });

  mask.addEventListener('click', function(){
    this.classList.remove('active');
    ham.classList.remove('active');
    nav.classList.remove('active');
  });
}
