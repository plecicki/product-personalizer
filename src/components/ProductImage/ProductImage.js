import PropTypes from 'prop-types';
import styles from "./ProductImage.module.scss";

const ProductImage = props => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={props.title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
    </div>
  );
}

ProductImage.propTypes = {
  props: PropTypes.func.isRequired,
}

export default ProductImage;