$(document).ready(function(){
    $('.parallax').parallax();
  });

  /* Side navbar */
$( document ).ready(function(){
    //Side Nav
    $(".button-collapse").sideNav();
    //Modal
    $('.modal').modal();
  
    //Scroll to top button 
    $('.scrollspy').click(function(e){
      let linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top
      }, 1000);
      e.preventDefault(); //removes section name from url
    });
  
      $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        $('.go-top').fadeIn(300);
      } else {
        $('.go-top').fadeOut(200);
      }
    });
    
    // Animate the scroll to top
    $('.go-top').click(function(event) {
      event.preventDefault();
      
      $('html, body').animate({scrollTop: 0}, 300);
    })
  });
  
  /* Preloader */
  let myVar;
  
  function myFunction() {
      myVar = setTimeout(showPage, 1300);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
  }
  /* Side Nav */
    // Show sideNav
    $('.button-collapse').sideNav('show');
    // Hide sideNav
    $('.button-collapse').sideNav('hide');
    // Destroy sideNav
    $('.button-collapse').sideNav('destroy');
  
    /* End of Side Nav */
    
  
  