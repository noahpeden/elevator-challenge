export default class Person {
  constructor(name, currentFloor) {
    this.state = {
      name: name,
      currentFloor: currentFloor,
    }
  }

  goToDifferentFloor(targetFloor){
    this.state.currentFloor = targetFloor
  }
}
