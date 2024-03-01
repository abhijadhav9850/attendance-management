import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';


export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'dashboard-layout' },
    { path: 'dashboard-layout', component: DashboardLayoutComponent,children:[
        {path:'dashboard', component: DashboardComponent}
    ] },
   


];
