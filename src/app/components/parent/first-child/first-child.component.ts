import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstChildComponent implements OnInit {
  firstGrandChildTitle: string = 'default first grand child title';
  constructor(private cdr: ChangeDetectorRef, private http: HttpClient) {
    this.cdr.detach();
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.getData();
    // }, 3000);
  }

  getData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((val) => {
        console.log(val);
      });
  }

  ngDoCheck(): void {
    console.log('1.1 1st child doCheck');
  }
  firstChildClick() {
    console.log('1st child click');
  }
  changeFirstGrandChildTitle() {
    this.firstGrandChildTitle = 'updated title';
    this.cdr.detectChanges();
  }
}
