export enum ESbType {
    SUCCESS = 'Success',
    ERROR = 'Error',
    MESSAGE = 'Message',
}
export interface ISnackbarProps {
    className?: string;
    label: string;
    type: ESbType;
    open: boolean;
    close: () => void;
}
