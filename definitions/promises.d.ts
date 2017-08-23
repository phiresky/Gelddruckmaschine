export type CheckedPromise<T> = Promise<T | Failure>;

export interface Failure {
	message: string;
	canRetry: boolean;
	origin: string;
	code: number;
}
