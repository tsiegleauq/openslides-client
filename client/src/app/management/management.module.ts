import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { CommitteesComponent } from './committees/committees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { MembersComponent } from './members/members.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingEditComponent } from './meeting-edit/meeting-edit.component';
import { CommitteeEditComponent } from './committee-edit/committee-edit.component';
import { MemberEditComponent } from './member-edit/member-edit.component';

@NgModule({
    imports: [CommonModule, SharedModule, ManagementRoutingModule],
    declarations: [
        ManagementComponent,
        MembersComponent,
        DashboardComponent,
        CommitteesComponent,
        OrganizationsComponent,
        MeetingsComponent,
        MeetingEditComponent,
        CommitteeEditComponent,
        MemberEditComponent
    ]
})
export class ManagementModule {}
