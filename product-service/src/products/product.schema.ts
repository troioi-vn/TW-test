import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  stock: Number,
});