const express = require("express");
const app = express();
const port = 3001;

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name || "";
  const track = req.query.track || "";

  const current_day = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  // Get the current UTC time in ISO 8601 format
  const utc_time = new Date().toISOString();

  // Format the UTC time to match your desired format "2023-08-21T15:04:05Z"
  const formatted_utc_time = utc_time.slice(0, -5) + "Z";

  const github_file_url =
    "https://github.com/Nogist/simple-Api/blob/main/index.js";
  const github_repo_url = "https://github.com/Nogist/simple-Api";

  const response = {
    slack_name,
    current_day,
    utc_time: formatted_utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code: 200,
  };

  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
