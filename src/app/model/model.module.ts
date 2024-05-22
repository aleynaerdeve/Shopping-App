import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core"
import { RestService } from "./rest.service";
import { ProductRepository } from "./product.repository";
import { CategoryRepository } from "./category.repository";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [RestService, ProductRepository,
        AuthService, CategoryRepository, Cart,Order,OrderRepository]   ////serviceler providersta

})

export class ModelModule {}