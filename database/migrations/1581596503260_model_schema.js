'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModelSchema extends Schema {
  up () {
    this.create('models', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.integer('brandId')
      .unsigned()
      .references('id')
      .inTable('brands')
    })
  }

  down () {
    this.drop('models')
  }
}

module.exports = ModelSchema
