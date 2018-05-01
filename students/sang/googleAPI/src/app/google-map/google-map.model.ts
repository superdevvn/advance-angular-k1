export class GoogleMapOption implements IGoogleMapOption {
    center: { lat: number, lng: number }
    zoom: number
    constructor(option: IGoogleMapOption){
        this.center = option.center || {lat:10.8230989 ,lng:106.6296638};
        this.zoom = option.zoom || 15
    }

}
export interface IGoogleMapOption {
    center?: { lat: number, lng: number }
    zoom?: number
}