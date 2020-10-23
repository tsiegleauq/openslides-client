import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CommitteesComponent } from './committees/committees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management.component';
import { MembersComponent } from './members/members.component';

import { AuthGuard } from 'app/core/core-services/auth-guard.service';
import { MeetingsComponent } from './meetings/meetings.component';
import { CommitteeEditComponent } from './committee-edit/committee-edit.component';
import { MeetingEditComponent } from './meeting-edit/meeting-edit.component';
import { MemberEditComponent } from './member-edit/member-edit.component';

const routes: Route[] = [
    {
        path: '',
        component: ManagementComponent,
        children: [
            { path: '', component: DashboardComponent, pathMatch: 'full' },
            {
                path: 'members',
                children: [
                    {
                        path: '',
                        component: MembersComponent
                    },
                    {
                        path: 'create',
                        component: MemberEditComponent
                    },
                    {
                        path: ':id',
                        component: MemberEditComponent
                    }
                ]
            },
            {
                path: 'committees',
                children: [
                    {
                        path: '',
                        component: CommitteesComponent
                    },
                    {
                        path: 'create',
                        component: CommitteeEditComponent
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                path: '',
                                component: MeetingsComponent
                            },
                            {
                                path: 'create',
                                component: MeetingEditComponent
                            }
                        ]
                    }
                ]
            }
        ],
        canActivateChild: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementRoutingModule {}
