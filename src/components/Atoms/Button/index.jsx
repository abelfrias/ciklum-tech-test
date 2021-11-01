import { h } from 'preact';
import style from './style.scss';

const Button = (props) => (
    <div class={`${props.class ? `${props.class} ` : ''}${style.button}`}>
        {props.text}
    </div>
);

export default Button;
