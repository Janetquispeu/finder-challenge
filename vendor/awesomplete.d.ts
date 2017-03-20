declare class Awesomplete {
    constructor(input: HTMLElement | string, o: Object);
    static all: Array<any>;
    static $$: (expr: string | NodeSelector, con?: any) => NodeList;
    static ITEM: (text: string, input: string) => HTMLElement;
    static $: {
        (expr: string | Element, con?: NodeSelector) : string | Element;
        regExpEscape: (s: {replace: (arg0: RegExp, arg1: string) => void}) => any;
        create: (tag: string, o: any) => HTMLElement;
        fire: (target: EventTarget, type: string, properties: any) => any;
        siblingIndex: (el: Element) => number;
    };
    static FILTER_STARTSWITH: (text: string, input: string) => boolean;
    static FILTER_CONTAINS: (text: string, input: string) => boolean;
    static SORT_BYLENGTH: (a: number | any[], b: number | any[]) => number;
    static REPLACE: (text: any) => void;
    next: () => void;
    container: HTMLElement;
    select: (selected?: HTMLElement, originalTarget?: HTMLElement) => void;
    previous: () => void;
    index: number;
    opened: number;
    list: string | string[] | Element;
    input: HTMLElement | string;
    goto: (i: number) => void;
    ul: HTMLElement;
    close: () => void;
    evaluate: () => void;
    selected: boolean;
    open: () => void;
    status: HTMLElement;
}