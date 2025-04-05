import PropTypes from 'prop-types';
import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";

const ProductForm = props => {

  const showOrderSummary = () => {
    console.log('Summary');
    console.log('=================');
    console.log('Name:', props.title);
    console.log('Price:', props.getPrice(props.basePrice, props.currentSize.additionalPrice));
    console.log('Size:', props.currentSize.name);
    console.log('Color:', props.currentColor);
  }

  return (
    <form>
      <OptionSize
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
      />
      <OptionColor
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
      />
      <Button className={styles.button} action={showOrderSummary}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

ProductForm.propTypes = {
  props: PropTypes.func.isRequired,
}

export default ProductForm;