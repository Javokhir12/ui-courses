var path = require("path");

/**
 * DELETE /coursereserves/coursetypes/374ca974-386a-4192-9bf8-0e84f8d1afec
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: text/plain
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTg2NiwidGVuYW50IjoiZGlrdSJ9.bsovF9Zun5yyT1F9VfaKl3XM6gN4pAGMkUcoZgY65Lg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/coursetypes
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("date", "Fri, 24 Jul 2020 16:58:15 GMT");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "DELETE mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/coursetypes/374ca974-386a-4192-9bf8-0e84f8d1afec : 202 6710us, DELETE mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/coursetypes/374ca974-386a-4192-9bf8-0e84f8d1afec : 204 2134us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
