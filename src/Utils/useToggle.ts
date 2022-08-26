import {useState} from "react";

export const useToggle = () => {
    const [state, setState] = useState<boolean>(false);
    return {state, toggle: ()=> setState(!state)};
}