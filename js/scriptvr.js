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