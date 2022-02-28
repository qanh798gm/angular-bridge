import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-second-grand-child',
  templateUrl: './second-grand-child.component.html',
  styleUrls: ['./second-grand-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondGrandChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log('1.1.2 second grand child doCheck');
  }
}
