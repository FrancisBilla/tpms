export class Data {
    logged_date:string;
    total_project_hours: number;
    total_volunteering_hours:number;
    vacation: string;
    sick:string;

    public static addDays(date: Date, days: number): Date {
        date.setDate(date.getDate() + days);
        return date;
    }
}

