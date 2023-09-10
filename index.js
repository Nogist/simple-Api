const express = require("express");
const app = express();
const port = 3001;

app.get("/api/info", (req, res) => {
  const slack_name = req.query.slack_name || "";
  const track = req.query.track || "";

  const current_day = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });
  const utc_time = new Date().toISOString();
  const github_file_url = "GitHub URL of the file being run";
  const github_repo_url = "GitHub URL of the full source code";

  const response = {
    slack_name,
    current_day,
    utc_time,
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
