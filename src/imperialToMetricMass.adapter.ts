import { ImperialLenght } from './imperialLength.class';
import { MetricLength } from './metricLength.class';

export class ImperialToMetricLength extends MetricLength {
  private system: ImperialLenght;

  constructor(system: ImperialLenght) {
    super();
    this.system = system;
  }

  get cm(): number { return Math.round(this.system.feet * 0.3937); }

  get m(): number { return Math.round(this.system.feet / 3.28084); }

  get km(): number { return Math.round(this.system.feet / 3280.84); }

  public toString(): string {
    return `${this.km} kilometer${this.km === 1 ? '' : 's'}\n`
         + `${this.m} meter${this.m === 1 ? '' : 's'}\n`
         + `${this.cm} centimeter${this.cm === 1 ? '' : 's'}`;
  }
}
