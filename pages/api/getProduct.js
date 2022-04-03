import db from '../../utils/db/mongoose'
import Products from '../../models/Products'

export default async function handler(req, res) {
      if(req.method === 'GET'){
            await db.connect()
            const product = await Products.find({})
            await db.disconnect()
            res.send(product)
      }

      if(req.method === 'POST'){
            try {
                  await db.connect()
                  const product = await Products.findById(req.body.uid)
                  await db.disconnect()
                  res.status(201).send(product)
            } catch (error) {
                  res.status(422).send(`Error: ${error.message}`)
            }
      }
}