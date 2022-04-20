export function burger(){
  document.querySelector('.greetings__burger').addEventListener('click', () => {
    document.querySelector('.greetings__burger').classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('active');
    document.querySelector(".wrapper").classList.toggle('hidden');
  })
}