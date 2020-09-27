class Vehicle {
  constructor(public color: string) {}

  // public drive(): void {
  //   console.log('chugga chugga');
  // }
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('silver');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vrooom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'blue');
car.startDrivingProcess();
