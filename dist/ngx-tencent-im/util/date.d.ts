/**
 * 返回年月日
 * @export
 * @param {Date} date
 * @param {string} [splitor='-']
 * @returns
 */
export declare function getDate(date: any, splitor?: string): string;
/**
 * 返回时分秒/时分
 * @export
 * @param {*} date
 * @param {boolean} [withSecond=false]
 * @returns
 */
export declare function getTime(date: any, withSecond?: boolean): string;
export declare function getFullDate(date: any): string;
export declare function isToday(date: any): boolean;
