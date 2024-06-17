export let defaultOwner = { firstName: "Martic", lastName: "Fowler" };

export const spaceship = {
  owner: {
    firstName: "",
    lastName: "",
  },
};

spaceship.owner = defaultOwner;

defaultOwner = { firstName: "Rebecca", lastName: "Parsons" };
