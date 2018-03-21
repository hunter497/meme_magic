import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryObjectsComponent } from './gallery-objects.component';

describe('GalleryObjectsComponent', () => {
  let component: GalleryObjectsComponent;
  let fixture: ComponentFixture<GalleryObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
