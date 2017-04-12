require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const Elevator = require('../elevator').default
const Person = require('../person').default

describe('Elevator', function() {
  const elevator = new Elevator()
  const alex = new Person("Alex", 2)
  const bob = new Person("Bob", 3)
  const sue = new Person("Sue", 6)

  afterEach(function() {
    elevator.reset();
  });

  it('should bring a rider to a floor above their current floor', () => {
    elevator.requestFloor(alex, 5)
    assert.equal(elevator.state.currentFloor, 5)
    assert.equal(elevator.state.status, 'idle')
    assert.equal(elevator.state.stops, 2)
    assert.equal(elevator.state.totalFloorsTraversed, 5)
  });

  it('should bring a rider to a floor below their current floor', () => {
    elevator.requestFloor(alex, 0)
    assert.equal(elevator.state.currentFloor, 0)
    assert.equal(elevator.state.status, 'idle')
    assert.equal(elevator.state.stops, 2)
    assert.equal(elevator.state.totalFloorsTraversed, 4)
  });
  it('should bring riders in order to their destination floor in order requested, so first bob then sue', () => {
    elevator.requestFloor(bob, 9)
    assert.equal(elevator.state.currentFloor, 9)
    assert.equal(elevator.state.status, 'idle')
    assert.equal(elevator.state.stops, 2)
    assert.equal(elevator.state.totalFloorsTraversed, 9)
    elevator.requestFloor(sue, 2)
    assert.equal(elevator.state.currentFloor, 2)
    assert.equal(elevator.state.status, 'idle')
    assert.equal(elevator.state.stops, 4)
    assert.equal(elevator.state.totalFloorsTraversed, 11)
  });
});
