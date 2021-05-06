import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes =  [
    {path: 'login', component: LoginPageComponent},
    {path: '', component: DashboardPageComponent},
];

export const routing = RouterModule.forRoot(routes);