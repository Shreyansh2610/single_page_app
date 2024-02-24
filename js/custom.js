// const marquee = document.querySelector('.marquee');
// const content = marquee.querySelector('.card');

// // Adjust these values as needed
// const speed = 700; // Scrolling speed in milliseconds
// const direction = 'left'; // 'left' or 'right'

// let contentWidth = content.offsetWidth;
// let scrollPosition = 0;

// function scrollText() {
//   if (direction === 'left') {
//     scrollPosition -= speed;
//     if (scrollPosition < -contentWidth) {
//       scrollPosition = marquee.clientWidth;
//     }
//   } else {
//     scrollPosition += speed;
//     if (scrollPosition > marquee.clientWidth) {
//       scrollPosition = -contentWidth;
//     }
//   }

//   marquee.style.transform = `translateX(${scrollPosition}px)`;
//   requestAnimationFrame(scrollText);
// }

// requestAnimationFrame(scrollText);