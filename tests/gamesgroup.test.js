import { h } from 'preact';
import { shallow } from 'enzyme';

import GamesGroup from '../src/components/Organisms/GamesGroup';

describe('Tests for GamesGroup', () => {
    test('When passing no games, it is shown with empty data', () => {
        const context = shallow(<GamesGroup />);
        expect(context.find('section').children()).toHaveLength(0);
    });

    test('When passing N games, it is shown with N data', () => {
        const context = shallow(<GamesGroup games={[
            {
                name: 'Test Name',
                supplier: 'Test Supplier',
                stake: 0.20,
                thumbnailUrl: 'testUrl'
            }
        ]}/>);
        expect(context.find('section').children()).toHaveLength(1);
    });

    test("Adding classes keeps the component's native one(s)", () => {
        const context = shallow(<GamesGroup class="testClass"/>);
        expect(context.find('section').hasClass('testClass')).toBe(true);
        expect(context.find('section').hasClass('gamesGroup')).toBe(true);
    });
});