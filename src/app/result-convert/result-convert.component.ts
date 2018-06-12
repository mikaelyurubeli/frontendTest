import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-convert',
  templateUrl: './result-convert.component.html',
  styleUrls: ['./result-convert.component.css']
})

export class ResultConvertComponent implements OnInit {
  result = window.localStorage.result
  constructor() {
  }

  ngOnInit() {
  }

}
