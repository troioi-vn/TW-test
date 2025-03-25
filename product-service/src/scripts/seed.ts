import { connect, connection } from 'mongoose';
import { Product } from '../products/product.interface'; 
import { ProductSchema } from '../products/product.schema';

const products: Product[] = [
  { name: 'Sample Product', description: 'A sample item', price: 10, category: 'Test', stock: 100 },
  // Add more products as needed
];

async function seed() {
  try {
    await connect('mongodb://localhost/product-db'); // No options needed
    const ProductModel = connection.model('Product', ProductSchema);
    await ProductModel.insertMany(products);
    console.log('Database seeded successfully with products.');
    await connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed();