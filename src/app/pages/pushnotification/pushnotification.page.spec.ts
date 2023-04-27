import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PushnotificationPage } from './pushnotification.page';

describe('PushnotificationPage', () => {
  let component: PushnotificationPage;
  let fixture: ComponentFixture<PushnotificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PushnotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
