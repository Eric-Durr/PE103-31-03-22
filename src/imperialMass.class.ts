export class ImperialLenght {
  private _feet: number;

  constructor(feet: number = 0) {
    this._feet = feet;
  }

  get feet(): number { return this._feet; }

  set feet(value: number) { this._feet = value; }

  get yards(): number { return Math.round(this.feet / 3); }

  set yards(value: number) { this.feet = (value * 3); }

  get miles(): number { return Math.round(this.feet / 5280); }

  set miles(value: number) { this.feet = (value * 5280); }

  public toString(): string {
    return `${this.miles} mile${this.miles === 1 ? '' : 's'}\n`
         + `${this.yards} yard${this.yards === 1 ? '' : 's'}\n`
         + `${this.feet} ${this.feet === 1 ? 'foot' : 'feet'}`;
  }
}
