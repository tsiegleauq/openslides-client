import { Component, OnInit } from '@angular/core';

import { BaseModelContextComponent } from 'app/site/base/components/base-model-context.component';
import { ComponentServiceCollector } from 'app/core/ui-services/component-service-collector';
import { BaseListViewComponent } from 'app/site/base/components/base-list-view.component.';
import { ViewUser } from 'app/site/users/models/view-user';
import { UserRepositoryService } from 'app/core/repositories/users/user-repository.service';
import { PblColumnDefinition } from '@pebula/ngrid';
import { SimplifiedModelRequest } from 'app/core/core-services/model-request-builder.service';
import { ViewMeeting } from 'app/site/event-management/models/view-meeting';
import { BarActionsService } from '../services/bar-actions.service';
import { Router } from '@angular/router';

@Component({
    selector: 'os-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss']
})
export class MembersComponent extends BaseListViewComponent<ViewUser> implements OnInit {
    public tableColumnDefinition: PblColumnDefinition[] = [
        {
            prop: 'short_name',
            width: 'auto'
        }
    ];

    public constructor(
        public repo: UserRepositoryService,
        protected componentServiceCollector: ComponentServiceCollector,
        barActionService: BarActionsService,
        router: Router
    ) {
        super(componentServiceCollector);
        super.setTitle('Members');
        barActionService.setAddAction(`${router.url}/create`);
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    protected getModelRequest(): SimplifiedModelRequest {
        return {
            // todo
            // viewModelCtor: ViewOrganization,
            viewModelCtor: ViewMeeting,
            ids: [1], // TODO
            follow: [
                {
                    idField: 'user_ids'
                }
            ],
            fieldset: []
        };
    }
}
