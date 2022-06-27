import { Component, OnInit } from '@angular/core';
import { newHeaderText } from './headerText';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  headerText = newHeaderText;

  ngOnInit(): void {}
}
