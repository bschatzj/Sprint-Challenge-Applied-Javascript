/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


const carousel = document.querySelector(".carousel-container");
console.log(carousel);
carousel.appendChild(newCarousel());




function newCarousel() {
  const carousel = document.createElement('div');
  const left = document.createElement('div');
  const imgOne = document.createElement('img');
  const right = document.createElement('div');

  carousel.classList.add('carousel');
  left.classList.add('left-button');
  right.classList.add('right-button');

  carousel.appendChild(left);
  carousel.appendChild(imgOne);
  carousel.appendChild(right);


  right.textContent = "right";
  left.textContent = 'left';

  let imgArray = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'];
  let i = 1;



  
  imgOne.src = imgArray[0];
  
  
  right.addEventListener('click', event => {
    console.log('button clicked', event.target)
    imgOne.src = imgArray[i];
    i++;
    if (i < imgArray.length){
    console.log (i);
      return imgOne.src, i;
    }
    else {
      i = 0;
      console.log (i);
      return imgOne.src, i;
    }
    });
  
    left.addEventListener('click', event => {
    console.log('button clicked', event.target)
    imgOne.src = imgArray[i];
    i--;
    if (i >= 0){
    console.log (i);
      return imgOne.src, i;
    }
    else {
      i = 3;
      console.log (i);
      return imgOne.src, i;
    }
    });
  
  
  return carousel;
}
