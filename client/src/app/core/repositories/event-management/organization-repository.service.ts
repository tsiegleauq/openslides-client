import { Injectable } from '@angular/core';

import { Organization } from 'app/shared/models/event-management/organization';
import { ViewOrganization } from 'app/site/event-management/models/view-organization';
import { BaseRepository } from '../base-repository';
import { RepositoryServiceCollector } from '../repository-service-collector';

@Injectable({
    providedIn: 'root'
})
export class OrganizationRepositoryService extends BaseRepository<ViewOrganization, Organization> {
    public constructor(repositoryServiceCollector: RepositoryServiceCollector) {
        super(repositoryServiceCollector, Organization);
    }

    public getTitle = (viewOrganization: ViewOrganization) => {
        return viewOrganization.name;
    };

    public getVerboseName = (plural: boolean = false) => {
        return this.translate.instant(plural ? 'Organizations' : 'Organization');
    };
}
