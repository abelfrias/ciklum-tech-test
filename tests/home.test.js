import { h } from 'preact';
import { shallow } from 'enzyme';

import Dropdown from '../src/components/Atoms/Dropdown';
import GamePod from '../src/components/Molecules/GamePod';
import GamesGroup from '../src/components/Organisms/GamesGroup';
import Home from '../src/components/Pages/Home';
import RadioButton from '../src/components/Atoms/RadioButton';

describe('Tests for Home page', () => {
    test('When instantiating the page, 8 games must be shown', () => {
        // We use __mocks__/dataMock.js data
        const context = shallow(<Home />);
        const items = context.find(GamesGroup).shallow().find('section').children();

        expect(items).toHaveLength(8);
    });

    test("When sorting by name, the first item must be the 'Book of Crazy Chicken' with less stake (there are two games with this same display name)", () => {
        // We use __mocks__/dataMock.js data
        const context = shallow(<Home />);
        context.find(Dropdown).shallow().findWhere(n => (
            n.name() === 'RadioButton' && n.prop('value') === 'name')
        ).shallow().find('label').simulate('click');

        const item1 = context.find(GamesGroup).shallow().find(GamePod).at(0);
        const item2 = context.find(GamesGroup).shallow().find(GamePod).at(1);

        expect(item1.prop('name')).toBe('Book of Crazy Chicken');
        expect(item1.prop('stake')).toBe(0.3);

        expect(item2.prop('name')).toBe('Book of Crazy Chicken');
        expect(item2.prop('stake')).toBe(0.4);
    });

    test('When sorting by ascending stake, the first stake must be undefined, and the second one 0.1', () => {
        // We use __mocks__/dataMock.js data
        const context = shallow(<Home />);
        context.find(Dropdown).shallow().findWhere(n => (
            n.name() === 'RadioButton' && n.prop('value') === 'stakeAsc')
        ).shallow().find('label').simulate('click');

        const item1 = context.find(GamesGroup).shallow().find(GamePod).at(0);
        const item2 = context.find(GamesGroup).shallow().find(GamePod).at(1);

        expect(item1.prop('stake')).toBe(undefined);
        expect(item2.prop('stake')).toBe(0.1);
    });

    test('When sorting by descending stake, the first stake must be 0.6', () => {
        // We use __mocks__/dataMock.js data
        const context = shallow(<Home />);
        context.find(Dropdown).shallow().findWhere(n => (
            n.name() === 'RadioButton' && n.prop('value') === 'stakeDesc')
        ).shallow().find('label').simulate('click');

        const item = context.find(GamesGroup).shallow().find(GamePod).at(0);

        expect(item.prop('stake')).toBe(0.6);
    });
});