const person = {
  firstName: "Sitaramaraju",
  lastName: "Vadapalli",
  // fullName() {
  //     return `${person.firstName} ${person.lastName}`;
  // }
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.fullName = "pandu vadapalli";
console.log(person.fullName);
