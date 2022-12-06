
var movies=[{
movieName:'the GodFather /9.4',
desc:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son",
director: " director: Francis Ford Coppola",
writers :" writers: Mario Puzo(screenplay by)Francis Ford Coppola(screenplay by)",
stars:" stars: Marlon BrandoAl PacinoJames Caan",
 img:"img1.jpg"},

 { movieName:"The shawshank Redemption  /9.3",
desc:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
director:" director: Frank darabont",
writers: " writers: stephen King(based on the short novel Rita Hayworth and the shawshank Redemption byFrank darabont screenplay by ", 
stars: " stars: Tim Robbins , Morgan Freeman , Bob Gunton",
img:"img2.jpg" },

{
 movieName:"scarFace /9.1",
desc:"In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
director: "director :Brian de Palma",
 writers:" writers: Oliver stone(screenplay by)Howard Hawks(1932 screenplay)Ben Hecht(1932 screenplay) ",
 stars:" stars: Al Pacino ,Michelle Pfeiffer ,steven Bauer ",
 img:"jdida.jpg",},

{
movieName:"the Godfather part2   /9",
desc:"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
director:"director: Francis Ford Coppola",
writers:" writers: Francis Ford Coppola(screenplay by)Mario Puzo(screenplay by)",
stars:" stars: Al Pacino ,Robert De Niro , Robert Duvall",
img:"img4.jpg",},

{
movieName:"Forrest Gump   /8.9",
desc:" The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart",
director:"director:Robert Zemeckis ",
writers:" writers: Winston Groom(novel)Eric Roth(screenplay) ",
stars:" stars: Tom Hanks ,Robin Wright , Gary Sinise",
img:"img5.jpg",} ]
  

$(document).ready(function() {
  
 

    function getAllElements(){
        for (var i=0;i<movies.length;i++){
            $(".container").append(`<div class="card fade">
            <img src=${movies[i].img} alt="" id="img1">
          
            <div class=" desc"><p id="Firstp">${movies[i].movieName} </p> <br>
              <p>${movies[i].desc}</p> <br> 
            <p>Director : ${movies[i].director}</p> <br>
            <p>Writers : ${movies[i].writers}</p> <br>
            <p> Stars : ${movies[i].stars}</p>
            </div>
          </div>`);
        }
      
    }
    getAllElements()
    showSlides(slideIndex);
  



  });
  var slideIndex=1
  function showSlides(n) {
 
    var slides = document.getElementsByClassName("card");
    console.log("slides",slides)
   
    if (n > slides.length) {slideIndex = 1}    
    if (n < 0) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
 
    slides[slideIndex-1].style.display = "block";  
   
  }


function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log(n)
}

function currentSlide(n) {

  showSlides(slideIndex = n);
}





   







