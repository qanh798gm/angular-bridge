import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log('1.2 second child doCheck');
  }

  secondChildClick() {
    console.log('2nd child click');
  }
}
