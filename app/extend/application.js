const path = require('path')

const CHAIN = Symbol('qtep.chain')

module.exports = {
  get chain() {
    this[CHAIN] = this[CHAIN] || this.qtepinfo.lib.Chain.get(this.config.qtep.chain)
    return this[CHAIN]
  },
  get qtepinfo() {
    return {
      lib: require(path.resolve(this.config.qtepinfo.path, 'lib')),
      rpc: require(path.resolve(this.config.qtepinfo.path, 'rpc'))
    }
  }
}
