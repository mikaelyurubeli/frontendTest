import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-date-converter',
  templateUrl: './date-converter.component.html',
  styleUrls: ['./date-converter.component.css']
})
export class DateConverterComponent implements OnInit {
  inputDate = ''
  result
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  formatedDate

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChange (e) {
    this.inputDate = e.value
  }

  onSubmit () {
    this.result = new Date(this.inputDate)
    this.days[this.result.getDay()] != undefined ?
    this.formatedDate = this.days[this.result.getDay()] + ', ' + this.result.getDate() + ' ' + this.months[this.result.getMonth()] + ' ' + this.result.getFullYear()
    : this.formatedDate = 'Invalid Date'
    window.localStorage.setItem('result', this.formatedDate)
    this.inputDate != '' ? this.router.navigate(['/result'])  : null
  }

}
