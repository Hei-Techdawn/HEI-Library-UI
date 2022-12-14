import {ESbType} from "../../Components/Common/Snackbar/SnackbarInterface";
import {ReactNode} from "react";
import {TMenu} from "../../type";

export type TContextPrincipal = {
    openSnackBar: (label:string, type: ESbType) => void;
    openModal: (children: ReactNode)=> void;
}
