import {
  changeTeamDisplayName,
  handleNameOutliers,
  isUnderdogOutrightWinner,
} from "./GameCard";

test("Change 49ers to SF and T-Wolves to Timberwolves", () => {
  expect(handleNameOutliers("49ers")).toEqual("SF");
  expect(handleNameOutliers("T-Wolves")).toEqual("Timberwolves");
  expect(handleNameOutliers("Buccaneers")).toEqual("Buccaneers");
  expect(handleNameOutliers("Titans")).toEqual("Titans");
  expect(handleNameOutliers("Team")).toEqual("Team");

  expect(handleNameOutliers("Bears")).not.toEqual("SF");
  expect(handleNameOutliers("Timberwolves")).not.toEqual("T-Wolves");
  expect(handleNameOutliers("Celtics")).not.toEqual("T-Wolves");
  expect(handleNameOutliers("Sixers")).not.toEqual("T-Wolves");
  expect(handleNameOutliers("Suns")).not.toEqual("T-Wolves");
  expect(handleNameOutliers("Spurs")).not.toEqual("T-Wolves");
  expect(handleNameOutliers("Knicks")).not.toEqual("T-Wolves");
});

test("Shorten Timberwolves display name to T-Wolves", () => {
  expect(changeTeamDisplayName("Timberwolves")).toEqual("T-Wolves");
  expect(changeTeamDisplayName("49ers")).toEqual("49ers");
  expect(changeTeamDisplayName("Cowboys")).toEqual("Cowboys");
  expect(changeTeamDisplayName("Buccaneers")).toEqual("Buccaneers");
  expect(changeTeamDisplayName("Titans")).toEqual("Titans");
  expect(changeTeamDisplayName("Team")).toEqual("Team");

  expect(changeTeamDisplayName("Timberwolves")).not.toEqual("SF");
  expect(changeTeamDisplayName("SF")).not.toEqual("Timberwolves");
  expect(changeTeamDisplayName("Bears")).not.toEqual("SF");
  expect(changeTeamDisplayName("Celtics")).not.toEqual("T-Wolves");
  expect(changeTeamDisplayName("Sixers")).not.toEqual("T-Wolves");
  expect(changeTeamDisplayName("Suns")).not.toEqual("T-Wolves");
  expect(changeTeamDisplayName("Spurs")).not.toEqual("T-Wolves");
  expect(changeTeamDisplayName("Knicks")).not.toEqual("T-Wolves");
});

test("Determin if the underdog is predicted to win the game straight up", () => {
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
