import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-heading',
  templateUrl: './text-heading.component.html',
  styleUrls: ['./text-heading.component.scss']
})
export class TextHeadingComponent implements OnInit {

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
