'use strict';
/* global $ */

function main() {
  $('.thumbnail').on('click', event => {
    const target = $(event.target);
    handleTrigger(target, event);
    console.log($(this));
  });


  $('.thumbnail').on('keydown', event => {
    if (event.which === 13) {
      const target = $(event.target).children();
      console.log(target);
      handleTrigger(target, event);
      //console.log(event.which);
    } 
  });
}



function handleTrigger(elem, event) {
  //console.log(event.target);
  event.preventDefault();
  const littleImageSrc = elem.attr('src');
  const littleImageAlt = elem.attr('alt');
  $('.js-big-image').attr('src', littleImageSrc);
  $('.js-big-image').attr('alt', littleImageAlt);
}

$(main);