import { Routes } from "@angular/router";
import { ListComponent } from "./pages/list-component/list-component";
import { CreateComponent } from "./pages/create-component/create-component";

export const filiersRoutes: Routes = [
    { path: 'filieres/list', component: ListComponent},
    { path: 'filieres/create', component: CreateComponent}
]