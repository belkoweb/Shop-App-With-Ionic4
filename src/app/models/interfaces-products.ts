export interface Product {
    title : String;
    description : String;
    pictures : String[];
    id : String;
    price : number;
    category : String;
    state : String;
    createAt:Date;
    availability : Availability;
    city:String;
    averageStar:number;
}

export interface Availability {
    available: boolean ;
    type:String;
    feed?:number;
}
