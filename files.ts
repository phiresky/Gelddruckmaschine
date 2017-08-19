import * as fs from 'fs'

export async function readFileAsync(path: string) {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(path, "utf8", (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}
export async function readFileToObjectAsync<T>(path: string) {
    return new Promise<T>((resolve, reject) => {
        readFileAsync(path).catch((error) => reject(error))
            .then((result) => {
                resolve(JSON.parse(result!) as T);
            });
    });
}

export async function writeFileAsync(path: string, data: any) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}
export async function writeObjectToFileAsync(path: string, object: {}) {
    return writeFileAsync(path, JSON.stringify(object));
}

export async function existsAsync(path: string) {
    return new Promise((resolve, reject) => {
        fs.exists(path, (exists) => {
            resolve(exists);
        });
    });
}