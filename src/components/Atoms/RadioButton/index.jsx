import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import style from './style.scss';

const RadioButton = (props) => {
    const [checked, setChecked] = useState(props.checked || false);

    const handleClick = () => {
        setChecked(true)

        if (typeof props.onSelect === 'function') {
            props.onSelect()
        }
    }

    useEffect(() => {
        setChecked(props.checked);
    }, [props.checked]);

    return (
        <label
            class={`${props.class ? `${props.class} ` : ''}${style.radioButton}`}
            onclick={handleClick}>
            <input type="radio" name={props.name} value={props.value} checked={checked}/>
            <span>{props.label}</span>
        </label>
    );
};

export default RadioButton;
