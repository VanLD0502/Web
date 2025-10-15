

//💕💕💕😁 Hello+

//😘

const btn = document.querySelector('.open');
const close = document.querySelector('.close');


let website;
btn.addEventListener('click', function (e) {
    website = window.open("https://www.facebook.com/", "", "width = 500px, height = 500px");
});

close.addEventListener('click', function (e) {
    website.close();
});


// console.log(window.location);

// window.location.search = "id=2&name=yello&key=huhu";

// const url = new URLSearchParams(window.location.search);

// console.log(url.get('id'), url.get('name'), url.get('key'));

const productName = document.querySelector('.product-name a');

productName.addEventListener('click', (e) => {
    e.preventDefault();
    const url = e.target.getAttribute('href');

    window.history.pushState({}, '', url);
});