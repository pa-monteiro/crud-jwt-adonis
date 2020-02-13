'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Model extends Model {

    brand() {
        return this.belongsTo('App/Models/Brand')
    }

    vehicles() {
        return this.hasMany('App/Models/Vehicle')
    }
}

module.exports = Model
