// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
@NgModule({ declarations: [AppComponent, CalculatorComponent], imports: [BrowserModule], bootstrap: [AppComponent] })
export class AppModule {}