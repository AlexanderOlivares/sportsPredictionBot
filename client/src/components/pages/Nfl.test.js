import { displayTheWordWeek } from "./Nfl";
import { removeUnderscores } from "./Nfl";

test("displayTheWordWeek", () => {
  expect(displayTheWordWeek("18")).toEqual("Week");
  expect(displayTheWordWeek("1")).toEqual("Week");
  expect(displayTheWordWeek("12")).toEqual("Week");
  expect(displayTheWordWeek("02")).toEqual("Week");

  expect(displayTheWordWeek("Super Bowl")).toEqual("");
  expect(displayTheWordWeek("Divisional Playoffs")).toEqual("");
  expect(displayTheWordWeek("Wild Card Playoffs")).toEqual("");
  expect(displayTheWordWeek("Conference Championships")).toEqual("");
  expect(displayTheWordWeek("")).toEqual("");
});

test("removeUnderscores", () => {
  expect(removeUnderscores("18")).toEqual("18");
  expect(removeUnderscores("1")).toEqual("1");

  expect(removeUnderscores("super_bowl")).toEqual("Super Bowl");
  expect(removeUnderscores("divisional_playoffs")).toEqual("Divisional Playoffs");
  expect(removeUnderscores("wild_card_playoffs")).toEqual("Wild Card Playoffs");
  expect(removeUnderscores("conference_championships")).toEqual(
    "Conference Championships"
  );
});
