function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let div = document.querySelector('#text');
     
  function btnHandler() {
   div.hidden = !div.hidden;}

   btn.addEventListener('click', btnHandler);
}
