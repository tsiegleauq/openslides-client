import { Organization } from 'app/shared/models/event-management/organization';
import { BaseViewModel } from 'app/site/base/base-view-model';
import { ViewCommittee } from './view-committee';
import { ViewResource } from './view-resource';
import { ViewRole } from './view-role';

export class ViewOrganization extends BaseViewModel<Organization> {
    public static COLLECTION = Organization.COLLECTION;
    protected _collection = Organization.COLLECTION;

    public get organization(): Organization {
        return this._model;
    }
}
interface IOrganizationRelations {
    committees: ViewCommittee[];
    roles: ViewRole[];
    superadmin_role: ViewRole;
    resources: ViewResource[];
}
export interface ViewOrganization extends Organization, IOrganizationRelations {}
