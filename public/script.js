const searchInput = document.getElementById("Search").querySelector("input");
const searchButton = document.getElementById("search-button");
const products = document.querySelectorAll(".product-item");
const productName = document.querySelectorAll("#products p");
const filterButtons = document.getElementById("buttons").querySelectorAll("button");
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

const priceRangeHandler = () => {
    const maxPrice = parseInt(priceRange.value);
    priceValue.textContent = maxPrice;

    products.forEach(product => {
        const price = parseInt(product.querySelector('span').textContent.replace('$', ''));
        if (price <= maxPrice) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
};

priceRange.addEventListener('input', priceRangeHandler);


const filterButtonHandler = (event) => {
    const buttonDataset = event.target.dataset.name;
    products.forEach(product => {
        if (buttonDataset === 'all' || product.dataset.category === buttonDataset) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
    updatePriceFilter();
};

const searchButtonHandler = () => {
    const value = searchInput.value.toLowerCase().trim();
    const searchResults = SearchByName(productName, value);
    products.forEach(product => {
        product.style.display = 'none';
    });
    searchResults.forEach(product => {
        product.closest('.product-item').style.display = ''; //product.closest نزیکترین والد را انتخاب میکند
    });
    updatePriceFilter();
};

const SearchByName = (productName, searchValue) => {
    return [...productName].filter(product => product.innerText.toLowerCase().includes(searchValue));
};

searchButton.addEventListener("click", searchButtonHandler);
searchInput.addEventListener("keyup", searchButtonHandler); //برای اینکه در لحظه اعمال بشه
filterButtons.forEach(button => {
    button.addEventListener("click", filterButtonHandler);
});

var name = "mohammad dehdar"
name.indexOf("dehdar"); // 8
name.slice(4,7); // mma 
name.replace("dehdar", 1234); // mohammad 1234
name.toUpperCase(); //MOHAMMAD DEHDAR
name.toLowerCase(); // mohammad dehdar
name.concat(" ","is developer"); // mohammad dehdar is developer