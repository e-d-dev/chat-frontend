import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MailboxComponent } from './mailbox/mailbox.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'mailbox', component: MailboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
