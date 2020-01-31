import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {GroupSearchComponent} from './group-search';
import {LoginComponent} from './login';
import {GroupCreateComponent} from "./group-create/group-create.component";
import {GroupManageComponent} from "./group-manage/group-manage.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'search', component: GroupSearchComponent},
    {path: 'create', component: GroupCreateComponent},
    {path: 'manage', component: GroupManageComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
