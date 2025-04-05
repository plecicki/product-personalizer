import PropTypes from 'prop-types';
import styles from "./OptionSize.module.scss";

const OptionSize = props => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size =>
          <li>
            <button type="button" className={size === props.currentSize && styles.active} onClick={() => props.setCurrentSize(size)}>
              {size.name}
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

OptionSize.propTypes = {
  props: PropTypes.func.isRequired,
}

export default OptionSize;