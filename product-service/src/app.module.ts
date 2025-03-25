import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductSchema } from './products/product.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/product-db'),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}