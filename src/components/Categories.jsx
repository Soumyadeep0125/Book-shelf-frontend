import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  const handleClick = (idx) => {
    const selectedCategory = categories[idx].category;
    props.selectCategory(selectedCategory);
    console.log(selectedCategory);
  };

  useEffect(() => {
    fetch('http://localhost:8000/getAllCategories')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const categoryList = categories.map((category, idx) => (
    <div className="col-lg-4 col-md-6 pb-1" key={category._id}>
      <div className="cat-item d-flex flex-column border mb-4" style={{ padding: '30px' }}>
        <p className="text-right"></p>
        <Link
          to="/feed"
          className="cat-img position-relative overflow-hidden mb-3"
          style={{ paddingLeft: '30px' }}
        >
          {console.log(category.imageUrl)}
          <img
            className="img-fluid"
            src={`http://localhost:8000/${category.imageUrl}`}
            alt=""
            style={{ height: '300px' }}
            onClick={() => handleClick(idx)}
          />
        </Link>
        <h5 className="font-weight-semi-bold m-0">{category.category}</h5>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Categories</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">{categoryList}</div>
      </div>
    </div>
  );
};

export default Categories;

