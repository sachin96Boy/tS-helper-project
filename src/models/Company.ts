import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';


export class Company {
    private companyName: string;
    private catchPrase: string;
    private location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = faker.company.name();
        this.catchPrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    get getCompanyName() {
        return this.companyName;
    }

    get getCompanyCatchPhrase() {
        return this.catchPrase;
    }

    get getLocation() {
        return this.location;
    }
}