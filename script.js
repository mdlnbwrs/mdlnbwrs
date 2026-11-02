// Numbers each photo slide and points the ↑ / ↓ arrows at its neighbours.
// Arrows loop: ↑ on the first photo goes to the last, ↓ on the last goes to the first.
// Slides may leave out the <nav class="steppers"> block entirely; it is created here.
document.querySelectorAll('.gallery').forEach(function (gallery) {
  var slides = Array.prototype.slice.call(gallery.querySelectorAll('.slide'));
  var count = slides.length;

  slides.forEach(function (slide, i) {
    var prev = (i - 1 + count) % count + 1;
    var next = (i + 1) % count + 1;

    slide.id = 's' + (i + 1);

    var nav = slide.querySelector('.steppers');
    if (!nav) {
      nav = document.createElement('nav');
      nav.className = 'steppers';
      nav.setAttribute('aria-label', 'Photo navigation');
      slide.appendChild(nav);
    }
    nav.innerHTML =
      '<a href="#s' + prev + '" aria-label="Previous photo">\u2191</a>' +
      '<a href="#s' + next + '" aria-label="Next photo">\u2193</a>';
  });
});
