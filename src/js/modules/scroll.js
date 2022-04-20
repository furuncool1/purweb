export function scrollTo(){
  document.querySelector('.find-out-more').addEventListener('click', ()=>{
    window.scroll({
      left: 0, 
      top:  document.querySelector('.what-we-do').offsetTop,
      behavior: 'smooth'
    })
  })
}