--Heaviest Hitters: Displays 3 columns(team name, average_weight, yearid). This query shows the teams average weight.
SELECT 
    teams.name,
    ROUND(AVG(people.weight), 2) AS average_weight,
    batting.yearid
FROM teams 
INNER JOIN batting
    ON teams.id = batting.team_id
INNER JOIN people 
    ON batting.playerid = people.playerid
GROUP BY
    batting.yearid,
    teams.name
ORDER BY 2 DESC;

--Shortest Sluggers: Displays 3 columns(team name, average_height, yearid). This query shows the teams average height.
SELECT 
    teams.name,
    ROUND(AVG(people.height), 2) AS average_height,
    batting.yearid
FROM teams
INNER JOIN batting
    ON teams.id = batting.id
INNER JOIN people
    ON batting.playerid = people.playerid
WHERE people.height IS NOT NULL
GROUP BY batting.yearid,
    batting.yearid,
    teams.name
ORDER BY 2 DESC;