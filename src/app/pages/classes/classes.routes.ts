import { Routes } from "@angular/router";
import { ListComponent } from "./pages/list-component/list-component";
import { CreateComponent } from "./pages/create-component/create-component";

export const classesRoutes: Routes = [

    { path: 'classes/list', component: ListComponent},
    { path: 'classes/create', component: CreateComponent}

]