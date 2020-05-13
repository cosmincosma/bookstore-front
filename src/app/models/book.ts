export class Book {

    id: number;
    title: string;
    description: string;
    publicationYear: number;
    numberOfPages: number;
    cost: number;
    language: Book.LanguageEnum;
    isbn: string;
    imageURL: string;
    availability: Book.AvailabilityEnum
}
export namespace Book {
    export enum LanguageEnum {
        ROMANIAN = <any> 'ROMANIAN',
        ENGLISH = <any> 'ENGLISH',
        ITALIAN = <any> 'ITALIAN',
        SPANISH = <any> 'SPANISH',
        FRENCH = <any> 'FRENCH'
    }

    export enum AvailabilityEnum {
        UNKNOWN = <any> 'UNKNOWN',
        AVAILABLE = <any> 'AVAILABLE',
        NOT_AVAILABLE = <any> 'NOT_AVAILABLE'
    }
}
