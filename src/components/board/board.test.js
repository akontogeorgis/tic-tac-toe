import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Board from './board.js'

describe('Test the Square component', () => {

    it("renders correctly", () => {

        const wrapper = shallow(
            <Board square={0} />
        );
        expect(wrapper.exists()).toEqual(true);
    });


});