import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderTextComponent } from './components/header/header-text/header-text.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { ActionsComponent } from './components/actions/actions.component';
import { TitleComponent } from './components/actions/title/title.component';
import { ActionButtonComponent } from './components/actions/action-button/action-button.component';
import { ComapnyFilterButtonComponent } from './components/actions/ComapnyFilterButton/company-filter-button.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { TableHeadComponent } from './components/data-table/table-head/table-head.component';
import { CheckBoxComponent } from './components/data-table/check-box/check-box.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadNoSvgComponent } from './components/data-table/table-head/head-no-svg/head-no-svg.component';
import { StatusButtonComponent } from './components/data-table/status-button/status-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InterceptorService } from './interceptor.service';
import { ShopContainerComponent } from './components/shop-container/shop-container.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectSearchModule } from 'mat-select-search';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ShopSidebarComponent } from './components/shop-sidebar/shop-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ContainerComponent,
    HeaderTextComponent,
    SearchBarComponent,
    ActionsComponent,
    TitleComponent,
    ActionButtonComponent,
    ComapnyFilterButtonComponent,
    DataTableComponent,
    TableHeadComponent,
    CheckBoxComponent,
    HeadNoSvgComponent,
    StatusButtonComponent,
    ShopContainerComponent,
    ShopSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    NgxPaginationModule,
    MatProgressBarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectSearchModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRadioModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
