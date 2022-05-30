import { emojiMap, emojiUrl } from './emoji-map';
export function decodeText(payload) {
    let renderDom = [];
    let temp = payload.text;
    let left = -1;
    let right = -1;
    while (temp !== '') {
        left = temp.indexOf('[');
        right = temp.indexOf(']');
        switch (left) {
            case 0:
                if (right === -1) {
                    renderDom.push({
                        name: 'text',
                        text: temp
                    });
                    temp = '';
                }
                else {
                    let _emoji = temp.slice(0, right + 1);
                    if (emojiMap[_emoji]) {
                        renderDom.push({
                            name: 'img',
                            src: emojiUrl + emojiMap[_emoji]
                        });
                        temp = temp.substring(right + 1);
                    }
                    else {
                        renderDom.push({
                            name: 'text',
                            text: '['
                        });
                        temp = temp.slice(1);
                    }
                }
                break;
            case -1:
                renderDom.push({
                    name: 'text',
                    text: temp
                });
                temp = '';
                break;
            default:
                renderDom.push({
                    name: 'text',
                    text: temp.slice(0, left)
                });
                temp = temp.substring(left);
                break;
        }
    }
    return renderDom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb2RlLXRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGVuY2VudC1pbS9zcmMvdXRpbC9kZWNvZGUtdGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdqRCxNQUFNLFVBQVUsVUFBVSxDQUFDLE9BQVk7SUFDckMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ25CLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDeEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNmLE9BQU8sSUFBSSxLQUFLLEVBQUUsRUFBRTtRQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssQ0FBQztnQkFDSixJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDaEIsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDYixJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUUsSUFBSTtxQkFDWCxDQUFDLENBQUM7b0JBQ0gsSUFBSSxHQUFHLEVBQUUsQ0FBQztpQkFDWDtxQkFBTTtvQkFDTCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUNwQixTQUFTLENBQUMsSUFBSSxDQUFDOzRCQUNiLElBQUksRUFBRSxLQUFLOzRCQUNYLEdBQUcsRUFBRSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQzt5QkFDakMsQ0FBQyxDQUFDO3dCQUNILElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDbEM7eUJBQU07d0JBQ0wsU0FBUyxDQUFDLElBQUksQ0FBQzs0QkFDYixJQUFJLEVBQUUsTUFBTTs0QkFDWixJQUFJLEVBQUUsR0FBRzt5QkFDVixDQUFDLENBQUM7d0JBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGO2dCQUNELE1BQU07WUFDUixLQUFLLENBQUMsQ0FBQztnQkFDTCxTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNiLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQztnQkFDSCxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNWLE1BQU07WUFDUjtnQkFDRSxTQUFTLENBQUMsSUFBSSxDQUFDO29CQUNiLElBQUksRUFBRSxNQUFNO29CQUNaLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQzFCLENBQUMsQ0FBQztnQkFDSCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtTQUNUO0tBQ0Y7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW1vamlNYXAsIGVtb2ppVXJsIH0gZnJvbSAnLi9lbW9qaS1tYXAnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVUZXh0KHBheWxvYWQ6IGFueSkge1xyXG4gIGxldCByZW5kZXJEb20gPSBbXTtcclxuICBsZXQgdGVtcCA9IHBheWxvYWQudGV4dDtcclxuICBsZXQgbGVmdCA9IC0xO1xyXG4gIGxldCByaWdodCA9IC0xO1xyXG4gIHdoaWxlICh0ZW1wICE9PSAnJykge1xyXG4gICAgbGVmdCA9IHRlbXAuaW5kZXhPZignWycpO1xyXG4gICAgcmlnaHQgPSB0ZW1wLmluZGV4T2YoJ10nKTtcclxuICAgIHN3aXRjaCAobGVmdCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgaWYgKHJpZ2h0ID09PSAtMSkge1xyXG4gICAgICAgICAgcmVuZGVyRG9tLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiAndGV4dCcsXHJcbiAgICAgICAgICAgIHRleHQ6IHRlbXBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGVtcCA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgX2Vtb2ppID0gdGVtcC5zbGljZSgwLCByaWdodCArIDEpO1xyXG4gICAgICAgICAgaWYgKGVtb2ppTWFwW19lbW9qaV0pIHtcclxuICAgICAgICAgICAgcmVuZGVyRG9tLnB1c2goe1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdpbWcnLFxyXG4gICAgICAgICAgICAgIHNyYzogZW1vamlVcmwgKyBlbW9qaU1hcFtfZW1vamldXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0ZW1wID0gdGVtcC5zdWJzdHJpbmcocmlnaHQgKyAxKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbmRlckRvbS5wdXNoKHtcclxuICAgICAgICAgICAgICBuYW1lOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ1snXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0ZW1wID0gdGVtcC5zbGljZSgxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgLTE6XHJcbiAgICAgICAgcmVuZGVyRG9tLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogJ3RleHQnLFxyXG4gICAgICAgICAgdGV4dDogdGVtcFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRlbXAgPSAnJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZW5kZXJEb20ucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiAndGV4dCcsXHJcbiAgICAgICAgICB0ZXh0OiB0ZW1wLnNsaWNlKDAsIGxlZnQpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGVtcCA9IHRlbXAuc3Vic3RyaW5nKGxlZnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVuZGVyRG9tO1xyXG59XHJcbiJdfQ==