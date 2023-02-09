const productDetails = [
  {
    title: "Long T-shirt",
    info: "Mens t-shirt",
    imgSrc:
      "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg",
    price: "₹300",
  },
  {
    title: "Mens pants",
    info: "Mens Pant",
    imgSrc:
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: "₹550",
  },
  {
    title: "Shoes (Sneaker)",
    info: "Shoes",
    imgSrc:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "₹700",
  },
  {
    title: "Formal pants",
    info: "Pant",
    imgSrc:
      "https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "₹550",
  },
  {
    title: "Pants",
    info: "Mens Pant",
    imgSrc:
      "https://images.unsplash.com/photo-1624378440847-4a64ee1a889d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "₹550",
  },
  {
    title: "T-shirt",
    info: "Mens t-shirt",
    imgSrc:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    price: "₹350",
  },
  {
    title: "Canvas Shoes",
    info: "Mens Shoes",
    imgSrc:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "₹300",
  },
  {
    title: "Nike Shoes",
    info: "Shoes",
    imgSrc:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "₹700",
  },
  {
    title: "Women skirt",
    info: "skirt lady",
    imgSrc:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8U2tpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "₹300",
  },
  {
    title: "Black T-shirt",
    info: "t-shirt",
    imgSrc:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: "₹300",
  },
  {
    title: "Lady skirt",
    info: "skirt lady",
    imgSrc:
      "https://images.unsplash.com/photo-1582142306909-195724d33ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8U2tpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
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
