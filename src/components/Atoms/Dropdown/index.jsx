import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

import RadioButton from '../../Atoms/RadioButton';
import style from './style.scss';

const Dropdown = (props) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState(null);
    const dropdownRef = useRef(null);

    const generateClassProp = () => {
        const classProp = {
            class: style.dropdown,
        };

        if (open) {
            classProp.class += ` ${style.open}`;
        }

        return classProp;
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    }

    const handleSelection = (value) => {
        setSelection(value)

        if (typeof props.onSelect === 'function') {
            props.onSelect(value)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div {...generateClassProp()} ref={dropdownRef}>
            <div class={style.selection}  onclick={() => setOpen(!open)}>
                <i class={`${style.caretIcon}`}>1</i>
                <span class={style.title}>{props.title || 'SELECT'}</span>
            </div>
            <div class={style.menu}>
                {
                    props.options?.map((option, index) => (
                        <RadioButton
                            class={style.option}
                            name={props.name}
                            label={option.label}
                            value={option.value}
                            checked={selection === option.value}
                            onSelect={() => handleSelection(option.value)}/>
                    ))
                }
            </div>
        </div>
    )
};

export default Dropdown;
