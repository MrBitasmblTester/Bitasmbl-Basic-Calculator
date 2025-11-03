// src/app/calculator/calculator.component.ts
import { Component } from '@angular/core';
@Component({ selector: 'app-calculator', templateUrl: './calculator.component.html', styleUrls: ['./calculator.component.css'] })
export class CalculatorComponent {
  current = '';
  append(val: string){ this.current += val; }
  clear(){ this.current = ''; }
  calculate(){ try{ this.current = eval(this.current) || '0'; }catch{ this.current = 'Error'; } }
}
