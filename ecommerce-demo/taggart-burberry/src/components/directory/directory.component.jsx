import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "",
        },
        {
          title: "jackets",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0100/2101/1513/products/rain-paw-dog-raincoat-navynavy-2_2400x.jpg?v=1598062497",
          id: 2,
          linkUrl: "",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "",
        },
        {
          title: "sweaters",
          imageUrl:
            "https://www.glamourmutt.com/assets/images/green-shamrocks-dog-sweater.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "hoodies",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
