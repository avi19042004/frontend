import React, { useContext, useState, useEffect } from 'react';
import "./ProductDisplay.css";
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png'; // fixed typo in the icon import
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [index, setIndex] = useState(0); // Initialize with 0

  useEffect(() => {
    console.log('ProductDisplay mounted or updated', product);
  }, [product]);

  

  return (
    <div className='productdisplay'>
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-img-list">
          {product.images?.map((image, idx) => (
            <img key={idx} src={image} alt="" onClick={() => setIndex(idx)} />
          ))}
        </div>
        <div className="ProductDisplay-img">
          <img className='ProductDisplay-main-img' src={product.images?.[index]} alt="" />
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{product.name}</h1>
        <div className="ProductDisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" /> 
          <p>(120)</p>
        </div>
        <div className="ProductDisplay-right-price">
          <div className="ProductDisplay-right-price-old">${product.old_price}</div>
          <div className="ProductDisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="ProductDisplay-right-description">
          {product.short_description}
        </div>
        <div className="ProductDisplay-right-size">
          <h1>Select Size</h1>
          <div className="ProductDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <p className='ProductDisplay-right-category'><span>Category: </span>{product.category}</p> 
      </div>
    </div>
  );
}

export default ProductDisplay;
