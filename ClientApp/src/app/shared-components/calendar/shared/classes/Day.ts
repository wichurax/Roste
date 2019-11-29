export class Day{
    public value: Date;

    constructor() {
    }

    public static create(value: Date) {
        let day = new this;
        day.value = value;
        return day;
    }

    public static empty() {
        return new this;
    }
}
