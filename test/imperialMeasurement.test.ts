import { expect } from 'chai';
import { describe, it } from 'mocha';
import { ImperialLenght } from '../src/imperialLength.class';
// import { ImperialMass } from '../src/imperialLenght.class';

describe('Imperial Length measurement library', () => {
  const lMeasures: ImperialLenght = new ImperialLenght();
  it('Default length object can be created', () => {
    expect(lMeasures.feet).to.be.eq(0);
    expect(lMeasures.yards).to.be.eq(0);
    expect(lMeasures.miles).to.be.eq(0);
  });
  it('Length feet value can be updated', () => {
    lMeasures.feet = 1;
  });
  it('Length feet value can be readed', () => {
    expect(lMeasures.feet).to.be.eq(1);
  });
  it('Length yard value can be updated', () => {
    lMeasures.yards = 1;
  });
  it('Length yard value can be readed', () => {
    expect(lMeasures.yards).to.be.eq(1);
    expect(lMeasures.feet).to.be.eq(3);
  });
  it('Length miles value can be updated', () => {
    lMeasures.miles = 1;
  });
  it('Length miles value can be readed', () => {
    const feetVal: number = lMeasures.feet;
    const yardsVal: number = lMeasures.yards;
    const milesVal: number = lMeasures.miles;
    expect(milesVal).to.be.eq(1);
    expect(feetVal).to.be.eq(5280);
    expect(yardsVal).to.be.eq(1760);
  });
  it('Length object can be turned to string', () => {
    expect(lMeasures.toString()).to.be.eq('1 mile\n1760 yards\n5280 feet');
  });
});
