/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { InternType } from "./models/intern.type";

export class InternRepository {
    private _interns: Array<InternType> = []

    constructor() {
        this._populate()
    }

    findAll(): Array<InternType> {
        return this._interns;
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findOne(id: number): InternType | null {
        return null;
    }

    add(intern: InternType): InternType {
        throw new Error('Not implemented yet');
    }

    delete(id: number): void {}

    update(intern: InternType): void {}

    /**
     * Just for mock purpose
     * Populate a list with some fixed datas (Fixture)
     */
    private _populate(): void {
        this._interns.push({
            id: 1,
            lastname: 'Aubert',
            firstname: 'Jean-Luc',
            company: {
                id: 1,
                name: 'Aélion'
            },
            poe: {
                id: 1,
                name: 'POEC Dev Mobile',
                beginAt: new Date(2024, 5, 24),
                endAt: new Date(2024, 8, 24)
            }
        })
    }
}
