Description
When you run npm scripts like `npm run build` with engineStricts, this package check the difference between your current node version and the version written in package json.
And then, there is difference, this package exit the process. 

Usage
1. Set "engineStricts":true and "engines":{"node":"xx.xx.xx"}" on package.json
1. Import package `const followEngineStrict = require ('follow-engine-strict')`
1. Excute function `followEngineStrict()`