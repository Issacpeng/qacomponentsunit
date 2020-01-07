const Builder = require('../dist/build').default

const appPath = process.cwd()
const builder = new Builder(appPath)

builder.build({
	type: 'quickapp',
	watch: 'watch',
	port: undefined,
	release: false
  })