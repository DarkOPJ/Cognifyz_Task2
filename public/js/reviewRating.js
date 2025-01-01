const stars = document.querySelectorAll(".rating-star");
const ratingInput = document.getElementById("rating");

stars.forEach((star1, idx1) => {
  star1.addEventListener("click", () => {
    stars.forEach((star2, idx2) => {
      if (idx1 >= idx2) {
        star2.classList.add("checked");
      } else {
        star2.classList.remove("checked");
      }
    });
    const rating = idx1 + 1;
    ratingInput.value = rating;
  });

  // Add hover events for a preview effect
  star1.addEventListener("mouseover", () => {
    stars.forEach((star2, idx2) => {
      idx2 <= idx1
        ? star2.classList.add("hovered")
        : star2.classList.remove("hovered");
    });
  });

  // Remove hover effect when the mouse leaves
  star1.addEventListener("mouseout", () => {
    stars.forEach((star2) => star2.classList.remove("hovered"));
  });
});
