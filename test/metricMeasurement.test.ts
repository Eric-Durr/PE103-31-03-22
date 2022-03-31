import { expect } from 'chai';
import { describe, it } from 'mocha';
import { MetricLength } from '../src/metricLength.class';

describe('Metric Length measurement library', () => {
  const lMeasures: MetricLength = new MetricLength();
  it('Default length object can be created', () => {
    expect(lMeasures.cm).to.be.eq(0);
    expect(lMeasures.m).to.be.eq(0);
    expect(lMeasures.km).to.be.eq(0);
  });
  it('Length cm value can be updated', () => {
    lMeasures.cm = 1;
  });
  it('Length cm value can be readed', () => {
    expect(lMeasures.cm).to.be.eq(1);
  });
  it('Length m value can be updated', () => {
    lMeasures.m = 1;
  });
  it('Length m value can be readed', () => {
    expect(lMeasures.m).to.be.eq(1);
    expect(lMeasures.cm).to.be.eq(100);
  });
  it('Length km value can be updated', () => {
    lMeasures.km = 1;
  });
  it('Length km value can be readed', () => {
    const cmVal: number = lMeasures.cm;
    const msVal: number = lMeasures.m;
    const kmVal: number = lMeasures.km;
    expect(kmVal).to.be.eq(1);
    expect(cmVal).to.be.eq(100000);
    expect(msVal).to.be.eq(1000);
  });
  it('Length object can be turned to string', () => {
    expect(lMeasures.toString()).to.be.eq('1 kilometer\n1000 meters\n100000 centimeters');
  });
});
