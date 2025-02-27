export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector("picture");
      if (pic) {
        const picWrapper = pic.closest("div");
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add("columns-img-col");
        }
      }

      const buttons = col.querySelectorAll(".button");
      buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          const parentElement = button.parentElement.parentElement;
          const productName =
            parentElement.querySelector("p:first-child").textContent;
          const productPrice =
            parentElement.querySelector("p:nth-child(2").textContent;

          const product = {
            name: productName,
            price: productPrice,
          };

          document.product = product;

          const addToBag = localStorage.getItem("addToBag") ?? [];

          localStorage.setItem("addToBag", [...addToBag, product]);
        });
      });
    });
  });
}
