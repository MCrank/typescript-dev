interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string; // Can also leverage functions in Interfaces
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Vehicle: ${vehicle.year}`);
  // console.log(`Broken? ${vehicle.broken}`);
};

printSummary(oldCivic);
printSummary(drinks);
