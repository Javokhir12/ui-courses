var path = require("path");

/**
 * DELETE /coursereserves/processingstatuses/c404922c-46e1-4e53-ba6f-3368d06ec802
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: text/plain
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjQxNCwidGVuYW50IjoiZGlrdSJ9.dRZZ4jECumVbaAR_RPDTwXgKKYQxYObvmLalfeGytGY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/processingstatuses
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("date", "Fri, 12 Feb 2021 17:54:51 GMT");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "DELETE mod-authtoken-2.7.0-SNAPSHOT.81 http://10.36.1.253:9134/coursereserves/processingstatuses/c404922c-46e1-4e53-ba6f-3368d06ec802 : 202 12926us, DELETE mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/processingstatuses/c404922c-46e1-4e53-ba6f-3368d06ec802 : 204 2431us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
