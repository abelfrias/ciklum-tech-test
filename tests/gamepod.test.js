import { h } from 'preact';
import { shallow } from 'enzyme';

import GamePod from '../src/components/Molecules/GamePod';

describe('Tests for GamePod', () => {
    test('When passing no props, it is shown with empty data', () => {
        const context = shallow(<GamePod />);
        expect(context.find('.supplier').text()).toBe('');
        expect(context.find('.name').text()).toBe('');
        expect(context.find('.stake').text()).toBe('€ min. Stake');
    });

    test('When passing props, it is shown with specified data', () => {
        const context = shallow(<GamePod supplier='Test Supplier' name='Test Name' stake={0.2}/>);
        expect(context.find('.supplier').text()).toBe('Test Supplier');
        expect(context.find('.name').text()).toBe('Test Name');
        expect(context.find('.stake').text()).toBe('€0.20 min. Stake');
    });
});