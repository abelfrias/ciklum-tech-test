import { h } from 'preact';
import { useState } from 'preact/hooks';

import caretIcon from '../../../assets/icons/caret.svg';
import style from './style.scss';

const Dropdown = (props) => {
    const [open, setOpen] = useState(false);

    const generateClassProp = () => {
        const classProp = {
            class: style.checkboxDropdown,
        };

        if (open) {
            classProp.class += ` ${style.open}`;
        }

        return classProp;
    };

    return (
        <div {...generateClassProp()}>
            <div class={style.selection}  onclick={() => setOpen(!open)}>
                <img src={caretIcon} alt="Caret"/>
                <strong>{props.title}</strong>
            </div>
            <div class={style.menu}>
                asd
            </div>
        </div>
    )
};

export default Dropdown;
