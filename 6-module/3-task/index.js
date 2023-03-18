import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideNumber = 0;

    this.render();   
    this.addListeners();
  }
  render() {      

    this.elem = createElement(`
     <div class="carousel">
       <div class="carousel__arrow carousel__arrow_right">
         <img src="/assets/images/icons/angle-icon.svg" alt="icon" />
       </div>
       <div class="carousel__arrow carousel__arrow_left">
         <img src="/assets/images/icons/angle-left-icon.svg" alt="icon" />
       </div>
       <div class="carousel__inner"></div>
     </div>
     `);    
 
     let slides = this.slides.map( item => createElement(`
     <div class="carousel__slide" data-id="${item.id}">
         <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
         <div class="carousel__caption">
           <span class="carousel__price">€${item.price}</span>
           <div class="carousel__title">${item.name}</div>
           <button type="button" class="carousel__button">
             <img src="/assets/images/icons/plus-icon.svg" alt="icon">
           </button>
         </div>`));  
 
      this.elem.querySelector('.carousel__inner').append(...slides);     
      this.update();
   }

  addListeners = () => {
    this.elem.addEventListener("click", (event) => {
      let button = event.target.closest(".carousel__button");

      if (button) {
        let id = event.target.closest(`[data-id]`).dataset.id;
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        }));
      }

      if (event.target.closest('.carousel__arrow_right')) {
        this.next();
      }

      if (event.target.closest('.carousel__arrow_left')) {
        this.prev();
      }
    });
  }

  next = () => {
    this.currentSlideNumber++;
    this.update();
  }

  prev = () => {
    this.currentSlideNumber--;
    this.update();
  }


  update() {
    
    let offset = -this.elem.offsetWidth * this.currentSlideNumber;
    this.elem.querySelector('.carousel__inner').style.transform = `translateX(${offset}px)`;

    let carouselArrowRight =this.elem.querySelector('.carousel__arrow_right');
    let carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');

    
    if (this.currentSlideNumber == this.slides.length - 1) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }

    if (this.currentSlideNumber == 0) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }
  }
}
