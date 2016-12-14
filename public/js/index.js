/* Side navbar */
$( document ).ready(function(){
  $(".button-collapse").sideNav();
});
/* End of navbar */ 

/* Skills bar */
// $(function (){
// 	$('.skillbar').each(function (){
// 		$(this).find('.skillbar-bar').animate({
// 			width: $(this).attr('data-percent')
// 		}, 5000);
// 	});
// });

/* Preloader */
let myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainPage").style.display = "block";
}
/* End of preloader */ 

/* TEST TIMELINE */







