export class MetricLength {
  private _cm: number;

  constructor(cm: number = 0) {
    this._cm = cm;
  }

  get cm(): number { return this._cm; }

  set cm(value: number) { this._cm = value; }

  get m(): number { return Math.round(this.cm / 100); }

  set m(value: number) { this.cm = (value * 100); }

  get km(): number { return Math.round(this.cm / 100000); }

  set km(value: number) { this.cm = (value * 100000); }

  public toString(): string {
    return `${this.km} kilometer${this.km === 1 ? '' : 's'}\n`
         + `${this.m} meter${this.m === 1 ? '' : 's'}\n`
         + `${this.cm} centimeter${this.cm === 1 ? '' : 's'}`;
  }
}
