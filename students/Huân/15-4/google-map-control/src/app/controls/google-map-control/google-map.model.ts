export class GoogleMapOption implements IGoogleMapOption {
    zoom: number;
    center: { lat: number, lng: number; };
    constructor(option: IGoogleMapOption) {
        this.zoom = option.zoom || 15;
        this.center = option.center || { lat: 10.8230989, lng: 106.6296638 };
    }
}

export interface IGoogleMapOption {
    zoom?: number;
    center?: { lat: number, lng: number; };
}