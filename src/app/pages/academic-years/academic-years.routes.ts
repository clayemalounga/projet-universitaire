import { Routes } from "@angular/router";
import { ListComponent } from "./list-component/list-component";
import { CreateComponent } from "./create-component/create-component";

export const academicYearsRoutes: Routes = [

    { path: 'academic-years/list', component: ListComponent},
    { path: 'academic-years/create', component: CreateComponent}
    
]