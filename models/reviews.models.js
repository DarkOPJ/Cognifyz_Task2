const reviews = [
  {
    id: "d0bd7266-8fea-40e2-9341-61e27f690f9c",
    name: "Daniel Roberts",
    rating: "2",
    description:
      "I was a bit disappointed. I found a deal on a gaming headset, but when I tried to check out, the item was out of stock. It would be great if stock levels were updated in real-time.",
  },
  {
    id: "d0bd7266-8fea-40e2-9341-61e27f690f9e",
    name: "Emily Watson",
    rating: "5",
    description:
      "This site is a lifesaver! As a student on a tight budget, finding reduced prices on everyday essentials has been a blessing. The navigation is smooth, and the variety of products is impressive. Highly recommended!",
  },
];

const getReviewsList = () => reviews.slice(-3).reverse();

module.exports = {
  reviews,
  getReviewsList,
};
