var path = require("path");

/**
 * PUT /coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves/5ad0e9c4-586c-4365-a55b-f2042677d606
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * content-length: 2516
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: text/plain
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/cf3e8181-67c3-4653-9eec-db2c54ed49f5/b5d06488-418f-4c65-a440-4f2613619e6d/5ad0e9c4-586c-4365-a55b-f2042677d606/7212ba6a-8dcf-45a1-be9a-ffaa847c4423/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("date", "Wed, 22 Jul 2020 13:39:32 GMT");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "PUT mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves/5ad0e9c4-586c-4365-a55b-f2042677d606 : 202 6878us, PUT mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/courselistings/cf3e8181-67c3-4653-9eec-db2c54ed49f5/reserves/5ad0e9c4-586c-4365-a55b-f2042677d606 : 204 67895us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
