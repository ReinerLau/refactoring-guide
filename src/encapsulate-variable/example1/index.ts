import { getDefaultOwner, setDefaultOwner } from "./defaultOwner";

export const spaceship = {
  owner: {
    firstName: "",
    lastName: "",
  },
};

spaceship.owner = getDefaultOwner();

setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });
