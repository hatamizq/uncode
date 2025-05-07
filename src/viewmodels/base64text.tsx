import { IBase64TextViewModel } from "./Ibase64text";

export function useBase64TextViewModel(): IBase64TextViewModel {
    const encode = (base: string): string => {
        try {
            const bytes = new TextEncoder().encode(base);
            const binary = Array.from(bytes).map(byte => String.fromCharCode(byte)).join('');
            return btoa(binary);
          } catch {
            return 'Encoding error';
        }
    };
    
    const decode = (base: string): string => {
        try {
            const binary = atob(base);
            const bytes = new Uint8Array([...binary].map(char => char.charCodeAt(0)));
            return new TextDecoder().decode(bytes);
          } catch {
            return 'Decoding error';
        }
    };

    return {encode, decode}
}