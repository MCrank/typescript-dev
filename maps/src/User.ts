import faker, { fake } from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
