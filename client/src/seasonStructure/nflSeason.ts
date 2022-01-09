export const years: string[] = ["2021", "2022", "2023"];

export const weeks: string[] = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
  "10",
  "11",
  "12",
//   "13",
//   "14",
//   "15",
//   "16",
//   "17",
//   "18",
//   "Wild Card Playoffs",
//   "Divisional Playoffs",
//   "Conference Championships",
//   "Super Bowl",
];

export const getCurrentNflWeek = async () => {
	try {
		const response = await fetch(
		"http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard",
		{ method: "GET" }
		);
		const { week } = await response.json();
		return String(week.number);
	} catch (error) {
		console.log(error);
	}
};