import {User} from "./User";
import {Company} from "./Company";

// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };

    markerContent(): string;

    color: string;
}

export class CustomMap {
    private readonly googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        // Adding our popup window to show to user
        // when he clicked on the marker

        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent(),
        });

        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker);
        });
    }

    // ######### Bad Implementation #########
    // 1. Not Scalable --> User | Company | ParkingLot | Park
    // 2. Very tight coupling between our classes

    // addMarker(mappable: User | Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: mappable.location.lat,
    //             lng: mappable.location.lng
    //         }
    //     });
    // }

    // ######### Very Bad Implementation #########
    // A lot of code duplication, and direct
    // dependency on all other classes

    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng,
    //         }
    //     });
    // }
    //
    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng,
    //         }
    //     });
    // }
}
