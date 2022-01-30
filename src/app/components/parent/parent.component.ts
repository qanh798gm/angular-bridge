import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, DoCheck {
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log('1. parent doCheck');
  }

  parentClick() {
    console.log('parent click');
  }
}
