import { makeFortyNinersSF, isUnderdogOutrightWinner } from "./NflCard";

test("makeFortyNinersSF", () => {
  expect(makeFortyNinersSF("49ers")).toEqual("SF");
  expect(makeFortyNinersSF("Cowboys")).toEqual("Cowboys");
  expect(makeFortyNinersSF("Buccaneers")).toEqual("Buccaneers");
  expect(makeFortyNinersSF("Titans")).toEqual("Titans");
  expect(makeFortyNinersSF("Team")).toEqual("Team");
  expect(makeFortyNinersSF("Bears")).not.toEqual("SF");
});

test("isUnderdogOutrightWinner", () => {
  expect(isUnderdogOutrightWinner("Team", "22", "34", "Team")).toEqual(true);
  expect(isUnderdogOutrightWinner("Jets", "21", "19", "Cowboys")).toEqual(true);
  expect(isUnderdogOutrightWinner("Dolphins", "31", "32", "Dolphins")).toEqual(true);
  expect(isUnderdogOutrightWinner("SF", "28", "22", "Rams")).toEqual(true);
  expect(isUnderdogOutrightWinner("SF", "21", "28", "SF")).toEqual(true);

  expect(isUnderdogOutrightWinner("Cheifs", "17", "17", "Vikings")).toEqual(false);
  expect(isUnderdogOutrightWinner("Rams", "28", "21", "Rams")).toEqual(false);
  expect(isUnderdogOutrightWinner("Titans", "23", "28", "Saints")).toEqual(false);
  expect(isUnderdogOutrightWinner("SF", "24.8", "22.3", "SF")).toEqual(false);
  expect(isUnderdogOutrightWinner("Cowboys", "28", "32", "SF")).toEqual(false);
});
