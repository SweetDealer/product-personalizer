import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (<button className={clsx(styles.button, props.className)} onClick={props.action}>{props.children}</button>);
};

Button.propTypes = { props: PropTypes.object.isRequired };

export default Button;