/**
 * This file demonstrates how to use istanbul coverage tool
 *
 * @module lib/myclass
 *
 * @copyright 2015 commenthol
 * @license MIT
 */
/**
 * A simple class which contains an internal array
 * @constructor
 * @param {Object} [options] - options
 * @return {MyClass}
 */
export default class MyClass {
    constructor(options: any);
    /** @member {Object} */
    options: any;
    /** @member {Array} */
    array: any;
    /**
     * length of internal array
     * @return {Number} - length of array
     */
    length(): number;
    /**
     * push item to internal array
     * @param {Number} item
     * @return {Number} - item
     */
    push(item: number): number;
    /**
     * get the last item from the array
     * @return {Number} last item
     */
    last(): number;
    /**
     * multiply the last item on the array with `factor` and push it on the stack
     * @param {Number} [factor] - factor to multiply with. Default is 1
     * @return {Number} result of operation
     */
    mul(factor?: number | undefined): number;
    /**
     * add `sum` to the last item on the array and push it on the stack
     * @param {Number} [sum] - sum to add with. Default is 1
     * @return {Number} result of operation
     */
    add(sum?: number | undefined): number;
    untested(): number;
}
