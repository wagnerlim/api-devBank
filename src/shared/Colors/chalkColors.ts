export interface IHexColors {
  type: "HEX";
  green: Hex;
  blue: Hex;
  yellow: Hex;
  red: Hex;
}

export interface IRgbColors {
  type: "RGB";
  green: Rgb;
  blue: Rgb;
  yellow: Rgb;
  red: Rgb;
}

type Hex = `#${string}`;
type Rgb = {
  red: number;
  green: number;
  blue: number;
};

export default class chalkColors {
  protected colors: IHexColors | IRgbColors;

  protected SetColorsProps(colors: IHexColors | IRgbColors) {
    this.colors = colors;
  }

  protected get getColors(): IHexColors | IRgbColors {
    return this.colors;
  }

  constructor(colors: IHexColors | IRgbColors) {
    this.colors = colors;
  }
}
