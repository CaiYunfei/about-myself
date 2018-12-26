import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MsgComponent} from './msg/msg.component';
import { CommonModule } from '@angular/common';
import {UpdateMsgComponent} from './update_msg/update_msg.component';
import {NewMsgComponent} from './new_msg/new_msg.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
    {
        path:'',
        component:IndexComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'msg',
        component:MsgComponent
    },
    {
        path:'update_msg/:id',
        component:UpdateMsgComponent
    },
    {
        path:'new_msg',
        component:NewMsgComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),CommonModule,FormsModule],
    exports: [CommonModule],
    declarations: [
        NewMsgComponent,
        LoginComponent,
        RegisterComponent,
        MsgComponent,
        UpdateMsgComponent
    ],
})
export class AppRoutesModule { }