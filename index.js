// Not displaying the sold out product when user clicks for available now products
document.querySelector('.available-button').addEventListener('click', () => {
    document.querySelector('.valentineSpecial').style.display = 'none';
});

// Displaying all the products (even sold out ones) when user clicks for all products
document.querySelector('.allProducts-button').addEventListener('click', () => {
    document.querySelector('.valentineSpecial').style.display = 'block';
})