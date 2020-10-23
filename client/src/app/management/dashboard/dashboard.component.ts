import { Component, OnInit } from '@angular/core';
import { ComponentServiceCollector } from 'app/core/ui-services/component-service-collector';
import { BaseModelContextComponent } from 'app/site/base/components/base-model-context.component';

@Component({
    selector: 'os-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseModelContextComponent implements OnInit {
    public constructor(protected componentServiceCollector: ComponentServiceCollector) {
        super(componentServiceCollector);
        super.setTitle('Dashboard');
    }

    public ngOnInit(): void {}
}
