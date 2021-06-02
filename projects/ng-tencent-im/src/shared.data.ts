
import { InjectionToken } from '@angular/core';
import { NgTimConfig } from './im.type';

export const NG_Tim_CONFIG = new InjectionToken<NgTimConfig>('config');

export enum MESSAGE_STATUS {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error'
}
