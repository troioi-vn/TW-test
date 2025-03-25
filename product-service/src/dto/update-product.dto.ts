/*
import { Controller, Get, Put, Body, Param, UseGuards } from '@nestjs/common';
import { UpdateProductDto } from './update-product.dto';
import { ProductsService } from '../products/products.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }
}
// export { UpdateProductDto };
*/
