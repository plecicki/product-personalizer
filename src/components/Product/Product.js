import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import {useState} from "react";
import ProductForm from "../ProductForm/ProductForm";

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const getPrice = (basePrice, additionalPrice) => basePrice+additionalPrice;

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(props.basePrice, currentSize.additionalPrice)}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          colors={props.colors}
          getPrice={getPrice}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          title={props.title}
          basePrice={props.basePrice}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  props: PropTypes.func.isRequired,
}

export default Product;