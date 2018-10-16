// let jqueryElement = $('green')
//   console.log(jqueryElement)
//
// let javascriptElement =
//     document.GetElementById('green')
//     console.log(javascriptElement)


// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

//2. Hide all of the paragraphs on the index.html page.
//$('p').hide()

//3. Change all h2's to have text color red
// $('h2').css('color','red')

//4. Hide all links on your page
// $('a').hide()

//7. hide all papagraphs when one is clicked
let paragraphs = $('p')
  paragraphs.on('click', function(){
  paragraphs.hide()
})

//8. Hide all images when one of them is clicked.
let images = $('img')
  images.on('click', function(){
  images.hide()
  })
  
//9. When the user clicks onto
