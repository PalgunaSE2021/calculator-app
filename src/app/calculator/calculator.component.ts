import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  currentValue: string = '';
  number1: number = 0;
  number2: number = 0;
  opration: string = '';
  isCurrentValueResetNeeded: boolean = true;
  result: number = 0;
  constructor() {}

  appendToDisplay(value: string) {
    console.log('value:', value);
    if (this.opration.length > 0 && this.isCurrentValueResetNeeded) {
      this.currentValue = value;
      this.isCurrentValueResetNeeded = false;
    } else {
      this.currentValue = this.currentValue + value;
    }
  }

  getCurrentValue(cur: string) {
    return parseInt(cur);
  }

  handleOp(op: string) {
    this.opration = op;
    this.number1 = this.getCurrentValue(this.currentValue);
  }

  reset = () => {
    this.currentValue = '';
    this.opration = '';
  };

  calculateResult() {
    this.number2 = this.getCurrentValue(this.currentValue);
    if (!this.isCurrentValueResetNeeded) {
      this.number2 = this.getCurrentValue(this.currentValue);

      switch (this.opration) {
        case 'add':
          this.result = this.number1 + this.number2;
          break;
        case 'sub':
          this.result = this.number1 - this.number2;
          break;
        case 'mul':
          this.result = this.number1 * this.number2;
          break;
        case 'div':
          this.result = this.number1 / this.number2;
          break;
      }

      this.opration = '';
      this.currentValue = this.result.toString();
      this.isCurrentValueResetNeeded = true;
    }
  }
}
