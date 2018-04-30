import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesFuturasComponent } from './clases-futuras.component';

describe('ClasesFuturasComponent', () => {
  let component: ClasesFuturasComponent;
  let fixture: ComponentFixture<ClasesFuturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasesFuturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesFuturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
