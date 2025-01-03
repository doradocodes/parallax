// on window load, set scroll y position to 50vh
window.onload = function() {
    window.scroll(0, 500);
}

// on window scroll, move each image to the right by the scroll amount
window.onscroll = function() {
    let images = document.querySelectorAll('img');
    images.forEach(function(image, index) {
        // image.style.left = (index * window.scrollY * 0.001) + 'px';
        image.style.transform = 'translateX(' + ((index ** 2) * window.scrollY * 0.001) + 'px)';
        console.log(index, image.style.transform)
    });
}
