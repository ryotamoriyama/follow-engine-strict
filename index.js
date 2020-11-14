#!/usr/bin/env node
'use strict'
const engineStrict = process.env.npm_package_engineStrict
const eniginesNode = process.env.npm_package_engines_node
const currentNode = process.env.npm_config_node_version

const followEngineStrict = () => {
    if (engineStrict !== 'true') {
        console.error('Set {"engineStrict": true} on your package.json');
        process.exit(1)
    }

    if (eniginesNode.match(/^\d[\d.]+?\d$/) === null) {
        console.error('package.json needs engines.node. and its version must be static.');
        process.exit(1)
    }

    if (eniginesNode !== currentNode) {
        console.error('node version must be ' + pkg.engines.node + '. Your current node version is ' + process.versions.node + '.');
        process.exit(1)
    }
}

module.exports = followEngineStrict