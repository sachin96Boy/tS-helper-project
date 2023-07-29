import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

class User {
    private  name: string;
    private  location: {
        lat:number;
        lng:number;
    };


    constructor(){
        this.name = faker.person.firstName('male');
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    get getName(){
        return this.name;
    }

    get getLocation(){
        return this.location;
    }

}

export default User;