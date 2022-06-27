import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.css'],
})
export class HeaderTextComponent implements OnInit {
  @Input() text: string;
  constructor() {}

  ngOnInit(): void {}
}
