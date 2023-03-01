import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }
  const changeColor = (color) => {
    setCurrentColor(color)
  }
  const changeSize = (size) => {
    setCurrentSize(size)
  }
  // let price = props.basePrice
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
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name}><button className={size.name === currentSize ? styles.active : ''} onClick={() => changeSize(size.name)} type="button">{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li key={color}><button className={clsx(prepareColorClassName(color), color === currentColor ? styles.active : '')} onClick={() => changeColor(color)} type="button"></button></li>)}
            </ul>
          </div>
          <Button className={styles.button} action={(event) => addToCart(event)}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;