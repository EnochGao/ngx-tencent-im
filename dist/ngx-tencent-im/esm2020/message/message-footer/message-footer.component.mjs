import { Component, Input } from '@angular/core';
import { getFullDate } from '../../util/date';
import * as i0 from "@angular/core";
export class MessageFooterComponent {
    constructor() { }
    ngOnInit() {
    }
    get isMine() {
        return this.message.flow === 'out';
    }
    get date() {
        return getFullDate(new Date(this.message.time * 1000));
    }
}
MessageFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MessageFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: MessageFooterComponent, selector: "app-message-footer", inputs: { message: "message" }, ngImport: i0, template: "<div class=\"base\" [class]=\"[ isMine ? 'right' : 'left']\">\r\n  <div class=\"date\">{{ date }}</div>\r\n</div>\r\n", styles: [".right{display:flex;flex-direction:row-reverse;margin-right:15px}.left{display:flex;flex-direction:row;margin-left:15px}.base{color:#a5b5c1;font-size:12px}.name{padding:0 4px;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: MessageFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-message-footer', template: "<div class=\"base\" [class]=\"[ isMine ? 'right' : 'left']\">\r\n  <div class=\"date\">{{ date }}</div>\r\n</div>\r\n", styles: [".right{display:flex;flex-direction:row-reverse;margin-right:15px}.left{display:flex;flex-direction:row;margin-left:15px}.base{color:#a5b5c1;font-size:12px}.name{padding:0 4px;max-width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1mb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL21lc3NhZ2UvbWVzc2FnZS1mb290ZXIvbWVzc2FnZS1mb290ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LXRlbmNlbnQtaW0vc3JjL21lc3NhZ2UvbWVzc2FnZS1mb290ZXIvbWVzc2FnZS1mb290ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQU85QyxNQUFNLE9BQU8sc0JBQXNCO0lBR2pDLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7bUhBZFUsc0JBQXNCO3VHQUF0QixzQkFBc0IsMEZDVG5DLHVIQUdBOzJGRE1hLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSxvQkFBb0I7MEVBS3JCLE9BQU87c0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAndGltLWpzLXNkayc7XHJcbmltcG9ydCB7IGdldEZ1bGxEYXRlIH0gZnJvbSAnLi4vLi4vdXRpbC9kYXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLW1lc3NhZ2UtZm9vdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2UtZm9vdGVyLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTWluZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1lc3NhZ2UuZmxvdyA9PT0gJ291dCc7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0ZSgpIHtcclxuICAgIHJldHVybiBnZXRGdWxsRGF0ZShuZXcgRGF0ZSh0aGlzLm1lc3NhZ2UudGltZSAqIDEwMDApKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImJhc2VcIiBbY2xhc3NdPVwiWyBpc01pbmUgPyAncmlnaHQnIDogJ2xlZnQnXVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJkYXRlXCI+e3sgZGF0ZSB9fTwvZGl2PlxyXG48L2Rpdj5cclxuIl19