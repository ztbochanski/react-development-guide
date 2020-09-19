const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0100/2101/1513/products/rain-paw-dog-raincoat-navynavy-2_2400x.jpg?v=1598062497",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "sweaters",
      imageUrl:
        "https://www.glamourmutt.com/assets/images/green-shamrocks-dog-sweater.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/sweaters",
    },
    {
      title: "hoodies",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/hoodies",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
