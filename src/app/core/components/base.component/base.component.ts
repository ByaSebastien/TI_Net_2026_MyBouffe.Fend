import {Component, Directive, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnDestroy{

  protected destroyed$: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    console.log("Destroy component");
    this.destroyed$.next();
  }
}
