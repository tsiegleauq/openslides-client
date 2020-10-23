import { Id } from 'app/core/definitions/key-types';
import { BaseModel } from '../base/base-model';

export class Role extends BaseModel<Role> {
    public static COLLECTION = 'role';

    public id: Id;
    public name: string;
    public permissions: string[];

    public organization_id: Id; // organization/role_ids;
    public superadmin_role_for_organization_id?: Id; // organization/superadmin_role_id;
    public user_ids: Id[]; // (user/role_id)[];

    public constructor(input?: any) {
        super(Role.COLLECTION, input);
    }
}
