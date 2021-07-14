import React from "react";
import "./styles.scss";
import ShopMan from "../../assets/images/shopping_men.jpg";
import ShopWoman from "../../assets/images/shoping_woman.jpg";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="container-fluid">
        {/* <div className="col-sm-12"> */}
          <div className="row">
            <div className="col-md-6 col-sm-12 img"
            style={{backgroundImage: `url(${ShopMan})`}}>
              <a>
                  Shop Man
              </a>
            </div>
            <div className="col-md-6 col-sm-12 img"
             style={{backgroundImage: `url(${ShopWoman})`}}>
                <a>
                  Shop Woman
              </a>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Directory;
