interface UserProps {
    name?: string;
    age?: number;
}

export class User {
    constructor(private data: UserProps) {
        console.log(this.data);
    }

    get(propName: string): string | number {
        return this.data[propName];
    }

    set(update: User): void {
        Object.assign(this.data, update);
    }
}
