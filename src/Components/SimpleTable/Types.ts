import {ReactNode} from "react";

export type SimpleObject = {
    [p: string]: string | number | boolean;
};

export type TableTools = {
    data: SimpleObject[];
    className?: string;
    headerOnClick?: (header: string) => void;
    elementOnClick?: (data: SimpleObject) => void;
    pagination: ReactNode;
};
