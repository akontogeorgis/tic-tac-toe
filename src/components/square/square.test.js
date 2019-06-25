import React from 'react';
import {
	shallow, mount, expect, it, test, describe,
} from 'enzyme';
import Square from './square';

describe('Test the Square component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Square />);
		expect(wrapper.exists()).toEqual(true);
	});

	test('Test value of Square', () => {
		const wrapper = mount(<Square value={null} />);
		expect(wrapper.prop('value')).toEqual(null);
	});

	test('Test onClick of Square', () => {
		const wrapper = mount(<Square onClick={undefined} />);
		expect(wrapper.prop('onClick')).toEqual(undefined);
	});

	test('Test isWinnerSquare of Square', () => {
		const wrapper = mount(<Square isWinnerSquare={false} />);
		expect(wrapper.prop('isWinnerSquare')).toEqual(false);
	});

	test('Test className of Square when we have winner', () => {
		const wrapper = mount(<Square isWinnerSquare />);
		expect(wrapper.find('button').hasClass('highlight-winner')).toEqual(true);
	});

	test('Test className of Square when we do not have winner', () => {
		const wrapper = mount(<Square isWinnerSquare={false} />);
		expect(wrapper.find('button').hasClass('square')).toEqual(true);
	});
});


/*
it('should render correctly in "debug" mode', () => {
    const component = shallow(<MyComponent debug />);

    expect(component).toMatchSnapshot();
  });

test('Test value of Square', () => {
  const props = mount(<Square />).props;
  const value = props.value;
  expect(value).toEqual(null||'X'||'O')
});

test('Test onClick of Square', () => {
    const wrapper = mount(<Square />);
    expect(wrapper.props().onClick).toEqual(undefined)
  });
*/
