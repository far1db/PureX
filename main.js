//
//	Hamburger Menu
//

var hamburger = document.getElementById("hamburger-btn");
var mainMenu = document.getElementById("main-menu");

hamburger.addEventListener("click", function() {
	mainMenu.classList.toggle("mvisible");
});

// 
// Slideshow
//

// Get the elements which have the class "slidesho-item" inside the div#slideshow
var slideshowItems = document.getElementById("slideshow").getElementsByClassName("slideshow-item");

// Used to store the navigation links created in JavaScript
var navLinks;

// Used to store the "setInterval" object which creates the automatic slideshow
var slideInterval;	

// Period of the slideshow
var slideTimer = 7000; // Milliseconds

// Index of the current slide
var currentSlide = 0;

// Go to the next element in the slideshow
function nextSlide() {
	// Calculate the next slide index
	// If the "currentSlide" is the last slide set next to 0
	// Else set "next" to: currentSlide + 1
	let next = ((currentSlide + 1) >= slideshowItems.length) ? 0 : currentSlide + 1;

	goToSlide(next);
}

// Go to a specific slide 
function goToSlide(i) {
	// Hide the current slide
	slideshowItems[currentSlide].classList.add("hidden");
	// Remove the active state from the navigation button
	navLinks[currentSlide].classList.remove("active");

	// Display the "i" slide
	slideshowItems[i].classList.remove("hidden");
	// Set the active state to the relevent navigation button
	navLinks[i].classList.add("active");

	currentSlide = i; // Correct the current slide number

	// Restart the timer
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, slideTimer);
}

// Initialisation after the document load
window.onload = function() {
	// Create the navigation links of the slideshow
	for (let i = 0; i < slideshowItems.length; i++) { // Create a navigation button for each slide
		// Create a new "a" html element (anchor tag)
		let newLink = document.createElement("a");
		newLink.href = "";

		// Listen to the click event of the new "a" element
		newLink.addEventListener("click", function(e) {
			e.preventDefault(); // Prevents the default behaviour of the "a" tag
			goToSlide(i); 		// Connect the goToSlide function to the click event of the anchor tag

		});

		// Add the anchor tag to the slideshow navigation
		document.getElementById("slideshow-nav").appendChild(newLink);
	}

	navLinks = document.getElementById("slideshow-nav").getElementsByTagName("a");

	// Add the active state to the navigation button pointing to the currentSlide
	navLinks[currentSlide].classList.add("active");

	// Create a timer that calls the "nextSlide" function according to the var "slideTimer" 
	// (Automatic Slideshow)
	slideInterval = setInterval(nextSlide, slideTimer);
};