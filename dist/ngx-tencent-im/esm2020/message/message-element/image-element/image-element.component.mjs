import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../message-bubble/message-bubble.component";
import * as i2 from "ng-zorro-antd/image";
export class ImageElementComponent {
    constructor() { }
    ngOnInit() {
        const url = this.payload.imageInfoArray[0].imageUrl;
        if (typeof url !== 'string') {
            this.imageUrl = '';
        }
        this.imageUrl = url.slice(0, 2) === '//' ? `https:${url}` : url;
    }
}
ImageElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ImageElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ImageElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: ImageElementComponent, selector: "app-image-element", inputs: { message: "message", isMine: "isMine", payload: "payload", percent: "percent" }, ngImport: i0, template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <img class=\"image-element\" nz-image [nzSrc]=\"imageUrl\">\r\n</app-message-bubble>\r\n", styles: [".image-element{max-width:250px}\n"], components: [{ type: i1.MessageBubbleComponent, selector: "app-message-bubble", inputs: ["message", "isMine", "isNew"] }], directives: [{ type: i2.NzImageDirective, selector: "img[nz-image]", inputs: ["nzSrc", "nzSrcset", "nzDisablePreview", "nzFallback", "nzPlaceholder"], exportAs: ["nzImage"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ImageElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-image-element', template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <img class=\"image-element\" nz-image [nzSrc]=\"imageUrl\">\r\n</app-message-bubble>\r\n", styles: [".image-element{max-width:250px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }], isMine: [{
                type: Input
            }], payload: [{
                type: Input
            }], percent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtZWxlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVuY2VudC1pbS9zcmMvbWVzc2FnZS9tZXNzYWdlLWVsZW1lbnQvaW1hZ2UtZWxlbWVudC9pbWFnZS1lbGVtZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9tZXNzYWdlL21lc3NhZ2UtZWxlbWVudC9pbWFnZS1lbGVtZW50L2ltYWdlLWVsZW1lbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTekQsTUFBTSxPQUFPLHFCQUFxQjtJQU1oQyxnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO1FBQ04sTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNsRSxDQUFDOztrSEFkVSxxQkFBcUI7c0dBQXJCLHFCQUFxQixtSkNUbEMsOEpBR0E7MkZETWEscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLG1CQUFtQjswRUFLcEIsT0FBTztzQkFBZixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICd0aW0tanMtc2RrJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pbWFnZS1lbGVtZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtZWxlbWVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtZWxlbWVudC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUVsZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgQElucHV0KCkgaXNNaW5lOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBheWxvYWQ6IGFueTtcclxuICBASW5wdXQoKSBwZXJjZW50OiBudW1iZXI7XHJcbiAgaW1hZ2VVcmw6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMucGF5bG9hZC5pbWFnZUluZm9BcnJheVswXS5pbWFnZVVybDtcclxuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLmltYWdlVXJsID0gJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmltYWdlVXJsID0gdXJsLnNsaWNlKDAsIDIpID09PSAnLy8nID8gYGh0dHBzOiR7dXJsfWAgOiB1cmw7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8YXBwLW1lc3NhZ2UtYnViYmxlIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiBbaXNNaW5lXT1cImlzTWluZVwiPlxyXG4gIDxpbWcgY2xhc3M9XCJpbWFnZS1lbGVtZW50XCIgbnotaW1hZ2UgW256U3JjXT1cImltYWdlVXJsXCI+XHJcbjwvYXBwLW1lc3NhZ2UtYnViYmxlPlxyXG4iXX0=