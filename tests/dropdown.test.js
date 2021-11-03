import { h } from 'preact';
import { shallow } from 'enzyme';

import Dropdown from '../src/components/Atoms/Dropdown';
import RadioButton from '../src/components/Atoms/RadioButton';

describe('Tests for Dropdown', () => {
    test('Without passed title, shows one by default in the selection field', () => {
        const context = shallow(<Dropdown />);
        expect(context.find('.selection strong').text()).toBe('SELECT');
    });

    test('With a title passed as prop, it shows it in the selection field', () => {
        const context = shallow(<Dropdown title="Some Test Title!" />);
        expect(context.find('.selection strong').text()).toBe('Some Test Title!');
    });

    test('Without passed options, no radio buttons are shown', () => {
        const context = shallow(<Dropdown />);
        expect(context.find('.menu').children()).toHaveLength(0);
    });

    test('With N passed options, N radio buttons are shown', () => {
        const context = shallow(<Dropdown options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' }
        ]}/>);
        expect(context.find('.menu').children()).toHaveLength(2);
    });

    test('When clicking the selection field, the dropdown menu opens', () => {
        const context = shallow(<Dropdown options={[
            { label: 'Option 1', value: 'option1' }
        ]}/>);
        const selection = context.find('.selection');

        expect(context.hasClass('open')).toBe(false);
        selection.simulate('click');
        expect(context.hasClass('open')).toBe(true);
    });

    test('When clicking on an option, that option is set as selected', () => {
        const context = shallow(<Dropdown options={[
            { label: 'Option 1', value: 'option1' }
        ]}/>);
        const option = context.find(RadioButton).shallow().find('label');
        option.simulate('click');
        expect(context.find(RadioButton).prop('checked')).toBe(true);
    });

    test('When passing an onSelect callback function, selecting an option triggers it', () => {
        const onSelect = jest.fn();

        const context = shallow(<Dropdown onSelect={onSelect} options={[
            { label: 'Option 1', value: 'option1' }
        ]}/>);
        const option = context.find(RadioButton).shallow().find('label');
        option.simulate('click');

        expect(onSelect).toHaveBeenCalled();
    });

    test('When unmounting the component, the existing event listener is removed', () => {
        const context = shallow(<Dropdown options={[
            { label: 'Option 1', value: 'option1' }
        ]}/>);

        const removeEventListener = jest.spyOn(global, 'removeEventListener').mockImplementation(() => {});
        context.unmount();
        setTimeout(() => expect(removeEventListener).toHaveBeenCalled());        
    });
});