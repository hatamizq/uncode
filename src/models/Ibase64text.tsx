export interface IBase64TextModel {
    encode(base: string): string;
    decode(base: string): string;
}