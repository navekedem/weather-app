interface Maximum {
    Value:number;
    Unit:string;
    UnitType:number;
}
interface Minimum {
    Value:number;
    Unit:string;
    UnitType:number;
}
export interface Temperature {
    Maximum:Maximum;
    Minimum:Minimum;
}