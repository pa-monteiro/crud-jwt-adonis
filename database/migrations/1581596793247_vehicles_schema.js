'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehiclesSchema extends Schema {
  up () {
    this.create('vehicles', (table) => {
      table.increments()
      table.decimal('value').notNullable()
      table.integer('yearModel')
      table.string('fuel')
      table.integer('brand_id')
      .unsigned().references('id').inTable('brands')
      table.integer('modelId')
      .unsigned().references('id').inTable('models')
    })
  }

  down () {
    this.drop('vehicles')
  }
}

module.exports = VehiclesSchema
