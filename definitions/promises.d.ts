export type CheckedPromiseReturn<T> = { success: true; value: T } | { success: false; error: TypedError };

export type CheckedPromise<T> = Promise<CheckedPromiseReturn<T>>;

export interface TypedError {
	message: string;
	canRetry: boolean;
	origin: string;
	raw?: any;
}
