import React from 'react';
import TestRenderer from 'react-test-renderer';
import chai from 'chai';
import MyComponent from './../src/index';

const expect = chai.expect;

describe('+1s Component test by TestRenderer', function () {
  let testRenderer,
    testInstance;
  before(function(done) {
    testRenderer = TestRenderer.create(<MyComponent />);
    testInstance = testRenderer.root;
    done();
  });

  after(function(done) {
    testRenderer.unmount();
    done();
  });

  it('Component expect right type', function() {
    expect(testInstance.type).to.equal(MyComponent);
  });

  it('Component expect default props count equal 0', function() {
    expect(testInstance.instance.props.count).to.equal(0);
  });

  it('Component expect default props onClick is a function', function() {
    expect(testInstance.instance.props.onClick).to.be.a('function');
  });

  it('Component expect button onClick work well', function() {
    const btnTestInstance = testInstance.findByProps({ className: 'plus-button' });
    const countTestInstance = testInstance.findByProps({ className: 'plus-count' });
    btnTestInstance.props.onClick();
    expect(countTestInstance.children).to.eql(['1', 's']);
  });
})