export class CustomMap {
    private googleMap: google.maps.Map;

    constructor() {
        this.initMap();
    }
    get getGoogleMap() {
        return this.googleMap;
    }

    async initMap(){
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        this.googleMap = new Map(document.getElementById("map_canvas") as HTMLElement, {
            center: { lat: 0, lng: 0 },
            zoom: 1,
        });
    }
}