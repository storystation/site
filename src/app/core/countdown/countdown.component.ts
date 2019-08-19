import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.sass']
})
export class CountdownComponent implements OnInit {

  @Input() time: any;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }
}
