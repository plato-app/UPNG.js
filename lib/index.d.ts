export interface IPNG {
    width: number;
    height: number;
    depth: number;
    ctype: number;
    frames: any;
    tabs: any;
    data: Uint8Array;
}

export function decode(buffer: ArrayBuffer): IPNG;
