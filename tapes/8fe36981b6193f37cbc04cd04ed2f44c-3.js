var path = require("path");

/**
 * GET /coursereserves/terms?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/09427a84-6777-487d-bdb3-75235f4012de/edit?nreserves=0
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/terms.. : 202 7018us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/terms.. : 200 4043us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTu07DMBSG9z6FlZUeZB/f6swMLCyoG2I4jh0RqWlRYgZU9d1xUkKllArUerDk8/vz5ZO9XzBWpNi1fcFK9sL2eZwrTRiGBZF2FOoaXEQPysoAq1wAj15z45XVhMXyiGypjSP02Gyo+2TIkU9Zn6hLD5SOE4YEuADhpjxuwyyVINSUtjFRoERDfDxfLlZdzMQcsyDFmstS6lLpe6HtHc/te6FMfbyH/1MjdMj9YTnzUjsrEJ0C5NKCUrWFFTcGUBiKTvMKTXXmZd012yb9LSavai6LyZvwm8Ug6ivE/FCXxVRBRG9jALT5HsobAjcoCrYWpKUWtfFnYp6a6o3ipqU+uzk9irkb4UBwEPJ3N0OK+cS3u5HmGjcTdXLDXpfj59ol2jzHateF8Y/JxeELAAD//w==", "base64"));
  res.write(new Buffer("AwANtcXjdQMAAA==", "base64"));
  res.end();

  return __filename;
};
