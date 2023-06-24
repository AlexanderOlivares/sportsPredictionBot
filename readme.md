## Prediction Bot

View the [live site](https://predictionbot.lol)

#### About

The [Prediction bot](https://github.com/AlexanderOlivares/nfl-prediction-bot) python script scrapes computer-predicted scores from oddShark.com and dRatings.com and averages those scores for each matchup. It then makes a pick by analyzing the Vegas points spread and determining if the favored team will cover the spread

#### Why?

It started as a way to help me win my NFL pick'em fantasy league.

#### How does it work?

Cron jobs run my [prediction bot](https://github.com/AlexanderOlivares/nfl-prediction-bot) script weekly (for NFL) and daily (NBA) while in season. It then saves predictions to a Postgres database that this react app queries.

#### Technologies Used

- React / TypeScript
- Node
- Express
- PostgreSQL
- MUI
- Python
- Selenium
- Nginx
