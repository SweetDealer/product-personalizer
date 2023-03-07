import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from "../OptionColor/OptionColor";
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = props => {

    
    return <div>
        <OptionSize sizes={props.sizes} action={props.changeSize} currentSize={props.currentSize} />
        <OptionColor colors={props.colors} currentColor={props.currentColor} action={props.changeColor} />
        <Button className={styles.button} action={(event) => props.addToCart(event)}>
            <span className="fa fa-shopping-cart" />
        </Button>
    </div>
}

ProductForm.propTypes = {
    sizes: PropTypes.array,
    colors: PropTypes.array,
    changeSize: PropTypes.func,
    changeColor: PropTypes.func,
    currentSize: PropTypes.string,
    currentColor: PropTypes.string,

};

export default ProductForm;