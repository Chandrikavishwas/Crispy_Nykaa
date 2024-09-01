const newProducts = [
  {
    id: 2,
    image1:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvwqFwhTa7jWPcQXxVZmRZS1LsXX7SmhNypo1ZjwQ6GM_oKgLea4SoEUyhi-T41_in3RRT4GvuItvTgMAfjzKC3uDknN-4kAI-HZLh0sr5ClscfsTcBKp6&usqp=CAE",
    card_title: "Braun Hair Dryer",
    price: "1499",
    off_price: "1349",
    offer: "10",
    rating: "4.5",
    category: "Hair_Styling_Tools",
  },
  {
    id: 3,
    image1:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSt2spcMrbxFrVSdJ76Nyd6z7piOFEVDmLUWl1QtUMLR9xwM0uzWasmRlYIrNeMlqc8vP2yxjts4KpZnAbwebb9ZYFvn_uxC650aZMtyfsp&usqp=CAE",
    card_title: "Dyson Airwrap Styler",
    price: "49999",
    off_price: "45999",
    offer: "8",
    rating: "4.8",
    category: "Hair_Styling_Tools",
  },
  {
    id: 4,
    image1:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIKjgic8j4kcW-1TXurgF2Lx4evoG7nBFshrlQrBthGzn6uHmwufllpcsVFaGtPqbEuoF_fq5CC2bOTojBAA7cMTPXQJsQ7BGu-VDH4wcxeFAgXzbyYYa1Ow&usqp=CAE",
    card_title: "Philips Electric Shaver",
    price: "2999",
    off_price: "2699",
    offer: "10",
    rating: "4.3",
    category: "Shaving_Tools",
  },
  {
    id: 5,
    image1:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTbcLkMQ5qoxdoGTFLyp3q7JgDcn40eL4Sltb2QNGsZXLuhrB2xP_0JqcIRYqLPmDRnDH7X6xnC4SeInstkralKbqdobLVbMbUU-wm_frAUL9-T9jveFJ3Q&usqp=CAE",
    card_title: "Gillette Razor Blades",
    price: "699",
    off_price: "629",
    offer: "10",
    rating: "4.1",
    category: "Shaving_Tools",
  },
  {
    id: 6,
    image1:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR7ClU2IkXBteQiQxKtldwHY04-3BHJQ64QU59-xEwnqdVdApSn665zLb1dYgtCbzFAM9sOhvcu2ark4AlGxEBNtdlxo3wZHLoOgGRkrt5h&usqp=CAE",
    card_title: "Remington Face Epilator",
    price: "1799",
    off_price: "1599",
    offer: "11",
    rating: "4.2",
    category: "Face/Skin_Tools",
  },
  {
    id: 7,
    image1:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSEfxpiAO5tkUUNYQK18zpApzgsRCsr47c--iSNj1Tb9UnQlSfQ2itWkzBO9KzLW9_1Szfvbwtr7ECFJ7uN4kI8rFekjG6Tfg&usqp=CAE",
    card_title: "Beurer Facial Steamer",
    price: "2499",
    off_price: "2249",
    offer: "10",
    rating: "4.0",
    category: "Face/Skin_Tools",
  },
  {
    id: 8,
    image1:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_o_yyCYHFnEcs-D_CbKGQmOijQqQXRdnmjmZctnFW20BIHtz8pM3YOogBBRrUirGRVgl47LkSzUMfc7JPbiZbdEBw66TknQo16Vda15lvph72M9FzdAWwZQ",
    card_title: "Veet Hair Removal Cream",
    price: "299",
    off_price: "269",
    offer: "10",
    rating: "4.3",
    category: "Hair_Removal_Tools",
  },
  {
    id: 9,
    image1:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHwcx29dJQeDYJB1UpDWyS0fpkMw96x4MDD8ZZB08z5X_cN6htXhp-JXh8ETgDhZc6MF-3C0_ECKe7dgQq5PP2qeNSzUhmFg&usqp=CAE",
    card_title: "Panasonic Body Massager",
    price: "2999",
    off_price: "2699",
    offer: "10",
    rating: "4.6",
    category: "Massage_Tools",
  },
  {
    id: 10,
    image1:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3sbsYHmKzr_LJJu2saG5otlXsy47tqDBxFy-u44KvHO99pK9aAt5L5Fj4h_2zoGvsSGjf3QzuDOh4D2WepUAFfQm8azn7P6rjCg76Bs0&usqp=CAE",
    card_title: "Omron Back Massager",
    price: "1999",
    off_price: "1799",
    offer: "10",
    rating: "4.4",
    category: "Massage_Tools",
  },
  {
    id: 11,
    image1:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8OCqAItgkhLXzTLz4052U1jmyKkZuxA-7lgrfpe67Z1gniI5nfVSPDc-ruduzLdBqS8sAsbr-x9qhQ8pfYtyLBre2Z8INxvX2u2r--uwd3ftb_N4c6h1q&usqp=CAE",
    card_title: "Philips Hair Straightener",
    price: "2299",
    off_price: "1999",
    offer: "13",
    rating: "4.6",
    category: "Hair_Styling_Tools",
  },
];

