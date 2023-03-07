import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';

const OptionSize = props => {
    return <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
            {props.sizes.map(size => <li key={size.name}><button className={size.name === props.currentSize ? styles.active : ''} onClick={() => props.action(size.name)} type="button">{size.name}</button></li>)}
        </ul>
    </div>
}

OptionSize.propTypes = { sizes: PropTypes.array };

export default OptionSize;