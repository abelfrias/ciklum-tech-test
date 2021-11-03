import { h } from 'preact';
import { shallow } from 'enzyme';

import Button from '../src/components/Atoms/Button';

describe('Tests for Button', () => {
    test('Without children elements, it shows no text', () => {
        const context = shallow(<Button />);
        expect(context.text()).toBe('');
    });

    test("Adding classes keeps the button's one(s)", () => {
        const context = shallow(<Button class="testButton"/>);
        expect(context.find('div').hasClass('testButton')).toBe(true);
        expect(context.find('div').hasClass('button')).toBe(true);
    });

    test("Adding text as child makes the button show it", () => {
        const context = shallow(<Button>Test Text!</Button>);
        expect(context.text()).toBe('Test Text!');
    });

    test("Adding component as child makes the button show its text", () => {
        const context = shallow(<Button><span>Test Text!</span></Button>);
        expect(context.text()).toBe('Test Text!');
    });
});
