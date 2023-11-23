import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfconductorPage } from './perfconductor.page';

describe('PerfconductorPage', () => {
  let component: PerfconductorPage;
  let fixture: ComponentFixture<PerfconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
