import { Role } from 'app/shared/models/event-management/role';
import { BaseViewModel } from 'app/site/base/base-view-model';
import { ViewUser } from 'app/site/users/models/view-user';
import { ViewOrganization } from './view-organization';

export class ViewRole extends BaseViewModel<Role> {
    public static COLLECTION = Role.COLLECTION;
    protected _collection = Role.COLLECTION;

    public get role(): Role {
        return this._model;
    }
}
interface IRoleRelations {
    organization: ViewOrganization;
    superadmin_role_for_organization?: ViewOrganization;
    users: ViewUser[];
}
export interface ViewRole extends Role, IRoleRelations {}
