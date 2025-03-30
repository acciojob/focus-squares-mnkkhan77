// Select all the squares
const squares = document.querySelectorAll('.square');

function changeOtherColorsOnHover(event) {
    squares.forEach(square => {
        if (square !== event.target) {
            square.style.backgroundColor = '#6F4E37';
        }
    });
}

function resetColorsOnLeave() {
    squares.forEach(square => {
        square.style.backgroundColor = '#E6E6FA';
    });
}

squares.forEach(square => {
    square.addEventListener('mouseenter', changeOtherColorsOnHover); // When mouse enters, change other squares
    square.addEventListener('mouseleave', resetColorsOnLeave); // When mouse leaves, reset all squares
});
