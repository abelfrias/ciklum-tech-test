import { h } from 'preact';
import { useState } from 'preact/hooks';

import style from './style.scss';

const RadioButton = (props) => {
    const [checked, setChecked] = useState(props.checked || false);

    return (
        <label class={style.radioButton}>
            <input type="radio" name={props.name} checked={checked}/>
            <span>{props.label}</span>
        </label>
    );
};

export default RadioButton;
