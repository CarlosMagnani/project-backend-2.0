export abstract class Entity<T> {
    readonly _id: string;
    public props: T;

    get id() {
        return this._id;
    }

    constructor(props: T) {
        this.props = props;
    }
}