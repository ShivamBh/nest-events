import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { SpaceShipModule } from './space-ship/space-ship.module';

@Module({
  imports: [ProductsModule, OrdersModule, SpaceShipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
