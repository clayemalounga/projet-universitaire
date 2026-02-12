import { Routes } from "@angular/router";
import { ListComponent } from "./pages/list-component/list-component";
import { CreateComponent } from "./pages/create-component/create-component";

export const userRoutes: Routes =[

    { path: 'users/list', component: ListComponent},
    { path: 'users/create', component: CreateComponent},

]