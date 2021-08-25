const http = require("http");
const path = require("path");
const fs = require("fs");

const requestListener = async (req, res) => {
  const queryParams = req.url
    .substring(req.url.indexOf("?") + 1)
    .split("&")
    .reduce((acc, param) => {
      const [key, value] = param.split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});

  const userInput = (queryParams.text || "").replace(/\+/g, " ");
  if (userInput) console.log("Writing in HTML file", userInput);

  let html = await fs.readFileSync(path.normalize("./xss.html"), {
    encoding: "utf-8",
  });
  html = html.replace("{output}", userInput);

  res.writeHead(200);
  res.end(html);
};

const server = http.createServer(requestListener);
server.listen(3000);
console.log("Listening on http://localhost:3000");
