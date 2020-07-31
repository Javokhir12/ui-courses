var path = require("path");

/**
 * GET /loan-types?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTEyOCwidGVuYW50IjoiZGlrdSJ9.f2kv9mXeiWPyEFxhrB-T5MTZcrSUaW0XQi-AoL6NPVA
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/1049e672-dcde-4c7c-b95b-edf9f60c6cbd/0/58e857de-0d18-46d0-b607-781e180ce95c/d6f7c1ba-a237-465e-94ed-f37e91bc64bd/edit?sort=barcode%2Ctitle
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:58 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/loan-types.. : 202 11572us, GET mod-inventory-storage-19.4.0-SNAPSHOT.455 http://10.36.1.15:9168/loan-types.. : 200 3398us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKSTwWrDMAxA7/0Kk+vqYVtObPe6fUG329hBsZVSSJPipoNR+u9T0nWDlcJofTC2oifxsHKYCVG0PXbD55Z2hViIN3HgGEfXabwWpg42VqBlEzFI64OR6EBJBUSlCU1DxhXzE9LhhiboCTsR1znuWxzo/HVDAyYccMw49eBgzMQp6XnMm9opw7WdBP2qYAF2AeZRB3hQvL4LMbXfpv9TE3Tk/Tj/60bWk9MgtWtA2sgnDI2XBrwt69pohfbCbUmY1t1K5L7f3K1mlLtB7Ye6roY6RR0JZCqrRtrkUdY2eL6mytkYIxteqL1QS5Gb36+lq1u0ztR1LfI1aI2VBH4daaHhaTRVkCkF0CrWJim6nMZ+n3ckMu0of/CU321nylvsztSvnXgfKxRDP2C7pNjnNP2Cdnb8AgAA//8DAF0XdOKYAwAA", "base64"));
  res.end();

  return __filename;
};
