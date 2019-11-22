export class Month {
    public orderNumber: number;
    public name: string;

    constructor(orderNumber: number, name: string) {
        this.orderNumber = orderNumber;
        this.name = name;
    }

    public static byMonthNumber(orderNumber: number): Month {
        switch (orderNumber) {
            case 1: { return new this(orderNumber, 'january') }
            case 2: { return new this(orderNumber, 'february') }
            case 3: { return new this(orderNumber, 'march') }
            case 4: { return new this(orderNumber, 'april') }
            case 5: { return new this(orderNumber, 'may') }
            case 6: { return new this(orderNumber, 'june') }
            case 7: { return new this(orderNumber, 'july') }
            case 8: { return new this(orderNumber, 'august') }
            case 9: { return new this(orderNumber, 'september') }
            case 10: { return new this(orderNumber, 'october') }
            case 11: { return new this(orderNumber, 'november') }
            case 12: { return new this(orderNumber, 'december') }
        }
        throw new Error("Invalid month number");
    }

    public static byMonthName(name: string): Month {
        // TODO zrobić if albo switch ze względu na miesiąc
        switch (name) {
            case 'january':
                return new this(1, name);
            case 'february':
                return new this(2, name);
            case 'march':
                return new this(3, name);
            case 'april':
                return new this(4, name);
            case 'may':
                return new this(5, name);
            case 'june':
                return new this(6, name);
            case 'july':
                return new this(7, name);
            case 'august':
                return new this(8, name);
            case 'september':
                return new this(9, name);
            case 'october':
                return new this(10, name);
            case 'november':
                return new this(11, name);
            case 'december':
                return new this(12, name);
        }
        throw new Error("Invalid month name");
    }
}
