'use strict';
let url = require('url');
let querystring = require('querystring');

let a = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
console.log(a);

let b = url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});
console.log(b);

let c = url.resolve('http://www.example.com/foo/bar', '../baz');
console.log(c); //http://www.example.com/baz



let d = querystring.parse('foo=bar&baz=qux&baz=quux&corge');
console.log(d);
/* =>
{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }
*/

let e =querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
console.log(e);
/* =>
'foo=bar&baz=qux&baz=quux&corge='
*/