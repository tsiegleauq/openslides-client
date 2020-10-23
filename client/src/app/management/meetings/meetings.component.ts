import { Component, OnInit } from '@angular/core';
import { PblColumnDefinition } from '@pebula/ngrid';
import { OrganizationRepositoryService } from 'app/core/repositories/event-management/organization-repository.service';
import { ComponentServiceCollector } from 'app/core/ui-services/component-service-collector';
import { SimplifiedModelRequest } from 'app/core/core-services/model-request-builder.service';
import { MeetingRepositoryService } from 'app/core/repositories/event-management/meeting-repository.service';
import { ViewOrganization } from 'app/site/event-management/models/view-organization';
import { BaseListViewComponent } from 'app/site/base/components/base-list-view.component.';
import { ViewCommittee } from 'app/site/event-management/models/view-committee';
import { BarActionsService } from '../services/bar-actions.service';
import { Router } from '@angular/router';

@Component({
    selector: 'os-meetings',
    templateUrl: './meetings.component.html',
    styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent extends BaseListViewComponent<ViewOrganization> implements OnInit {
    public tableColumnDefinition: PblColumnDefinition[] = [
        {
            prop: 'name',
            width: 'auto'
        }
    ];

    public constructor(
        public repo: MeetingRepositoryService,
        protected componentServiceCollector: ComponentServiceCollector,
        barActionService: BarActionsService,
        router: Router
    ) {
        super(componentServiceCollector);
        super.setTitle('Meetings');
        barActionService.setAddAction(`${router.url}/create`);
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    protected getModelRequest(): SimplifiedModelRequest {
        return {
            viewModelCtor: ViewCommittee,
            ids: [1],
            follow: [
                {
                    idField: 'meeting_ids'
                }
            ],
            fieldset: []
        };
    }
}
