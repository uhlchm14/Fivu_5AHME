//TypeScript

export class Person {

    private _vorname: string;
    private _nachname: string;
    private _birthYear: number;

    constructor(vorname: string, nachname: string, birthYear: number) {
        this._vorname = vorname;
        this._nachname = nachname;
        this._birthYear = birthYear;

    }

    public get vorname(): string {
        return this._vorname;
    }
    public get nachname(): string {
        return this._nachname;
    }
    public get birthYear(): number {
        return this._birthYear;
    }

}