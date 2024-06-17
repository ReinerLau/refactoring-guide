import { defaultOwner, setDefaultOwner } from "./defaultOwner";

export const spaceship = {
  owner: {
    firstName: "",
    lastName: "",
  },
};

spaceship.owner = defaultOwner();

setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });
