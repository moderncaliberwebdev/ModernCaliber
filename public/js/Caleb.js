// Setup Rellax
var rellax = new Rellax('.rellax');

//opens sidebar
$("#whiteMenu").click(function() {
  document.getElementById('sideBar').style.width = "100vw";
  document.body.style.overflow = "hidden";
});
//changes display to block on hover so there is a transition on open
$("#whiteMenu").hover(function() {
	document.getElementById('sideBar').style.display = "block";
});

//closes sidebar
$("#asideMenu").click(function() {
  document.getElementById('sideBar').style.width = "0vw";
  document.body.style.overflow = "visible";
});
//makes sidebar changes smooth when changing viewport
function bodyOverflow() {
	if ($(window).width() < 600) {
		document.getElementById('sideBar').style.display = "none";
		document.getElementById('sideBar').style.width = "0vw";

		$(".sideBarOptions").click(function() {
			document.getElementById('sideBar').style.width = "0vw";
			document.body.style.overflow = "visible";
		});
	}
	if ($(window).width() > 600) {
		document.getElementById('sideBar').style.display = "block";
		document.getElementById('sideBar').style.width = "50vw";

		$(".sideBarOptions").click(function() {
			document.getElementById('sideBar').style.width = "50vw";
		});
	}
}
bodyOverflow();
window.onresize = function() { bodyOverflow() }

//scrolls to Home
document.getElementById("scrollToHome").addEventListener("click", function () {
    $("html, body").animate({
      scrollTop:$("#asideHeader").offset().top
    }, 'slow');
});
//scrolls to About
document.getElementById("scrollToAbout").addEventListener("click", function () {
    $("html, body").animate({
      scrollTop:$("#about").offset().top
    }, 'slow');
});

//scrolls to Portfolio
document.getElementById("scrollToPortfolio").addEventListener("click", function () {
    $("html, body").animate({
      scrollTop:$("#portfolio").offset().top
    }, 'slow');
});

//scrolls to contact me
document.getElementById("scrollToContact").addEventListener("click", function () {
    $("html, body").animate({
      scrollTop:$("#contactMe").offset().top
    }, 'slow');
});
document.getElementById("contactButton").addEventListener("click", function () {
    $("html, body").animate({
      scrollTop:$("#contactMe").offset().top
    }, 'slow');
});



/*
//shows all elements in portfolio
var seeAll = document.getElementById("seeAll");
seeAll.addEventListener("click", function(){
  seeAll.style.display = "none";
});

*/



//validates form
const contactMe = document.getElementById('contactMe')
const formResponse = document.getElementById('formResponse')
const submitButton = document.getElementById('sendButton')

const name = document.getElementById('inputName')
const email = document.getElementById('inputEmail')
const subject = document.getElementById('inputSubject')
const message = document.getElementById('inputMessage')
const firstname = document.getElementById('firstname')
const inputs = [name, email, subject, message]

submitButton.addEventListener('click', async (e) => {
  e.preventDefault()
  if(firstname.value === '') {
    formResponse.textContent = 'Sending...'
    const response = await fetch(`/contact?name=${name.value}&email=${email.value}&subject=${subject.value}&message=${message.value}`)
    const data = await response.json()
    if(data.formResponse) {
      formResponse.textContent = data.formResponse
      contactMe.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = "/messagesent";
  }
  }
})

// document.getElementById('contactForm').addEventListener("submit", (e) => {
//   const name = document.getElementById('inputName').value
//   const email = document.getElementById('inputEmail').value
//   const subject = document.getElementById('inputSubject').value
//   const message = document.getElementById('inputMessage').value
//   const formResponse = document.getElementById('formResponse')
//   let formMessage = ''

//   if(name == '' || email == '' || subject == '' || message == '' ) {
//     formMessage = 'Please fill in all fields'
//     formResponse.textContent = formMessage
//     $("html, body").animate({
//       scrollTop:$("#contactMe").offset().top
//     }, 'slow')
//     e.preventDefault()
//   } else if (!email.includes('@')){
//     formMessage = 'Provide a valid email'
//     formResponse.textContent = formMessage
//     $("html, body").animate({
//       scrollTop:$("#contactMe").offset().top
//     }, 'slow')
//     e.preventDefault()
//   }
// })

//scrolls to top of page
document.getElementById("sendToTop").addEventListener("click", function () {
    $("html, body").animate({
      scrollTop:0
    }, 'slow');
});
