--Shortest Sluggers
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