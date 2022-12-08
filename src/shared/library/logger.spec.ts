import { createExpect, expect, test } from "vitest";
import Logger from "./Logger";

const Log = new Logger({
  type: "HEX",
  green: "#47F90A",
  blue: "#0742FC",
  yellow: "#FCE207",
  red: "#FC0707",
});

test("should be return expect colors in Hexadeciamal:", () => {
  Log.setColors({
    type: "HEX",
    green: "#FCE20C",
    blue: "#FCE20C",
    yellow: "#DDCE19",
    red: "#891B07",
  });
  expect(Log.getChalkColors).toEqual({
    type: "HEX",
    green: "#FCE20C",
    blue: "#FCE20C",
    yellow: "#DDCE19",
    red: "#891B07",
  });
});

test("should be log with expect colors in Rgb values:", () => {
  Log.setColors({
    type: "RGB",
    green: {
      r: 127,
      g: 238,
      b: 16,
    },
    blue: {
      r: 16,
      g: 90,
      b: 238,
    },
    yellow: {
      r: 244,
      g: 230,
      b: 10,
    },
    red: {
      r: 244,
      g: 10,
      b: 10,
    },
  });
  expect(Log.getChalkColors).toEqual({
    type: "RGB",
    green: {
      r: 127,
      g: 238,
      b: 16,
    },
    blue: {
      r: 16,
      g: 90,
      b: 238,
    },
    yellow: {
      r: 244,
      g: 230,
      b: 10,
    },
    red: {
      r: 244,
      g: 10,
      b: 10,
    },
  });
});
