var path = require("path");

/**
 * PUT /coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 501
 * accept: text/plain
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a/edit
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:40 GMT");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "PUT mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a : 202 6505us, PUT mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courses/6d973b67-b0ed-44df-a169-67b46365264a : 204 3228us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
