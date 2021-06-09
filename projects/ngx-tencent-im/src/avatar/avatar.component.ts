import { Component, Input, OnInit, } from '@angular/core';
import { TIM } from '../shared.data';

@Component({
  selector: 'im-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less'],
})
export class AvatarComponent implements OnInit {
  @Input() shape: 'circle' | 'square' = 'circle';
  @Input() size: 'large' | 'small' | 'default' | number = 'large';
  @Input() type: string = 'C2C';
  @Input() title: string;
  @Input() set src(value: string) {
    this._src = value;
    if (/^(https:|http:|\/\/)/.test(value)) {
      this.avatarSrc = value;
    } else {
      this.avatarSrc = this.getDefaultAvatar();
    }
  };
  get src() {
    return this._src;
  }

  private _src: string;

  avatarSrc: string;

  constructor() { }

  ngOnInit(): void {
  }


  getDefaultAvatar() {
    switch (this.type) {
      case 'C2C':
        // 个人头像
        return 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-2.png';
      case 'GROUP':
        // 群默认头像
        return 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-3.png';
      case TIM.TYPES.CONV_SYSTEM:
        return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACpCAMAAAHy0MbyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJYUExURQrBYAvBYRPDZhzGbCXIcSrJdSHHbxjFaQ7CYwzBYSnJdEzSi3bcpqLnw87z3+X47uj58Ov68uz68+n58ef579/36rzu05Djt2TYmz7OghnFai/KeIHfrcPw2OP47fz+/f////P8+Nb15K7ry1vVlBrFaw7CYlDTjqrqyPP899j15YrhsxDCZFfUksDv1vr+/C7KdyzKdq3qynLbo2HXmf7//rTszhTDZo/jtk7SjCjJc7nt0fX9+THLes3y3/3//oXgsA3CYjTMe5HjuA/CY8/z4IDfrRbEaLft0GbYnO779Pb9+cLv1x3GbNL04ub575zmv5flvEDPgzDLeaXoxIzitPD79TXMfB7GbeL47F7WlhLDZavqyfj9+03SjN326YvitEbQh3jdqO/79CLHcLHrzE/TjSPHcOT47vH79rHrzUvSivf9+vn++8zy3lXUkdf15SDHblnVk+D36ybIclrVlGfZnHjdpznNf1HTjhfEadv26I3itUfRiMfx26Pow0HPhJPkuZjlvMHv1zjNfkTQhWnZnhvFa8ry3TLLepXkurbt0Gvan4LfrknRiV/Wl9X05HHbo7/v1Z3mv8jx24jhskjRiTrNf8nx3Mvy3WLXmUfQh0XQhu3681LTj9n15ljVk2XYm6/ry+H37Or68bXsz2PYmjfMfW3aoLvu0zbMfTPLe77u1S7KeErRirDrzNr253fcpkPPhSvJdafpxr3u1N736n/frPL89o7itW/boWDXl3ndqJvmvvv+/Xveqsbx2tz26fT8+BHDZD3OgYTgr4fhsQAAAKRC35oAAADIdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A9ppxxwAAAAlwSFlzAAAXEQAAFxEByibzPwAABVpJREFUaEPt2zuP2koUB3BaN1dCLikwols5fVb5Cim3QaxEtNomDdJKaHWbbaBASPcTUKVBShv6NNH6e2Uefxs/5u0H7NX5NXiOzwwjY+yxPR4N422MhYqEw/KFiDbiZ3UY0V7D1ThizDMiAmIcIkIURaycxlGEQCFLRvUvlDJ8/j+MP2OhTGymxoqxCDc2ioz6/mgo5hB1C39BtBZGkEFAQIiLERKiKN2xtc0ffpSkD1MsVhzxSZxgoydLlA2QKfyLmA7S4Buiaitk5RBWQ04BYTXkFBBWQ04BYTXkFA6IqyCl5AvWNGB9DVbWYW3NGWvVZGOZsb8X8i+MAiHe5rOFeYfMbcSuliQzlA3WSGUQ0fqGPAExHWRJvxFUwzk2h6gacnKIqiEnt0VYCTm5FcJKyMlVzrB1yMl9tFzTBn5ASgFxFWRc6I+YSCjDmoZGDzisq8PaKuWQR52qaTi/BKjB2jo28mZjb7k2TkRRLGv9lCcgTUdrkiQbpbZTVk5003VYH2X3lo4SQkiAN3EokhYbBNuqDFWkN6xqoTRWKmt5d2SJZhSQESQfAyohJwRa0ECSvzka0LhHmrcZGtBYI80b6usYR1kG7ARuRO1KH63d0D8GausFdfiAykbI9fAdNS0+Id2RU2cl1HCivHrQ8bgPihpuvqOSi/RxFRd4XSwyU1bEIndKUcVbym8fYplhBeNlswfWVIJuTXh35WIH7lhjvEHhAcEuRO9/ZKOrPSKEEEIIIVey+e+f8Wy8e3V4yuxuWb4AV02QCFO/rH9CvB3FLRPlbB5P6lsmWBnuBQ3VYXUwNNPg8NTPhA+o1Vr9eKb7UUgJUnt8WDFHTgDDXTkGSQHM97ncHt6ooAGN4NtctstZZHnbo74O0rxpHsgVkObtHvV1Qq+4be2G3hCndiVqV6J2pb7afUJ9HbcpYk316Xx15smAeqiuhzxPW9TWq8xQdmW9u+53J7VQ3Dc0CJgCa98KHJLd2c5tOaQ7QzUr46yoJpeNK3ndY85QyYXPcApV3KCOA9cfTZqglp1fu+7/utT9Z9NNoFJLj2s8nuBYZSxx1dKd919OTKxixLOiNC+OnnkJBdtUKzN+ALo8gub/byy2xVq6bMRKoR3WxekjllfsJw1+fl7H+pjEfHd65ztKV90did/q8hynw+lmomEIfi6mdEKr284nx02y7GlPU+4IIYQQQgghhBBisVxuNptOp4j0YpOt60/wF/MfN9nvHzt0UGH2OfTJUT9eTdMipPmt9Hhj2K4Vr6hwTYcFOuOiu3lUYZauWzZ31S3s90hD2F3vQKF4xdBudq3/3G90wFfoc+t2grYtN75Gf1/x5QEWaGJAL7YpBSah0w3C2SZWGI0HPzzoJ0+66GZ2rDuPV+tUWkyvDGKbvGOx7vbxn9UnfG+g1cDnirbdfUE7A6Hu9om62yfqbp+ou336YN1tMTjn4oFPwm5TR/U6m+flJOCKvSr8vZQA5ZlggQa8/jn7TMTU8ZpZ20ary7SLfMpiv9J2V2klsfuE3WBHfFcnMjTal32buwsKcfgbcQ463bRSfxeZ6Rpf0a2A9xtcTLo4fKn0soH3fAp6P/o4xfWw3+amPfzhetpzuR2+olv3fMp89+56HJ1F+4kCdpQTihVnuc/HB5TLDpOB75VJE9GjZKX6cow1Bx0xWkR4A+AB5ZIU58Gejq5hnnGUaxxCMdacnlC+EZP8qHwqvwyB/ZZF0xt7RSJdF4eN6Wl7PP7asoHmFNv2J5JuyVk3Wnu8yt/fKkq32Jwlq/tbflMmet/e/ZEdncZfj0Gvvw4s35ztXpkjhBBCCCGkrdHoLzv9X1u4OdoGAAAAAElFTkSuQmCC';
      default:
        // 默认头像
        return 'https://imgcache.qq.com/open/qcloud/video/act/webim-avatar/avatar-1.png';
    }
  }

}
