const productDetails = [
  {
    title: "Bahamas",
    info: "Mens t-shirt",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹300",
  },
  {
    title: "Bahamas pants",
    info: "Mens Pant",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹550",
  },
  {
    title: "Shoes stylish",
    info: "Shoes",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹700",
  },
  {
    title: "Bahamas pants",
    info: "Pant",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹550",
  },
  {
    title: "Bahamas pants",
    info: "Mens Pant",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹550",
  },
  {
    title: "Bahamas",
    info: "Mens t-shirt",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹300",
  },
  {
    title: "Shoes stylish",
    info: "Mens Shoes",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹300",
  },
  {
    title: "Shoes stylish",
    info: "Shoes",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹700",
  },
  {
    title: "Lady skirt",
    info: "skirt lady",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹300",
  },
  {
    title: "Bahamas",
    info: "t-shirt",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹300",
  },
  {
    title: "Lady skirt",
    info: "skirt lady",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹300",
  },
];

const productContainer = document.querySelector(".product-container");

productDetails.forEach((cards) => {
  let product = document.createElement("div");

  product = `
    <div class="product">
        <div class="image">
            <img src="${cards.imgSrc}" alt="${cards.info}" />
        </div>
        <div class="info">
            <h2 class="title">${cards.title}</h2>
            <p class="price">${cards.price}</p>
        </div>
    </div>
    `;
  productContainer.innerHTML += product;
});

const search = () => {
  const sreachbox = document.getElementById("search-items").value.toLowerCase();
  const productCard = document.querySelectorAll(".product");
  const pname = document.getElementsByTagName("h2");

  for (var i = 0; i < pname.length; i++) {
    let match = productCard[i].getElementsByTagName("h2")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toLowerCase().indexOf(sreachbox) > -1) {
        productCard[i].style.display = "";
      } else {
        productCard[i].style.display = "none";
      }
    }
  }
};

document.querySelector("input").addEventListener("keyup", search);
