const header = document.querySelector("header");
const logo = document.querySelector('.site-logo')
const sectionOne = document.querySelector(".home-intro");
console.log('is connected')
const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
        logo.classList.add('nav-scrolled-logo')
    } else {
        header.classList.remove("nav-scrolled");
        logo.classList.remove('nav-scrolled-logo');
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);



const modalTogler = document.querySelector('.menu_toggler')
const menu = document.querySelector('.menu')
//stops scrolling temporary and close contunie scrolling depending on the burger
function isOpen() {
  if (modalTogler.checked === true) {
      $('body').css({'overflow':'hidden'});
      $(document).bind('scroll',function () { 
          window.scrollTo(0,0); 
      });
    
  } else {
    $(document).unbind('scroll'); 
    $('body').css({'overflow':'visible'});
  }
}
modalTogler.addEventListener('click', isOpen)
//close the menu if clicked on .menu
menu.addEventListener('click', close = () => {
  if (modalTogler.checked === true) {
    modalTogler.checked = false
    //release the scroll lock
    $(document).unbind('scroll'); 
    $('body').css({'overflow':'visible'});
  }
} )
//uncheck the checkbox that opens the burger on resizing the window
window.addEventListener('resize', function () {
  if (window.innerWidth > 540) {
    modalTogler.checked= false 
  }
});

//the functions to close and open the tour 
const tour_checkbox = document.querySelector('.tour_checkbox')
const close_popup = document.querySelector(".close_popup")
const slider_li1 = document.querySelector('.slider_li1_button')
const slider_li2 = document.querySelector('.slider_li2_button')
const popup_div = document.querySelector('.popup_div')
const project1 = document.querySelector('.project1')
const project2 = document.querySelector('.project2')
const project3 = document.querySelector('.project3')
const project4 = document.querySelector('.project4')

close_popup.addEventListener('click', () => {
  if (tour_checkbox.checked === true) {
    project1.classList.add('makeHidden')
    project2.classList.add('makeHidden')
    tour_checkbox.checked = false
    // popup_div.classList.remove('makeVisible')
  }
  else {
    tour_checkbox.checked=true
  }
})

slider_li1.addEventListener('click', () => {
  if (tour_checkbox.checked === true) {
    tour_checkbox.checked=false
  }
    else {
      project1.classList.remove('makeHidden')
    tour_checkbox.checked=true
  }
})
slider_li2.addEventListener('click', () => {
  if (tour_checkbox.checked === true) {
    tour_checkbox.checked=false
  }
    else {
      project2.classList.remove('makeHidden')
    tour_checkbox.checked=true
  }
})