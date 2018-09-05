window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin:'top'
});

sr.reveal('#content', {
  duration: 2000,
  origin:'bottom',
  easing: 'ease-in-out'
});

sr.reveal('.btn', {
  duration: 2000,
  delay: 1000,
  origin:'bottom'
});

sr.reveal('.me-pic', {
  duration: 1000,
  distance: '100px',
  delay: 1000,
  origin:'bottom',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('.header-bio', {
  duration: 2000,
  distance: '300px',
  origin:'left',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('.bio', {
  duration: 2000,
  distance: '300px',
  origin:'bottom',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('#services-header', {
  duration: 1000,
  distance: '100px',
  origin:'top',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('.web-card', {
  duration: 1000,
  distance: '100px',
  delay: 400,
  origin:'bottom',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('.portfolio-header', {
  duration: 1000,
  distance: '100px',
  origin:'bottom',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('.project1', {
  duration: 1000,
  distance: '100px',
  origin:'left',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('.project2', {
  duration: 1000,
  distance: '100px',
  origin:'right',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('.project3', {
  duration: 1000,
  distance: '100px',
  origin:'left',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('.project4', {
  duration: 1000,
  distance: '100px',
  origin:'top',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('.project5', {
  duration: 1000,
  distance: '100px',
  origin:'right',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('#contact-section', {
  duration: 1000,
  distance: '100px',
  origin:'bottom',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
