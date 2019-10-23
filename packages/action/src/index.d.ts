import { Plugin } from '@auto.pro/core';
export declare type ClickFunction = (x: number, y: number, delay?: [number, number] | [600, 800]) => any;
export declare type SwipeFunction = (startPoint: [number, number], endPoint: [number, number], duration?: number) => any;
export declare let click: ClickFunction;
export declare let swipe: SwipeFunction;
declare const Action: Plugin;
export default Action;