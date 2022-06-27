import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-button',
  templateUrl: './status-button.component.html',
  styleUrls: ['./status-button.component.css'],
})
export class StatusButtonComponent implements OnInit {
  @Input() status: boolean;
  constructor() {}

  ngOnInit(): void {}
}
