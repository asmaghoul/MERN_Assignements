import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashbord = () => {
  //1
  const [products, setProducts] = useState([]);

  //2
  function refrech() {
    axios
      .get("http://127.0.0.1:7000/api/product/")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    refrech();
  }, []);

  return (
    <div>
      <h1>ALL Products</h1>
      {products.map((onePt, idp) => {
        return (
          <div key={idp}>
            <ul>
              <li>
                <Link to={"/product/" + onePt._id}>{onePt.productTitle}</Link>
              </li>
            </ul>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Dashbord;
