var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYyNTM4NCwidGVuYW50IjoiZGlrdSJ9.t371K2r-2Rqkuyn5uSJLLpqqFdkL-VX0emGdhlU5pWI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 21:18:16 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/departments.. : 202 6329us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/departments.. : 200 3270us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPW/DIBCG9/wK5LUhOjB2sMeqHTJ06cdUdbjAObFkY2STIYry30tIo0qNIkUqwwkOnlfogcOMscySxzH05MKUsZp9skPsxn5rT8tMFGWplTC8EIa4sspwRKg4EEqxBqhAYTY/Iw57StBzTNyyN9OSMzRdti1NZmx9aAeXTq2c6Xa2dRu2oaEbNvs58xTGNGXoLPPYIQ0upM4lpaeAFgOeIs5XjU0zEgayT7GkaAkSOCy5VO+Q1wpqsVyUVfEAcfwERWrn7S1KilroWohFoW9Qj/uPicbV2ZLFvIJCNXxpFPGiROJrzA1vSijACIyyMEsBx1iP87+SG1MJIRU3ViJXTcQrJMUV5KW2Giot7ZXkFwxb6jG05g7D6yE+iN+NlMSi911LlkV6O/1frM7vF3tN/WphX6eELAwBu1cyw2jTl5Sz4zcAAAD//wMAJk+CMaoCAAA=", "base64"));
  res.end();

  return __filename;
};
