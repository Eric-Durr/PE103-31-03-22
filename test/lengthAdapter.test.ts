import { expect } from 'chai';
import { describe, it } from 'mocha';
import { ImperialLenght } from '../src/imperialLength.class';
import { ImperialToMetricLength } from '../src/imperialToMetricLength.adapter';

describe('Metric Length measurement library', () => {
  const imperial: ImperialLenght = new ImperialLenght(400000);
  const adapter: ImperialToMetricLength = new ImperialToMetricLength(imperial);
  it('Metric values can be readed', () => {
    expect(adapter.cm).to.be.eq(157480);
    expect(adapter.m).to.be.eq(121920);
    expect(adapter.km).to.be.eq(122);
  });

  it('Adapter can be turned to metric string', () => {
    expect(adapter.toString()).to.be.eq('122 kilometers\n121920 meters\n157480 centimeters');
  });
});