function addNewProducts(product) {
  if (!product || !product.id) {
    console.error("Invalid product object:", product);
    return;
  }

  // Retrieve existing products from localStorage
  let existingProducts = JSON.parse(localStorage.getItem("nykaaProduct")) || [];

  // Check if the product is already in the localStorage
  const productExists = existingProducts.some((p) => p && p.id === product.id);

  if (!productExists) {
    // Add the new product to the list
    existingProducts.push(product);
    // Store the updated list in localStorage
    localStorage.setItem("nykaaProduct", JSON.stringify(existingProducts));
    let redirect = window.confirm(
      "Product added to bag, if you click 'Okay'you will be redirected to Bag"
    );
    if (redirect) location.href = "./bag/bag.html";
  } else {
    let redirect = window.confirm(
      "Product is already in the bag, if you click 'Okay'you will be redirected to Bag"
    );
    if (redirect) location.href = "./bag/bag.html";
  }
}

function showProduct() {
  var data = newProducts;
  console.log(data);
  append(data);
}
function append(data) {
  let dis = document.getElementById("PRODUCT");
  let cards = "";

  data.forEach((el) => {
    let rating;
    if (el.rating > 4) {
      rating = "&#9733;&#9733;&#9733;&#9733;&#9733;";
    } else if (el.rating > 3) {
      rating = "&#9733;&#9733;&#9733;&#9733;&#9734;";
    } else {
      rating = "&#9733;&#9733;&#9733;&#9734;&#9734;";
    }

    cards += `
        <div class="card" data-id="${el.id}">
            <h6 id="G-five">BEST SELLER</h6>
            <div id="G-img">
                <img src="${el.image1}" alt="${el.id}">
                <h6 id="G-des">${el.card_title}</h6>
            </div>
            <div id="Price-Div">
                <h6 id="price">MRP: <span id="ear">₹${el.price}</span>
                <span id="G-real"> ₹${el.off_price}</span>
                <span id="G-OFF"> ${el.offer}% Off</span></h6>
            </div>
            <h4 id="rating">${rating}</h4>
            <div id="addToBag">
                <div id="hert"><span id="heart">&#x2661;</span></div>
                <div id="add">
                    <div class="addToBagBtn">
                        <h5>Add to Bag</h5>
                    </div>
                </div>
            </div>
        </div>`;
  });

  dis.innerHTML = cards;

  // Add event listeners to each card's "Add to Bag" button
  let addToBagButtons = document.querySelectorAll(".addToBagBtn");
  addToBagButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      // Find the product associated with this button
      const cardElement = this.closest(".card");
      const productId = cardElement.getAttribute("data-id");
      const product = data.find((p) => p && p.id == productId);

      if (product) {
        addNewProducts(product);
      } else {
        console.error("Product not found:", productId);
      }
    });
  });

  // Add event listeners to each card for other interactions
  var classSeparate = document.querySelectorAll(".card");
  classSeparate.forEach((card) => {
    card.addEventListener("click", function () {
      xxxyyy(this);
      console.log(this, "inside fun");
    });
  });
}

showProduct();
