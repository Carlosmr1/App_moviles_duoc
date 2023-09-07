import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciosesPage } from './inicioses.page';

describe('IniciosesPage', () => {
  let component: IniciosesPage;
  let fixture: ComponentFixture<IniciosesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniciosesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
