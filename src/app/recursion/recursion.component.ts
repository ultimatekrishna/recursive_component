import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recursion',
  templateUrl: './recursion.component.html',
  styleUrls: ['./recursion.component.scss']
})
export class RecursionComponent implements OnInit {
  @Input() comments;
  constructor() { }

  ngOnInit() {
  }

}
