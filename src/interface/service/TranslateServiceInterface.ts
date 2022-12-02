export interface TranslateServiceInterface {
    t(key: string, replace: object, lang?: string): string;
    tValidate(rule: string, replace: object, lang?: string): string;
}