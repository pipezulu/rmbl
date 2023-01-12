// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//https://docs.google.com/spreadsheets/d/15LPwi7q7v6BxvNqtFv6oZlCZP6rQQ_EU9Ya704X8wNY/edit?usp=sharing

export default function getEvetns(req, res) {
	var array = [];
	let shareCode = "1b92NcpkSSB1C4NnUbqHAW61ubT-d3QzlXggN-OZI9Eo"; //CODE from URL https://docs.google.com/spreadsheets/d/1b92NcpkSSB1C4NnUbqHAW61ubT-d3QzlXggN-OZI9Eo/edit#gid=0
	let API_KEY = "AIzaSyDjtyy3dlt4fCbx1p-zWIinokycevZJGUg";
	let sheetName = "MASTER";

	fetch(
		`https://sheets.googleapis.com/v4/spreadsheets/${shareCode}/values/${sheetName}?alt=json&key=${API_KEY}`
	)
		.then((response) => response.json())
		.then((data) => {
			for (var i = 1; i < data.values.length; i++) {
				array.push({
					eventName: data.values[i][0],
					positive: data.values[i][1],
					negative: data.values[i][2],
				});
			}

			res.send(JSON.stringify(array));
		});
}
