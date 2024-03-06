import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardLayoutComponent } from './pages/dashboard-layout/dashboard-layout.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { LeaveTrackerComponent } from './pages/leave-tracker/leave-tracker.component';
import { DropdownComponent } from './components/inputs/dropdown/dropdown.component';
import { ListViewComponent } from './pages/list-view/list-view.component';


export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'dashboard-layout' },
    { path: 'dashboard-layout', component: DashboardLayoutComponent,children:[
        {path:'dashboard', component: DashboardComponent},
        {path:'services', component:ServicesPageComponent},
        {path:'list-view', component:ListViewComponent},
        {path:'leave-tracker', component:LeaveTrackerComponent},
    ] },
    {path:'dropdown', component:DropdownComponent},

];
