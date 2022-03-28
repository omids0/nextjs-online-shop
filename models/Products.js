import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
      name: {type: String, required: true},
      category: {type: String, required: true},
      price: {type: Number, required: true, default: 0},
      qty: {type: Number, required: true, default: 0},
      sales: {type: Number, default:0},
      off: {type: Boolean, default: false},
      offpercent: {type: Number, default:0},
      description: {type: String, default:''},
      addedBy: {type: String,default:''},
      selectedImage: {type: String, required: true},
      code: {type: String, default: ''},
},{
      timestamps: true
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product