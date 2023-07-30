import { User } from "./models/User";
import { Company } from "./models/Company";
import { CustomMap } from "./models/CustomMap";

const user = new User();
const company = new Company();

const map_obj = new CustomMap();

map_obj.addMarker({
    location: user.getLocation,
    name: user.getName
});
map_obj.addMarker({
    location: company.getLocation,
    name: company.getCompanyName
});


console.log(company, user);





