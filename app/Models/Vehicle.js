'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehicle extends Model {
    model () {
        return this.belongsTo('App/Models/Model')
    }
}

module.exports = Vehicle
