import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../message-bubble/message-bubble.component";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/icon";
export class FileElementComponent {
    constructor() { }
    ngOnInit() {
        this.fileUrl = this.payload.fileUrl;
        this.fileName = this.payload.fileName;
        this.getSize();
    }
    downloadFile() {
        // 浏览器支持fetch则用blob下载，避免浏览器点击a标签，跳转到新页面预览的行为
        if (window.fetch) {
            fetch(this.fileUrl)
                .then(res => res.blob())
                .then(blob => {
                let a = document.createElement('a');
                let url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = this.fileName;
                a.click();
            });
        }
        else {
            let a = document.createElement('a');
            a.href = this.fileUrl;
            a.target = '_blank';
            a.download = this.fileName;
            a.click();
        }
    }
    getSize() {
        const size = this.payload.fileSize;
        if (size > 1024) {
            if (size / 1024 > 1024) {
                this.fileSize = `${this.toFixed(size / 1024 / 1024)} Mb`;
                return;
            }
            this.fileSize = `${this.toFixed(size / 1024)} Kb`;
            return;
        }
        this.fileSize = `${this.toFixed(size)}B`;
    }
    toFixed(number, precision = 2) {
        return number.toFixed(precision);
    }
}
FileElementComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: FileElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FileElementComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: FileElementComponent, selector: "app-file-element", inputs: { message: "message", isMine: "isMine", payload: "payload" }, ngImport: i0, template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <div class=\"file-element-wrapper\" title=\"\u5355\u51FB\u4E0B\u8F7D\" (click)=\"downloadFile()\">\r\n    <div class=\"header\">\r\n      <i nz-icon nzType=\"file-text\" nzTheme=\"outline\">\r\n      </i>\r\n\r\n      <div class=\"file-element\">\r\n        <span class=\"file-name\">{{ fileName }}</span>\r\n        <span class=\"file-size\">{{ fileSize  }}</span>\r\n      </div>\r\n    </div>\r\n    <!-- <nz-progress [nzPercent]=\"message.progress*100\"></nz-progress> -->\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".file-element-wrapper{cursor:pointer}.header{display:flex}i{font-size:40px!important}.file-element{display:flex;flex-direction:column;margin-left:12px}.file-size{font-size:12px;padding-top:5px}\n"], components: [{ type: i1.MessageBubbleComponent, selector: "app-message-bubble", inputs: ["message", "isMine", "isNew"] }], directives: [{ type: i2.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: FileElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-file-element', template: "<app-message-bubble [message]=\"message\" [isMine]=\"isMine\">\r\n  <div class=\"file-element-wrapper\" title=\"\u5355\u51FB\u4E0B\u8F7D\" (click)=\"downloadFile()\">\r\n    <div class=\"header\">\r\n      <i nz-icon nzType=\"file-text\" nzTheme=\"outline\">\r\n      </i>\r\n\r\n      <div class=\"file-element\">\r\n        <span class=\"file-name\">{{ fileName }}</span>\r\n        <span class=\"file-size\">{{ fileSize  }}</span>\r\n      </div>\r\n    </div>\r\n    <!-- <nz-progress [nzPercent]=\"message.progress*100\"></nz-progress> -->\r\n  </div>\r\n</app-message-bubble>\r\n", styles: [".file-element-wrapper{cursor:pointer}.header{display:flex}i{font-size:40px!important}.file-element{display:flex;flex-direction:column;margin-left:12px}.file-size{font-size:12px;padding-top:5px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }], isMine: [{
                type: Input
            }], payload: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1lbGVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9tZXNzYWdlL21lc3NhZ2UtZWxlbWVudC9maWxlLWVsZW1lbnQvZmlsZS1lbGVtZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10ZW5jZW50LWltL3NyYy9tZXNzYWdlL21lc3NhZ2UtZWxlbWVudC9maWxlLWVsZW1lbnQvZmlsZS1lbGVtZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7OztBQVN6RCxNQUFNLE9BQU8sb0JBQW9CO0lBVy9CLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxZQUFZO1FBQ1YsNENBQTRDO1FBQzVDLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDcEIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7WUFDZixJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFO2dCQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3pELE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2xELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDM0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxNQUFjLEVBQUUsU0FBUyxHQUFHLENBQUM7UUFDbkMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2lIQXZEVSxvQkFBb0I7cUdBQXBCLG9CQUFvQiw4SENUakMsMmtCQWNBOzJGRExhLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSxrQkFBa0I7MEVBTW5CLE9BQU87c0JBQWYsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICd0aW0tanMtc2RrJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1maWxlLWVsZW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWVsZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtZWxlbWVudC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlRWxlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XHJcbiAgQElucHV0KCkgaXNNaW5lOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHBheWxvYWQ6IGFueTtcclxuXHJcblxyXG4gIGZpbGVVcmw6IHN0cmluZztcclxuICBmaWxlTmFtZTogc3RyaW5nO1xyXG4gIGZpbGVTaXplOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5maWxlVXJsID0gdGhpcy5wYXlsb2FkLmZpbGVVcmw7XHJcbiAgICB0aGlzLmZpbGVOYW1lID0gdGhpcy5wYXlsb2FkLmZpbGVOYW1lO1xyXG4gICAgdGhpcy5nZXRTaXplKCk7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICAvLyDmtY/op4jlmajmlK/mjIFmZXRjaOWImeeUqGJsb2LkuIvovb3vvIzpgb/lhY3mtY/op4jlmajngrnlh7th5qCH562+77yM6Lez6L2s5Yiw5paw6aG16Z2i6aKE6KeI55qE6KGM5Li6XHJcbiAgICBpZiAod2luZG93LmZldGNoKSB7XHJcbiAgICAgIGZldGNoKHRoaXMuZmlsZVVybClcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmJsb2IoKSlcclxuICAgICAgICAudGhlbihibG9iID0+IHtcclxuICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgYS5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgYS5kb3dubG9hZCA9IHRoaXMuZmlsZU5hbWU7XHJcbiAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgYS5ocmVmID0gdGhpcy5maWxlVXJsO1xyXG4gICAgICBhLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gICAgICBhLmRvd25sb2FkID0gdGhpcy5maWxlTmFtZTtcclxuICAgICAgYS5jbGljaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2l6ZSgpIHtcclxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnBheWxvYWQuZmlsZVNpemU7XHJcbiAgICBpZiAoc2l6ZSA+IDEwMjQpIHtcclxuICAgICAgaWYgKHNpemUgLyAxMDI0ID4gMTAyNCkge1xyXG4gICAgICAgIHRoaXMuZmlsZVNpemUgPSBgJHt0aGlzLnRvRml4ZWQoc2l6ZSAvIDEwMjQgLyAxMDI0KX0gTWJgO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpbGVTaXplID0gYCR7dGhpcy50b0ZpeGVkKHNpemUgLyAxMDI0KX0gS2JgO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpbGVTaXplID0gYCR7dGhpcy50b0ZpeGVkKHNpemUpfUJgO1xyXG4gIH1cclxuXHJcbiAgdG9GaXhlZChudW1iZXI6IG51bWJlciwgcHJlY2lzaW9uID0gMikge1xyXG4gICAgcmV0dXJuIG51bWJlci50b0ZpeGVkKHByZWNpc2lvbik7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8YXBwLW1lc3NhZ2UtYnViYmxlIFttZXNzYWdlXT1cIm1lc3NhZ2VcIiBbaXNNaW5lXT1cImlzTWluZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJmaWxlLWVsZW1lbnQtd3JhcHBlclwiIHRpdGxlPVwi5Y2V5Ye75LiL6L29XCIgKGNsaWNrKT1cImRvd25sb2FkRmlsZSgpXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZmlsZS10ZXh0XCIgbnpUaGVtZT1cIm91dGxpbmVcIj5cclxuICAgICAgPC9pPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpbGUtZWxlbWVudFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1uYW1lXCI+e3sgZmlsZU5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxlLXNpemVcIj57eyBmaWxlU2l6ZSAgfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIDxuei1wcm9ncmVzcyBbbnpQZXJjZW50XT1cIm1lc3NhZ2UucHJvZ3Jlc3MqMTAwXCI+PC9uei1wcm9ncmVzcz4gLS0+XHJcbiAgPC9kaXY+XHJcbjwvYXBwLW1lc3NhZ2UtYnViYmxlPlxyXG4iXX0=