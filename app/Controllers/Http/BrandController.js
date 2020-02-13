'use strict'

const Brand = use('App/Models/Brand')

class BrandController {
  async index () {
    const brands = Brand.all()

    return brands
  }

  async store ({ request, response }) {
    const { name } = request.all()

    const data = await Brand.create(name);

    return response.status(201).send({ message: 'Marca criada com sucesso'})
  }

  async show ({ params }) {
    const brand = await Brand.findOrFail(params.id)

    return brand
  }

  async update ({ params, request, response }) {
    const Brand = Brand.findOrFail(params.id)

    const data = request.all()

    await data.save();


  }

  async destroy ({ params, auth, response }) {
    const brand = await Brand.findOrFail(params.id)
    
    if(brand.userId !== auth.user.id){
      return response.status(401).send({ error: 'Not authorized' })
    }

    await brand.delete()
  }
}

module.exports = BrandController
