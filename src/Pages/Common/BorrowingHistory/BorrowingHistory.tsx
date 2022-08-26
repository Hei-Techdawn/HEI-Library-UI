import {FC} from "react";
import {DataProvider} from "../../../Providers/Data/DataProvider";

export const BorrowingHistory: FC = () => {
    const provider = new DataProvider("/book", {password: "", username: ""})
    return (<div>
        <div>
            {JSON.stringify(provider.getAll())}
        </div>
    </div>)
}