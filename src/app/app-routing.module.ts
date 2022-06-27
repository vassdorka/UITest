import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { ShopContainerComponent } from './components/shop-container/shop-container.component';
import { ItemService } from './services/item.service';

const routes: Routes = [
  { path: 'account', component: ContainerComponent },
  { path: 'shop/:id', component: ShopContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
