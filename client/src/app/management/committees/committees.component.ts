import { Component, OnInit } from '@angular/core';

import { ComponentServiceCollector } from 'app/core/ui-services/component-service-collector';

import { BaseListViewComponent } from 'app/site/base/components/base-list-view.component.';
import { PblColumnDefinition } from '@pebula/ngrid';
import { ViewCommittee } from 'app/site/event-management/models/view-committee';
import { CommitteeRepositoryService } from 'app/core/repositories/event-management/committee-repository.service';
import { ViewOrganization } from 'app/site/event-management/models/view-organization';
import { SimplifiedModelRequest } from 'app/core/core-services/model-request-builder.service';
import { BarActionsService } from '../services/bar-actions.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'os-committees',
    templateUrl: './committees.component.html',
    styleUrls: ['./committees.component.scss']
})
export class CommitteesComponent extends BaseListViewComponent<ViewCommittee> implements OnInit {
    public tableColumnDefinition: PblColumnDefinition[] = [
        {
            prop: 'name',
            width: 'auto'
        }
    ];

    public constructor(
        componentServiceCollector: ComponentServiceCollector,
        public repo: CommitteeRepositoryService,
        barActionService: BarActionsService,
        router: Router
    ) {
        super(componentServiceCollector);
        super.setTitle('Committees');
        barActionService.setAddAction(`${router.url}/create`);
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    protected getModelRequest(): SimplifiedModelRequest {
        return {
            viewModelCtor: ViewOrganization,
            ids: [1],
            follow: [
                {
                    idField: 'committee_ids'
                }
            ],
            fieldset: []
        };
    }
}
