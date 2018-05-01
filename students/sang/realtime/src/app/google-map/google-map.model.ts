export class GoogleMapOption implements IGoogleMapOption {
    center: { lat: number, lng: number }
    
    constructor(option: IGoogleMapOption){
        this.center = option.center || {lat:10.8230989 ,lng:106.6296638};
        
    }

}
export interface IGoogleMapOption {
    center?: { lat: number, lng: number }
  
}