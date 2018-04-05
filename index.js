'use strict';
/* global $ */

function main() {
  let bigImageSrc = $('.js-big-image').attr('src');
  let bigImageAlt = $('.js-big-image').attr('alt');
 
  $('.thumbnails').on('click', 'a', event => {
    // let littleImageSrc = $(this).find('img').attr('src');
    let littleImageSrc = $(this).children().attr('src');
    let littleImageAlt = $(this).children().attr('alt');
    console.log(littleImageAlt);
    console.log(littleImageSrc);

    $('.js-big-image').attr('src', littleImageSrc);
    $('.js-big-image').attr('alt', littleImageAlt);
  });
}

$(main);