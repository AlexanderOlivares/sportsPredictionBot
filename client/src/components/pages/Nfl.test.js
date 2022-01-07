import { displayTheWordWeek } from "./Nfl";

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
