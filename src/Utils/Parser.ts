import { TBook, TBorrowingHistory } from '../Providers/Data/Types';
import { SimpleObject } from '../Components/SimpleTable/Types';

export class Parser {
    constructor() {}

    static listByRank(data: TBook[]): SimpleObject[] {
        const result: SimpleObject[] = [];

        data.forEach((e, k) => {
            result.push({
                "Rang": k + 1,
                "Titre": e.titre || '',
                "Autheur": e.author?.pseudo?.split(" ")[0] || '',
                "Catégorie": e.category?.name || '',
                "Nombre de page": e.pageNumber || 0,
                "Nombre d'emprunt": e.loanNumber || 0,
            });
        });

        return result;
    }
}
