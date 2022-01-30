import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-first-grand-child',
  templateUrl: './first-grand-child.component.html',
  styleUrls: ['./first-grand-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstGrandChildComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log('1.1.1 first grand child doCheck');
  }

  firstGrandChildClick() {
    console.log('1st grand child click');
  }
}
