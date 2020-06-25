const monthShortNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export class Months {
    public static getMonthShortName(monthSerialNumber: number): string {
        return monthShortNames[monthSerialNumber];
    }

    public static getMonthIndexFromShortName(monthShortName: string) {
        return monthShortNames.indexOf(monthShortName);
    }
}
