import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, RouterEvent, NavigationStart, NavigationEnd, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BarActionsService {
    private currentUrl: string;
    private addActionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public addAction = this.addActionSubject.asObservable();

    public constructor(router: Router) {
        router.events
            .pipe(filter((event: RouterEvent) => event instanceof NavigationStart))
            .subscribe((event: RouterEvent) => {
                if (event.url !== this.currentUrl) {
                    this.setAddAction('');
                    this.currentUrl = event.url;
                }
            });
    }

    public setAddAction(action: string): void {
        this.addActionSubject.next(action);
    }
}
