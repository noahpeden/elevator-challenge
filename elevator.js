const Person = require('./person').default
const person = new Person("name", 2)
export default class Elevator {
  constructor() {
    this.state = {
      startingFloor: 0,
      currentFloor: 0,
      stops: 0,
      totalFloorsTraversed: 0,
      status: 'idle',
    }
  }

  requestFloor(name, targetFloor){
    this.pickUpPerson(name)
    this.goToTargetFloor(targetFloor)
    this.state.status = 'idle'
  }

  pickUpPerson(name){
    this.state.status = 'moving'
    this.state.currentFloor = person.state.currentFloor
    this.state.stops += 1
    this.state.totalFloorsTraversed += person.state.currentFloor
  }

  difference(a,b){
    return Math.abs(a - b)
  }

  goToTargetFloor(targetFloor){
    this.state.stops += 1
    this.state.totalFloorsTraversed += this.difference(this.state.currentFloor, targetFloor)
    this.state.currentFloor = targetFloor
  }



  reset() {
    this.constructor()
  }
}
