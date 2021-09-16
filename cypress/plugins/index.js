const { startDevServer } = require('@cypress/webpack-dev-server')

// from https://docs.cypress.io/guides/component-testing/framework-configuration
module.exports = (on, config) => {
    on('dev-server:start', (options) => {
        return startDevServer({
            options
        })
    })
}
