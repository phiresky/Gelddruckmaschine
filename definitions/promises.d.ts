export type CheckedPromise<T> = Promise<{ success: true; value: T } | { success: false; error: TypedError }>;

export interface TypedError {
	message: string;
	canRetry: boolean;
	origin: string;
	raw?: any;
}
