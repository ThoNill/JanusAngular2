import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { DialogComponent }  from './dialog.component';

/**
 * Add the template content to the DOM unless the condition is true.
 *
 * If the expression assigned to `myUnless` evaluates to a truthy value
 * then the templated elements are removed removed from the DOM,
 * the templated elements are (re)inserted into the DOM.
 *
 * <div *ngUnless="errorCount" class="success">
 *   Congrats! Everything is great!
 * </div>
 *
 * ### Syntax
 *
 * - `<div *myUnless="condition">...</div>`
 * - `<div template="myUnless condition">...</div>`
 * - `<template [myUnless]="condition"><div>...</div></template>`
 *
 */
@Directive({ selector: '[dialogLabel]'})
export class DialogLabelDirective {
  private hasView = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private dialog: DialogComponent) { }
    
  dialogLabel() {
     this.viewContainer.createEmbeddedView(this.templateRef,this.dialog,0);
     this.hasView = true;
  }
}