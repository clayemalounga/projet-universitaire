import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout-component/admin-layout-component';
import { AccueilComponent } from './layouts/admin-layout/components/accueil-component/accueil-component';
import { userRoutes } from './pages/users/users.routes';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout-component/auth-layout-component';
import { LoginComponent } from './layouts/auth-layout/components/login-component/login-component';
import { ForgotPasswordComponent } from './layouts/auth-layout/components/forgot-password-component/forgot-password-component';
import { DashboardComponent } from './layouts/admin-layout/components/dashboard-component/dashboard-component';

export const routes: Routes = [

    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            ...userRoutes,
            { path: 'accueil', component: AccueilComponent,},
            { path: 'dashboard', component: DashboardComponent}
        ]
    },
    {
        path:'auth',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'reset-password', component: ForgotPasswordComponent }
        ]
    },
    { path:'', redirectTo:'auth/login', pathMatch: 'full'}
];
