split-first
=============================
> Split the first separator of string.


## Install

```
$ npm install split-first
```


## Example

```js
require("split-first");

console.log("192.168.0.1".splitFirst("."));
//=> [ '192', '168.0.1' ]

console.log("http://www.abc.com/example/demo/web.html".splitFirst("/"));
//=> [ 'http:', '/www.abc.com/example/demo/web.html' ]

console.log("tommy@email.com".splitFirst("#")); //not found
//=> [ 'tommy@email.com' ]
```

## License

This code is licensed under the MIT License.