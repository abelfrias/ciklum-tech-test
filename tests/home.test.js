import { h } from 'preact';
import { shallow } from 'enzyme';

import Home from '../src/components/Pages/Home';

describe('Tests for Home page', () => {
    test('When instantiating the page, 9 games must be shown', () => {
        const context = shallow(<Home />);
        const group = context.find('.gamesGroup');

        setTimeout(() => {
            const items = group.shallow().find('section').children();
            expect(items).toHaveLength(9);
        });
    });
});