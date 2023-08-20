document.addEventListener("DOMContentLoaded", function () {
  const incrementButtons = document.querySelectorAll(".increment");
  const decrementButtons = document.querySelectorAll(".decrement");

  incrementButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const item = button.parentElement;
      const quantityElement = item.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
    });
  });

  decrementButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const item = button.parentElement;
      const quantityElement = item.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
      }
    });
  })
})
document.addEventListener("DOMContentLoaded", function () {
  const cart = document.querySelector(".item");

  cart.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("delete")) {
      const item = target.parentElement;
      item.remove();
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const cart = document.querySelector(".cart");

  cart.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("like")) {
      target.classList.toggle("liked");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cart = document.querySelector(".cart");
  const totalPriceElement = document.getElementById("totalPrice");

  cart.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("increment")) {
      const quantityElement = target.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
   
      quantityElement.textContent = quantity;
    } else if (target.classList.contains("decrement")) {
      const quantityElement = target.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
    
        quantityElement.textContent = quantity;
      }
    } else if (target.classList.contains("delete")) {
      const item = target.parentElement;
      item.remove();
    }

    updateTotalPrice();
  });

  function updateTotalPrice() {
    const items = document.querySelectorAll(".item");
    let total = 0;

    items.forEach((item) => {
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      const price = parseFloat(item.querySelector(".price").textContent.slice(1)); // Removing the dollar sign

      total += quantity * price;
    });

    totalPriceElement.textContent = "$" + total.toFixed(2);
  }
});
