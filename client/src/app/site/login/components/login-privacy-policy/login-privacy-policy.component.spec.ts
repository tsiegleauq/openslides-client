import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrivacyPolicyComponent } from './login-privacy-policy.component';

describe('LoginPrivacyPolicyComponent', () => {
    let component: LoginPrivacyPolicyComponent;
    let fixture: ComponentFixture<LoginPrivacyPolicyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginPrivacyPolicyComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPrivacyPolicyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
