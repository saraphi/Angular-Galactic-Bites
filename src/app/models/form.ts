export interface Form {
    checkErrors(): boolean;
    resetErrors(): void;
    onSubmit(): void;
}