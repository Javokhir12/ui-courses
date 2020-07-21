var path = require("path");

/**
 * GET /configurations/entries?query=(module=ORG and configName=localeSettings)
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * sec-fetch-dest: empty
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImI4YTNmODAxLThlN2MtNTQ4ZS1hYjAzLWIzNWIyZWRkOTI3NiIsImlhdCI6MTU5NTM0NzYyNiwidGVuYW50IjoiZGlrdSJ9.-uihzJ3z13aKlKLAfPZBEJUHDu45EdukssmOYhWKYpo
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: * / *
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 16:07:08 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.174:9178/configurations/entries.. : 202 12593us, GET mod-configuration-5.5.0-SNAPSHOT.76 http://10.36.1.174:9131/configurations/entries.. : 200 5466us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQSs7PS8tML1ayUojmAgAAAP//lJDPSsQwEMbfZa42mqZNk+1tZUG8rGDtQSjIJJmFYv9ITJW19N1Nt/sAOoeBGX7zfTMzQ+ughEKTKlDlTBd0YrncSYaWp8xqJ7XKlUA0kEA/uqmjyD89P8RyEzpiv7a60WJHFYXQDlE8ARrQdBTVg58ogS/sppWbmyvaQNlEiNVVA0kDoe3pZxy29r4n31q8O9L32+vo3y+EnbynwZ4vRF0dGljWnSigw4BQzmA9YSB3iCk6CS4444qJ9IVnpeSlULdFqm94jHX7Db4/15/kH9cvGI3ZScez4zcsk7kmhoZnzGTSCHJuJ1QRB6cP93eXK/xfl2X5BQAA//+K1QHFVUl+SWJOUGpyflEKKMIMdbgAAAAA//8=", "base64"));
  res.write(new Buffer("UlAqSi0uzSnxzEvLB4pUoykx1FFKS0xOLQEyo2N1lFIyE9Pz8otLMpPBArVctQAAAAD//wMA8XRd2wMCAAA=", "base64"));
  res.end();

  return __filename;
};
