import { Component, OnInit } from '@angular/core';
import { BaseModelContextComponent } from 'app/site/base/components/base-model-context.component';
import { ComponentServiceCollector } from 'app/core/ui-services/component-service-collector';

@Component({
    selector: 'os-committee-edit',
    templateUrl: './committee-edit.component.html',
    styleUrls: ['./committee-edit.component.scss']
})
export class CommitteeEditComponent extends BaseModelContextComponent implements OnInit {
    public constructor(componentServiceCollector: ComponentServiceCollector) {
        super(componentServiceCollector);
        super.setTitle('Add Committee');
    }

    public ngOnInit(): void {}
}
