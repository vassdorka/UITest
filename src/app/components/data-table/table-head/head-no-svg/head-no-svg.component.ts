import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-no-svg',
  templateUrl: './head-no-svg.component.html',
  styleUrls: ['./head-no-svg.component.css'],
})
export class HeadNoSvgComponent implements OnInit {
  @Input() noSvgHeadText: string;
  constructor() {}

  ngOnInit(): void {}
}
