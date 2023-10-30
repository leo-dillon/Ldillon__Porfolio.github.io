const presentacionImg_1 = document.querySelector('.imagen_1')
const presentacionImg_2 = document.querySelector('.imagen_2')


presentacionImg_1.addEventListener('click', () => {
  presentacionImg_1.style = 'transform: translateY(-470px);'
  presentacionImg_2.style = 'transform: translateY(-464px);'
})
presentacionImg_2.addEventListener('click', () => {
  presentacionImg_1.style = 'transform: translateY(0px);'
  presentacionImg_2.style = 'transform: translateY(0    px);'
})

const mainSection = document.querySelectorAll('.main__section')

const cargarSection = (entradas, observador) => {
  entradas.forEach( entrada => {
    console.log(entrada)
    if(entrada.isIntersecting){
      entrada.target.classList.add('visible')
    }else{
      entrada.target.classList.remove('visible')
    }
  });
}
const observer = new IntersectionObserver(cargarSection, {
  root: null,
  threshold: 0.2
});

mainSection.forEach((section)=>{
  observer.observe(section)
})

