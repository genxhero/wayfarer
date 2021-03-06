
const VALID_MAKES = [
    "Acura",
    "Alfa Romeo",
    "Ascari",
    "Aston Martin",
    "Audi",
    "Aurica",
    "Bentley",
    "Bmw",
    "Buick",
    "Bxr",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Datsun",
    "Dodge",
    "Edsel",
    "Elio",
    "Falcon",
    "Ferrari",
    "Fiat",
    "Ford",
    "Geo",
    "Gm",
    "Gmc",
    "Hennessey",
    "Honda",
    "Hyundai",
    "Infiniti",
    "Isuzu",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Local",
    "Lotus",
    "Lyons",
    "Maserati",
    "Mazda",
    "Mercedes",
    "Mercury",
    "Mitsubishi",
    "Mosler",
    "Nissan",
    "Oldsmobile",
    "Peterbilt",
    "Plymouth",
    "Pontiac",
    "Rolls Royce",
    "Saturn",
    "Scion",
    "Studebaker",
    "Subaru",
    "Suziki",
    "Toyota",
    "Volkswagon"
];

const isMake = value  => {

  let normalized = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  return VALID_MAKES.includes(normalized);
   
 };
module.exports = isMake;


// module.exports = isMake;