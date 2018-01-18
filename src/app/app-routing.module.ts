import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { IssueComponent } from './issue/issue.component';
import { ManagerComponent } from './manager/manager.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {path: 'board', component: BoardComponent},
  {path: 'issue', component: IssueComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'notification', component: NotificationComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
