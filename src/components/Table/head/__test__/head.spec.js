import React from 'react';
import { mount } from 'enzyme';
import Head from '../';

describe('<Head />', () => {
    it('should return an array of Header elements', () => {
        const columns = [
            { header: 'header' },
            { header: 'header-2' },
        ];
        const component = mount(<Head columns={columns} />);
        const head = component.find('Header');

        expect(head.length).toBe(2);
        expect(head.get(0).props).toEqual({
            content: 'header',
            sortable: false,
            isSelected: false,
            sortDirection: 'asc',
            columnIndex: 0,
            onColumnSelect: expect.any(Function),
            onResize: expect.any(Function),
            width: 'unset',
        });
    });
    it('should return null if no columns is passed', () => {
        const component = mount(<Head />);
        expect(component.children().length).toBe(0);
    });
});
