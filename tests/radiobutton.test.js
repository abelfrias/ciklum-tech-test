import { h } from 'preact';
import { shallow } from 'enzyme';

import RadioButton from '../src/components/Atoms/RadioButton';

describe('Tests for RadioButton', () => {
    test('Without passed label, shows no text', () => {
        const context = shallow(<RadioButton />);
        expect(context.find('label span').text()).toBe('');
    });

    test('When passing checked as truthy, the inner radio input is checked, too', () => {
        const context = shallow(<RadioButton checked={true}/>);
        expect(context.find('label input').prop('checked')).toBe(true);
    });

    test('When passing an onSelect callback function, clicking the element triggers it', () => {
        const onSelect = jest.fn();

        const context = shallow(<RadioButton onSelect={onSelect}/>);
        context.find('label').simulate('click');

        expect(onSelect).toHaveBeenCalled();
    });

    test('When not passing an onSelect callback function, the behavior is still correct', () => {
        const context = shallow(<RadioButton />);
        context.find('label').simulate('click');
        expect(context.find('label input').prop('checked')).toBe(true);
    });
});