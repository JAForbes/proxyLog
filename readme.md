A non-intrusive approach to logging.

Usage
=====

```js
var proxyLog = require('proxyLog')

add = function(a,b){
	return a + b
}

logAdd = proxyLog('Add',add)

logAdd(2,3)  // Logs: "Add a:2 b:3 => 5"

```