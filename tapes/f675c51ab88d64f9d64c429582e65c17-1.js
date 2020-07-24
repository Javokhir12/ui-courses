var path = require("path");

/**
 * GET /configurations/entries?query=(module=ORG and configName=localeSettings)
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * accept: * / *
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:56:42 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/configurations/entries.. : 202 6736us, GET mod-configuration-5.5.0-SNAPSHOT.76 http://10.36.1.43:9131/configurations/entries.. : 200 5329us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//UlBQSs7PS8tML1ayUojmAgAAAP//lJDbSsRADIbfJbd2dDqHtvZOWRBvVrD2QhiQdCYLxR5knCpr6bs7s7sPoLkIJHz5/yQr9A5qEKorpdOKkescU6Q1q6SomC0q2Wkscl5ayGCc3TJQ5J+eH2J5FtrjmFrDbHGghkLopyieAU3YDRTVg18ogy8clsSt5oIaqE2EWNsYyAyEfqSfeTq370byvcWbPX2/vc7+/UTYxXua7PFEtM3OwJZ2ooAOA0K9gvWEgdwupnQUF5zxkgn1wmWtdZ2Lay6rKx4jbX+G74/tJ/nH9AWH8pZrdWClVcR0gcQ6lJYdCq65zZFQYBxcPtzfXS7wf1227RcAAP//itUBxVVJfkliTlBqcn5RCijCDHW4AAAAAP//UlAqSi0uzSnxzEvLB4pUoykx1FFKS0xOLQEyo2N1lFIyE9Pz8otLMpPBArVctQAAAAD//wMACPTtPAMCAAA=", "base64"));
  res.end();

  return __filename;
};
