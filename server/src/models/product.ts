import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  sku: string;
  brand: string;
  name: string;
  price: number;
  description: string;
}

const productSchema: Schema = new Schema({
  sku: { type: String, required: true },
  brand: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IProduct>('Product', productSchema);
