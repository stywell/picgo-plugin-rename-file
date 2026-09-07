import { PicGo } from 'picgo';
declare const _default: (ctx: PicGo) => {
    register: () => void;
    config: (ctx: any) => {
        name: string;
        type: string;
        alias: string;
        default: any;
        message: string;
        required: boolean;
    }[];
};
export = _default;
