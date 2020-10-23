import { Committee } from 'app/shared/models/event-management/committee';
import { BaseViewModel } from 'app/site/base/base-view-model';
import { ViewUser } from 'app/site/users/models/view-user';
import { ViewMeeting } from './view-meeting';
import { ViewOrganization } from './view-organization';

export class ViewCommittee extends BaseViewModel<Committee> {
    public static COLLECTION = Committee.COLLECTION;
    protected _collection = Committee.COLLECTION;

    public get committee(): Committee {
        return this._model;
    }
}
interface ICommitteeRelations {
    meetings: ViewMeeting[];
    default_meeting: ViewMeeting;
    members: ViewUser[];
    managers: ViewUser[];
    forward_to_committees: ViewCommittee[];
    receive_forwardings_from_committees: ViewCommittee[];
    organization: ViewOrganization;
}
export interface ViewCommittee extends Committee, ICommitteeRelations {}
