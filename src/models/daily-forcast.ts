import { Temperature } from "./temperture";
interface Period {
    Icon:number;
    IconPhrase:string;
    HasPrecipitation:boolean;
}
export interface DailyForcast {
    Date:string;
    EpochDate:number;
    Temperature:Temperature;
    Day:Period;
    Night:Period;
    Sources:string[];
    MobileLink:string;
    Link:string;
}