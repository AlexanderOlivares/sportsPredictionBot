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

  expect(isUnderdogOutrightWinner("Cheifs", "17", "17", "Vikings")).toEqual(false);
  expect(isUnderdogOutrightWinner("Rams", "28", "21", "Rams")).toEqual(false);
  expect(isUnderdogOutrightWinner("Titans", "23", "28", "Saints")).toEqual(false);
});
