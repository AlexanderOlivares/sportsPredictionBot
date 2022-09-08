export const seasons: string[] = ["2021-2022", "2022-2023"]; // add "2023" 

export const weeks: string[] = [
  "pre_season_week_1",
  "pre_season_week_2",
  "pre_season_week_3",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "wild_card_playoffs",
  "divisional_playoffs",
  "conference_championships",
  "super_bowl",
];

export const getCurrentNflWeek = async () => {
	try {
		const response = await fetch(
		"https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard",
		{ method: "GET" }
		);
		const { week } = await response.json();
        console.log(`espn: ${week.number}`)
        if (week.number == undefined) return 0;
		return week.number + 2; 
	} catch (error) {
		console.log(error);
        return 0;
	}
};