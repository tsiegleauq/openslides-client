import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ViewportService } from 'app/core/ui-services/viewport.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MainMenuEntry } from 'app/core/core-services/main-menu.service';
import { BarActionsService } from './services/bar-actions.service';
import { ComponentServiceCollector } from 'app/core/ui-services/component-service-collector';
import { BaseComponent } from 'app/site/base/components/base.component';

@Component({
    selector: 'os-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.scss'],
})
export class ManagementComponent extends BaseComponent implements OnInit {
    @ViewChild('sideNav', { static: true })
    public sideNav: MatSidenav;

    public currentComponentTitle: string;

    public addAction: string;

    public menuEntries: MainMenuEntry[] = [
        {
            route: '/manage',
            displayName: 'Dashboard',
            icon: 'dashboard',
            // permission: Permission.coreCanSeeFrontpage,
            weight: 100
        },
        {
            route: 'committees',
            displayName: 'Committees',
            icon: 'supervised_user_circle',
            // permission: Permission.coreCanSeeFrontpage,
            weight: 200
        },
        {
            route: 'members',
            displayName: 'Members',
            icon: 'group',
            // permission: Permission.coreCanSeeFrontpage,
            weight: 300
        }
    ];

    public constructor(
        /**
         * The fastest approach to display a title
         * having this public is kinda odd, custom title
         * service needed. Angulars title "service" has no observable
         */
        protected componentServiceCollector: ComponentServiceCollector,
        public vp: ViewportService,
        private barActionsService: BarActionsService
    ) {
        super(componentServiceCollector);
    }

    public ngOnInit(): void {
        this.vp.checkForChange();

        this.subscriptions.push(
            this.barActionsService.addAction.subscribe(action => {
                this.addAction = action;
            })
        );
    }

    /**
     * Automatically close the navigation in while navigating in mobile mode
     */
    public mobileAutoCloseNav(): void {
        if (this.vp.isMobile) {
            this.sideNav.close();
        }
    }

    /**
     * Toggles the side nav
     */
    public toggleSideNav(): void {
        this.sideNav.toggle();
    }
}
