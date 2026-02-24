import { Routes } from "@angular/router";
import { ListComponent } from "./pages/list-component/list-component";
import { CreateComponent } from "./pages/create-component/create-component";

export const coursRoutes: Routes = [

    { path: 'cours/list', component: ListComponent},
    { path: 'cours/create', component: CreateComponent}
    
]