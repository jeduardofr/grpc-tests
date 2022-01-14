```ts
interface CustomError<T> {
    hasError(): boolean;
    obtain(): T;
}

class ErrorOr<T> implements CustomError<T> {
    constructor(private error_: boolean = false, private data_?: T) {}

    hasError() {
        return this.error_ === true;
    }

    obtain() {
        return this.data_!;
    }

    static createFrom<T>(error: boolean, data?: T) {
        return new ErrorOr<T>(error, data);
    }
}

type Something = {
    code: number;
}

function read(email: string): ErrorOr<Something> {
    if (Math.random() > 5) {
        return ErrorOr.createFrom<Something>(true);
    }

    return ErrorOr.createFrom<Something>(false, {
        code: 1
    });
}

const result = read('something@fake.com');

if (result.hasError()) {

}

const something = result.obtain();
```