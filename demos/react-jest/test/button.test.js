import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Button from './../src/index';

const setup = () => {
  const onClick = jest.fn(() => {});
  const count = 10;

  const wrapper = shallow(<Button count={count} onClick={onClick} />);
  return {
    props: {
      count,
      onClick,
    },
    wrapper,
  };
};

describe('+1 Component', () => {
  const { wrapper, props } = setup();

  it('Component should render', () => {
    expect(wrapper.find('.plus-container').exists());
  });

  it('Button should render', () => {
    expect(wrapper.find('.plus-button').exists());
  });

  it('Button text should be +1s', () => {
    expect(wrapper.find('.plus-button').text()).toBe(' +1s');
  });

  it('Count should render', () => {
    expect(wrapper.find('.plus-count').exists());
  });

  test('Component should render correctly', () => {
    const mounted = mount(<Button count={ 1 } onClick={() => {}} />)
    expect(mounted).toMatchSnapshot();
  });

  it('Count text should be 10s', () => {
    expect(wrapper.find('.plus-count').text()).toBe('10s');
  });

  it('Button should be click', () => {
    wrapper.find('.plus-button').simulate('click');
    expect(wrapper.find('.plus-count').text()).toBe('11s');
  });
});

