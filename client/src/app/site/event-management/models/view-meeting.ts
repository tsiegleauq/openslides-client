import { StructuredRelation } from 'app/core/definitions/relations';
import { Meeting } from 'app/shared/models/event-management/meeting';
import { ViewAgendaItem } from 'app/site/agenda/models/view-agenda-item';
import { ViewListOfSpeakers } from 'app/site/agenda/models/view-list-of-speakers';
import { ViewSpeaker } from 'app/site/agenda/models/view-speaker';
import { ViewAssignment } from 'app/site/assignments/models/view-assignment';
import { ViewAssignmentCandidate } from 'app/site/assignments/models/view-assignment-candidate';
import { ViewAssignmentOption } from 'app/site/assignments/models/view-assignment-option';
import { ViewAssignmentPoll } from 'app/site/assignments/models/view-assignment-poll';
import { ViewAssignmentVote } from 'app/site/assignments/models/view-assignment-vote';
import { BaseViewModel } from 'app/site/base/base-view-model';
import { ViewMediafile } from 'app/site/mediafiles/models/view-mediafile';
import { ViewMotion } from 'app/site/motions/models/view-motion';
import { ViewMotionBlock } from 'app/site/motions/models/view-motion-block';
import { ViewMotionCategory } from 'app/site/motions/models/view-motion-category';
import { ViewMotionChangeRecommendation } from 'app/site/motions/models/view-motion-change-recommendation';
import { ViewMotionComment } from 'app/site/motions/models/view-motion-comment';
import { ViewMotionCommentSection } from 'app/site/motions/models/view-motion-comment-section';
import { ViewMotionOption } from 'app/site/motions/models/view-motion-option';
import { ViewMotionPoll } from 'app/site/motions/models/view-motion-poll';
import { ViewMotionState } from 'app/site/motions/models/view-motion-state';
import { ViewMotionStatuteParagraph } from 'app/site/motions/models/view-motion-statute-paragraph';
import { ViewMotionSubmitter } from 'app/site/motions/models/view-motion-submitter';
import { ViewMotionVote } from 'app/site/motions/models/view-motion-vote';
import { ViewMotionWorkflow } from 'app/site/motions/models/view-motion-workflow';
import { ViewProjection } from 'app/site/projector/models/view-projection';
import { ViewProjectiondefault } from 'app/site/projector/models/view-projectiondefault';
import { ViewProjector } from 'app/site/projector/models/view-projector';
import { ViewProjectorCountdown } from 'app/site/projector/models/view-projector-countdown';
import { ViewProjectorMessage } from 'app/site/projector/models/view-projector-message';
import { ViewTag } from 'app/site/tags/models/view-tag';
import { ViewTopic } from 'app/site/topics/models/view-topic';
import { ViewGroup } from 'app/site/users/models/view-group';
import { ViewPersonalNote } from 'app/site/users/models/view-personal-note';
import { ViewUser } from 'app/site/users/models/view-user';
import { ViewCommittee } from './view-committee';

export interface HasMeeting {
    meeting: ViewMeeting;
}

export class ViewMeeting extends BaseViewModel<Meeting> {
    public static COLLECTION = Meeting.COLLECTION;
    protected _collection = Meeting.COLLECTION;

    public get meeting(): Meeting {
        return this._model;
    }

    public getUrl(): string {
        return `/${this.id}/`;
    }
}
interface IMeetingRelations {
    motions_default_workflow: ViewMotionWorkflow;
    motions_default_amendment_workflow: ViewMotionWorkflow;
    motions_default_statute_amendment_workflow: ViewMotionWorkflow;
    motion_poll_default_groups: ViewGroup[];
    assignment_poll_default_groups: ViewGroup[];
    projectors: ViewProjector[];
    projections: ViewProjection[];
    projectiondefaults: ViewProjectiondefault[];
    projector_messages: ViewProjectorMessage[];
    projector_countdowns: ViewProjectorCountdown[];
    tags: ViewTag[];
    agenda_items: ViewAgendaItem[];
    lists_of_speakers: ViewListOfSpeakers[];
    speakers: ViewSpeaker[];
    topics: ViewTopic[];
    groups: ViewGroup[];
    personal_notes: ViewPersonalNote[];
    mediafiles: ViewMediafile[];
    motions: ViewMotion[];
    motion_comment_sections: ViewMotionCommentSection[];
    motion_comments: ViewMotionComment[];
    motion_categories: ViewMotionCategory[];
    motion_blocks: ViewMotionBlock[];
    motion_submitters: ViewMotionSubmitter[];
    motion_change_recommendations: ViewMotionChangeRecommendation[];
    motion_workflows: ViewMotionWorkflow[];
    motion_states: ViewMotionState[];
    motion_statute_paragraphs: ViewMotionStatuteParagraph[];
    motion_polls: ViewMotionPoll[];
    motion_options: ViewMotionOption[];
    motion_votes: ViewMotionVote[];
    assignments: ViewAssignment[];
    assignment_candidates: ViewAssignmentCandidate[];
    assignment_polls: ViewAssignmentPoll[];
    assignment_options: ViewAssignmentOption[];
    assignment_votes: ViewAssignmentVote[];
    logo: StructuredRelation<string, ViewMediafile | null>;
    font: StructuredRelation<string, ViewMediafile | null>;
    committee: ViewCommittee;
    default_meeting_for_committee?: ViewCommittee;
    present_users: ViewUser[];
    temporary_users: ViewUser[];
    guests: ViewUser[];
    users: ViewUser[];
    reference_projector: ViewProjector;
    default_group: ViewGroup;
    superadmin_group: ViewGroup;
}
export interface ViewMeeting extends Meeting, IMeetingRelations {}
