import { AfterContentChecked, AfterContentInit, AfterViewInit, DoCheck, OnDestroy,  AfterViewChecked, SimpleChanges } from '@angular/core';
import { Component, OnChanges, OnInit } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lhooks',
  templateUrl: './lhooks.component.html',
  styleUrls: ['./lhooks.component.css']
})
// tslint:disable-next-line: max-line-length
export class LhooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1. ngOnChanges');
    /*
      Executes every time the value of an input property changes.
      the hook method receives a simpleChanges object containing
      current and previous values.
    */
  }

  ngOnInit() {
    console.log('2. ngOnInit');
    /*
      Executes after the constructor and after ngOnchange hook
      for the currentfirst time. it is most commanly used for
      component initalization and retriving data from data base.
    */
  }

  ngDoCheck(): void {
    console.log('3. ngDoCheck');
    /*
     This is for the detection and to act on changes that Angular can't or won't detect on its own.
    */
  }

  ngAfterContentInit(): void {
    console.log('4. ngAfterContentInit');
    /*
    This is called in response after Angular projects external content into the component's view.
    */
  }
  ngAfterContentChecked(): void {
    console.log('5. ngAfterContentChecked');
    /*
    This is called in response after Angular checks the content projected into the component.
    */
  }
  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit');
    /*
    This is called in response after Angular initializes the component's views and child views.
    */
  }
  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked');
    /*
    This is called in response after Angular checks the component's views and child views.
    */
  }

  ngOnDestroy(): void {
    console.log('8. ngOnDestroy');
    /*
    Executes just before angular destroys the component and generally
    used for performance cleanup.Unsubscribe Observables and detach event handlers to avoid memory leaks.
    */

     /*
    https://wesleygrimes.com/angular/2019/03/29/making-upgrades-to-angular-ngondestroy.html
    */
  }



}
