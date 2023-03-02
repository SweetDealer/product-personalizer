import styles from './Product.module.scss';


import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  
  const changeColor = (color) => {
    setCurrentColor(color)
  }
  const changeSize = (size) => {
    setCurrentSize(size)
  }
 
  const getPrice = () => {
    for (const size of props.sizes) {
      if (size.name === currentSize) {
        return props.basePrice + size.additionalPrice
      }
    }
  }

  const addToCart = (event) => {
    event.preventDefault()
    const product = {};
    product.title = props.title;
    product.size = currentSize;
    product.color = currentColor;
    product.price = getPrice();
    console.log(product);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} color={currentColor} name={props.name} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm colors={props.colors} currentColor={currentColor} currentSize={currentSize} changeColor={changeColor} addToCart={addToCart} changeSize={changeSize} sizes={props.sizes} />
      </div>
    </article>
  )
};

export default Product;