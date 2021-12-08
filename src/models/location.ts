interface AdministrativeArea {
    ID:string;
    LocalizedName:string;
}
interface Country {
    ID:string;
    LocalizedName:string;
}
export interface Location{
    Version: number;
    Key:string;
    Type:string;
    Rank: number;    
    LocalizedName:string;
    Country:Country;
    AdministrativeArea:AdministrativeArea;
}