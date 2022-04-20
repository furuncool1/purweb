export function popup() {
  document.querySelector('.about_play-button')
    .addEventListener('click', ()=> {
      document.querySelector('.popup').style.display="flex";
    })

  document.querySelector('.popup')
    .addEventListener('click', ()=>{
      document.querySelector('.popup').style.display="none";
    })
}