import { Component, OnInit } from '@angular/core';
import { ViewOrganization } from 'app/site/event-management/models/view-organization';
import { BaseListViewComponent } from 'app/site/base/components/base-list-view.component.';
import { PblColumnDefinition } from '@pebula/ngrid';
import { OrganizationRepositoryService } from 'app/core/repositories/event-management/organization-repository.service';
import { ComponentServiceCollector } from 'app/core/ui-services/component-service-collector';
import { SimplifiedModelRequest } from 'app/core/core-services/model-request-builder.service';
import { BarActionsService } from '../services/bar-actions.service';

@Component({
    selector: 'os-organizations',
    templateUrl: './organizations.component.html',
    styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent extends BaseListViewComponent<ViewOrganization> implements OnInit {
    public tableColumnDefinition: PblColumnDefinition[] = [
        {
            prop: 'name',
            width: 'auto'
        }
    ];

    public constructor(
        protected componentServiceCollector: ComponentServiceCollector,
        public repo: OrganizationRepositoryService,
        barActionsService: BarActionsService
    ) {
        super(componentServiceCollector);
        super.setTitle('Organizations');
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
                    idField: 'organisation_ids'
                }
            ],
            fieldset: []
        };
    }
}
