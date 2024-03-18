// window.onload = function() {
//     var col1 = document.getElementById("col-1");
//     var img = new Image();
//     img.onload = function() {
//         col1.style.height = img.height + "px";
//     }
//     img.src = "../media/painting1.png";
// }

document.addEventListener("DOMContentLoaded", function() {
    var col1 = document.getElementsByClassName("col-1")[0]; // Get the first element with class "col-1"
    var img = new Image();
    img.onload = function() {
        col1.style.height = img.height + "px";
    }
    img.src = "../media/painting1.png";
});


//menu buttons
// function handleClick(button) {
//     console.log("You clicked button " + button);
//     if (button === 1) {
//         window.location.href = "portfolio.html";
//     }
//     // You can perform other actions here based on the clicked section
//   }


// Handle the header letter stretching

// Define a function to update the scaling
function updateScaling() {
    let headerWidth = document.querySelector('header').offsetWidth;
    let h1 = document.querySelector('header h1');
    let h1Width = h1.offsetWidth;
    let scaleX = headerWidth / h1Width;
    h1.style.transform = 'scaleX(' + scaleX + ')';
}

// Call the function initially
updateScaling();

// Add an event listener for the window resize event
window.addEventListener('resize', function() {
    updateScaling(); // Call the function whenever the window is resized
});