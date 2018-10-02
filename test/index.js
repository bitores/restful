let http = require('http');
let url = require('url');
let restful = require('../index.js');

// 1、 route： /index    query: /index
let layer = restful("/index", {
  strict: false,
  end: false
}, (req, res, next) => {
  console.log('...')
})
layer.method = undefined;

let ret = layer.match('/index')
console.log(layer, ret)

// 2、 route： /index/:id    query: /index/456
layer = restful("/index/:id", {}, (req, res, next) => {
  console.log('...', req.params.id)
})
layer.method = undefined;

ret = layer.match('/index/46')
console.log(layer, ret)
layer.handle_request({}, {}, () => {})

// 3、 route： /index/:id/:c   query: /index/3453/45
layer = restful("/index/:id/:c", {}, (req, res, next) => {
  console.log('...', req.params.id, req.params.c)
})
layer.method = undefined;

ret = layer.match('/index/46/54')
console.log(layer, ret)


// layer.handle_request(req, res, next);
// if (layer.method && layer.method !== method) {
//   return next(err);
// }
// if (err) {
//   layer.handle_error(err, req, res, next);
// } else {
//   layer.handle_request(req, res, next);
// }

http.createServer((req, res, next) => {
  // layer.handle_request(req, res, () => {});
}).listen(8001, () => {
  console.log("....")
})