var path = require("path");

/**
 * PUT /coursereserves/processingstatuses/1585a99d-0b46-48b3-9a32-4050f1039a61
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 271
 * accept: text/plain
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTg2NiwidGVuYW50IjoiZGlrdSJ9.bsovF9Zun5yyT1F9VfaKl3XM6gN4pAGMkUcoZgY65Lg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("date", "Fri, 24 Jul 2020 16:58:38 GMT");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "PUT mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/processingstatuses/1585a99d-0b46-48b3-9a32-4050f1039a61 : 202 6282us, PUT mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/processingstatuses/1585a99d-0b46-48b3-9a32-4050f1039a61 : 204 3145us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
