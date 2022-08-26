export interface ISnackbarProps {
    className?: string;
    label: string;
    type: 'Success' | 'Error' | 'Message';
    open?: boolean;
    onClose?: () => void;
}
