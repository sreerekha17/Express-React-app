import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  num1: number;
  num2: number;
  sum: number | null;
  diff: number | null;
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.sum = 0;
    this.diff = 0;
  }
  ngOnInit(): void {
    this.clear();
  }
  clear() {
    this.num1 = 0;
    this.num2 = 0;
    this.sum = 0;
    this.diff = 0;
  }
  add() {
    this.sum = this.num1 + this.num2;
    this.diff = null;
  }
  substract() {
    this.diff = this.num1 - this.num2;
    this.sum = null;
  }
  convertToInt(strNum: string) {
    return parseInt(strNum)
  }
}