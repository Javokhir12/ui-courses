var path = require("path");

/**
 * GET /coursereserves/departments?limit=500
 *
 * connection: keep-alive
 * host: folio-testing-okapi.dev.folio.org
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijc3MzdlMTVkLTcwYjYtNWQ1MC1hMzNmLWY0N2RiOTFmMjFjNyIsImlhdCI6MTYxMzE1MjI4NiwidGVuYW50IjoiZGlrdSJ9.wpzmIBjbG2zladlRcZYZCprZGdCV3mtHheNWjuXWNqM
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/6.4.0 Chrome/87.0.4280.141 Electron/11.2.1 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses?sort=name
 * accept-encoding: gzip
 * accept-language: en-US
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 12 Feb 2021 17:52:32 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("vary", "origin");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("x-okapi-trace", "GET mod-courses-1.1.3-SNAPSHOT.106 http://10.36.1.253:9149/coursereserves/departments.. : 200 2868us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSSPU/DMBCG9/4KKys1OjtOnGREMHRg4WNCDBffpYmULyXuUFX977gpIARComI52a/9nE6P7rASIiIecfId936ORCFexCGkIW/odI1U5XKltJGONEpTIcsc2UgDcZpRBnmmKVqfkR47XqB79DV36Bs3f7wRz25qRt8M/fJl07t2R02/FeXgazHuJhbYk8BxbBsmEej6E+7YI6HHE3keL4RuYvRMt6EsHTVoJUFLpZ8gLjQU2l6neXIFUAC8dwrYbqQLsIU6hnpcfxeTpGlmlJOJciwNGScRIZfAqFUJkIPBH2LugupaPLqGe8d/cLPloR22+7UY2U/LcZE0Yos89H5J/i8pu0SSsoVOi0RdhwX4BbvZP888bc6erI0tq4SkhTKVCSUgMY4rWRlLZa4qrZz9olm8nrpFfvDYPrAbJlrWUq+ObwAAAP//AwBxkyz3rgIAAA==", "base64"));
  res.end();

  return __filename;
};
