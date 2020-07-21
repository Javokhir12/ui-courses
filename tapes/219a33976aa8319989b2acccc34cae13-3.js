var path = require("path");

/**
 * GET /coursereserves/coursetypes?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6IjRlNGRjNzI0LTVhYzItNWZhNy1hZTQwLTA1MTU2NDJiYzhiMyIsImlhdCI6MTU5NTI5MTQxMywidGVuYW50IjoiZGlrdSJ9.n0pScJ48TTDYVYgMj3bbb1JpTiSqRsGOwNGofNvunds
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.10.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/3188e195-48c6-47a1-ab99-0d62fb8187ef/edit?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 21 Jul 2020 00:31:03 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.150:9178/coursereserves/coursetypes.. : 202 5995us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.150:9157/coursereserves/coursetypes.. : 200 2300us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTPU/DMBCG9/4KKys1XGwnsTsiFhaQUDfE4I+ziNTaUeIOqOp/x0lbkICqqODhJJ/vfXX36LydEVLYuOkHXL51OBRkQZ7JNmdzvnXjtfAV1BxRUlNKSwUwQw1YRUsDXnEnqwZMMd9Lgl7jJHoMqzbgMe1wsH3bpTaG6fUhkjbQDvshBmLjuosBQzpWrzFpp5MeS/etjE32qBO6uxwmCwYMKDSUwbKEBa8XXFwzya8gn4NRVm0693vVJNrluJt/QQC8AmRNSZ0zkgqHnupaS6q59cJDaYx3JxDc3AeyH/QUjNuYXkmciokO7icyw9/RqIvQqLNoVFkJENJQXquMhqGlurKaWm/ReBAISnxDc5ZJXpADkf/bDg5wAYIP1ScC8jI6FCkmvXpCG3s3/Rs+270DAAD//wMA3Y9MlU8DAAA=", "base64"));
  res.end();

  return __filename;
};
