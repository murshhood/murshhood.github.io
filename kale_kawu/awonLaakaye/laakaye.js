const toggle = document.querySelector("#toggle");
const topLogo = document.querySelector(".topLogo");
const close = document.querySelector("#close");
const nav = document.querySelector("nav");


// if (window.location.href !== "http://127.0.0.1:5500/index.html") {
	
	toggle.addEventListener("click",() => {
		nav.style.marginLeft = 0+"px";
		toggle.style.visibility = "hidden";
		setTimeout(() => {
			
			topLogo.style.visibility = "hidden";
		}, 800);
	});
	close.addEventListener("click",() => {
		nav.style.marginLeft = -100+"%";
		toggle.style.visibility = "visible";
		topLogo.style.visibility = "visible";
	});
// }


const popUp = document.querySelector("#popUp");
const popUpImage = document.querySelector("#popUpImage");
const eachImage = document.querySelectorAll(".eachPicture img");
const closePopUp = document.querySelector("#closePopUp");

eachImage.forEach(image => {
	image.addEventListener("click", (e) => {
		popUp.style.display = "block";
		const imageSrc = e.target.src;
		popUpImage.src = imageSrc;
		// console.log(image);
	
	});
});

closePopUp.addEventListener("click", () => {

	popUp.style.display = "none";
});


