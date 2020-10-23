import { Id } from 'app/core/definitions/key-types';
import { BaseModel } from '../base/base-model';

export class Organization extends BaseModel<Organization> {
    /**
     * Todo: rename the collection to "organization" on the server
     */
    public static COLLECTION = 'organisation';

    public id: Id;
    public name: string;
    public description: string;

    // Configs
    public legal_notice: string;
    public privacy_policy: string;
    public login_text: string;
    public theme: string;
    public custom_translations: JSON;
    public reset_password_verbose_errors: boolean;
    public enable_electronic_voting: boolean;

    public committee_ids: Id[]; // (committee/organization_id)[];
    public role_ids: Id[]; // (role/organization_id)[];
    public superadmin_role_id: Id; // role/superadmin_role_for_organization_id;
    public resource_ids: Id[]; // (resource/organization_id)[];

    public constructor(input?: any) {
        super(Organization.COLLECTION, input);
    }
}
