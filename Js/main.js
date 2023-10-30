const presentacionImg_1 = document.querySelector('.imagen_1')
const presentacionImg_2 = document.querySelector('.imagen_2')


presentacionImg_1.addEventListener('click', () => {
  let AlturaIMG1 = presentacionImg_1.height
  console.log(AlturaIMG1)
  presentacionImg_1.style = `transform: translateY(-${AlturaIMG1}px)`
  presentacionImg_2.style = `transform: translateY(-${AlturaIMG1}px)`
})
presentacionImg_2.addEventListener('click', () => {
  presentacionImg_1.style = 'transform: translateY(0px);'
  presentacionImg_2.style = 'transform: translateY(0px);'
})

const mainSection = document.querySelectorAll('.main__section')

const cargarSection = (entradas, observador) => {
  entradas.forEach( entrada => {
    if(entrada.isIntersecting){
      entrada.target.classList.add('visible')
    }
  });
}
const observer = new IntersectionObserver(cargarSection, {
  root: null,
  threshold: 0.1
});

mainSection.forEach((section)=>{
  observer.observe(section)
})

