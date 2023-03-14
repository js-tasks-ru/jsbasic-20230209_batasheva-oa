function initCarousel() {
  let currentSlideNumber = 0;
  let slidesAmount = 4;
  //let elem = document.querySelector('container');
  let elem = document.querySelector('[data-carousel-holder]');

  let carouselInnerElem = elem.querySelector('.carousel__inner');
  let carouselArrowRight = elem.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = elem.querySelector('.carousel__arrow_left');
 
  update();

  elem.addEventListener('click',(event) => {
    if (event.target.closest('.carousel__arrow_right')) {
      nextSlide();
    }
    if (event.target.closest('.carousel__arrow_left')) {
      prevSlide();
    }
  })  

  function nextSlide() {
    currentSlideNumber++;
    update();
  }

  function prevSlide() {
    currentSlideNumber--;
    update();
  }

  function update() {
    let offset = -carouselInnerElem.offsetWidth * currentSlideNumber;
    carouselInnerElem.style.transform = `translateX(${offset}px)`;

    if (currentSlideNumber == slidesAmount - 1) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }

    if (currentSlideNumber == 0) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }
  }

}
