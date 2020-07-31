var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/terms.. : 202 35321us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/terms.. : 200 1938us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTu07DMBSG9z6FlZUeZB/f6swMLCyoG2I4jh0RqWlRYgZU9d1xUkKllArUerDk8/vz5ZO9XzBWpNi1fcFK9sL2eZwrTRiGBZF2FOoaXEQPysoAq1wAj15z45XVhMXyiGypjSP02Gyo+2TIkU9Zn6hLD5SOE4YEuADhpjxuwyyVINSUtjFRoERDfDxfLlZdzMQcsyDFmstS6lLpe6HtHc/te6FMfbyH/1MjdMj9YTnzUjsrEJ0C5NKCUrWFFTcGUBiKTvMKTXXmZd012yb9LSavai6LyZvwm8Ug6ivE/FCXxVRBRG9jALT5HsobAjcoCrYWpKUWtfFnYp6a6o3ipqU+uzk9irkb4UBwEPJ3N0OK+cS3u5HmGjcTdXLDXpfj59ol2jzHateF8Y/JxeELAAD//wMADbXF43UDAAA=", "base64"));
  res.end();

  return __filename;
};
