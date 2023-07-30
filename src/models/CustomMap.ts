interface Mappable {
    location: {
        lat: number;
        lng: number; 
    };
    name: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    private mapsMarker: google.maps.marker.AdvancedMarkerElement

    constructor() {
        this.initMap();
    }
    get getGoogleMap() {
        return this.googleMap;
    }
    get getMarker() {
        return this.mapsMarker;
    }

    async initMap() {
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
        this.googleMap = new Map(document.getElementById("map_canvas") as HTMLElement, {
            center: { lat: 0, lng: 0 },
            zoom: 1,
        });
        this.mapsMarker = new AdvancedMarkerElement();
    }

    addMarker(markerDetails: Mappable):void {
        this.mapsMarker.map = this.googleMap;
        this.mapsMarker.position = {
            lat: markerDetails.location.lat,
            lng: markerDetails.location.lng
        };
        this.mapsMarker.title = markerDetails.name;
    }
}