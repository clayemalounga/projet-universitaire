import { Routes } from "@angular/router";
import { ListComponent } from "./pages/list-component/list-component";
import { CreateComponent } from "./pages/create-component/create-component";


export const studentsRoute: Routes= [

    { path: 'students/list', component: ListComponent},
    { path: 'students/create', component: CreateComponent}

]