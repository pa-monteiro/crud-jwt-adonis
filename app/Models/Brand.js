'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Brand extends Model {

    models() {
        return this.hasMany('App/Models/Model')
    }
}

module.exports = Brand
