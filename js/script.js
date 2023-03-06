let movieData, userInput;

let apikey = 'be6dfcbb&t'

const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $runtime = $('#runtime');
const $director = $('#director'); 
const $actors = $('#actors');
const $plot = $('#plot');
const $awards = $('#awards');
const $poster = $('#poster');
const $ratingSource = $('#ratingSource');
const $ratingValue = $('#ratingValue');

// image
const $posterImage = $('#poster-image')

const $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
       // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val();
      // getting the user input
    $.ajax({
        url:`https://www.omdbapi.com/?apikey=${apikey}=${userInput}`
      }).then(
        (data) => {
         movieData = data;
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}

function render() {
    $title.text(movieData.Title);
    $year.text(movieData.Year);
    $rated.text(movieData.Rated);
    $runtime.text(movieData.Runtime);
    $director.text(movieData.Director)
    $actors.text(movieData.Actors)
    $plot.text(movieData.Plot)
    $awards.text(movieData.Awards)
    $ratingSource.text(movieData.Ratings[1].Source)
    $ratingValue.text(movieData.Ratings[1].Value)
    $posterImage.attr("src", movieData.Poster)
 }


 //sticky
 window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function resultsVisibility() {
  $('#results-container').css("display","block")
  
}