function myapp() {
  const buttons = document.querySelectorAll(".button");
  const cards = document.querySelectorAll(".card");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const currentCategory = button.dataset.filter;
      console.log(currentCategory);
      filter(currentCategory, cards);
    });
  });
}

myapp();
/*Меню*/
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("#menu-mobile")
    .addEventListener("click", function () {
      document.querySelector(".menu").classList.toggle("open");
    });
});

/*Читать далее*/
let more = document.querySelectorAll(".myBtn");
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].parentNode.classList.toggle("active");
  });
}


/*Корзина*/
let cart = {
  '1o111' :1,
  '1o112' :1,
}