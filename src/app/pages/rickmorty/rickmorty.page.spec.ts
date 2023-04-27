import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickmortyPage } from './rickmorty.page';

describe('RickmortyPage', () => {
  let component: RickmortyPage;
  let fixture: ComponentFixture<RickmortyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RickmortyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
