
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import chai from 'chai';
import MyComponent from './../src/index';

const expect = chai.expect;
const renderer = new ShallowRenderer();
const result = renderer.render(<MyComponent />);
console.log(result);

describe('+1s Component test by ShadowRenderer', function () {
  const instance = renderer.getMountedInstance();

  it('Component expect right type', function() {
    expect(instance instanceof MyComponent).to.equal(true);
  });

  it('Component expect default props count equal 0', function() {
    expect(instance.props.count).to.equal(0);
  });

  it('Component expect default props onClick is a function', function() {
    expect(instance.props.onClick).to.be.a('function');
  });

  it('Component expect button onClick work well', function() {
    const btn = renderer.getRenderOutput().props.children[1];
    btn.props.onClick({});
    const count = renderer.getRenderOutput().props.children[0];
    expect(count.props.children).to.eql([1, 's']);
  });
});
