//Prints out all the values of property if it starts with "r" or is odd

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const property in statistics) {
    let start = property.charAt(0);
    if(start == "r" || statistics[property]%2 == 1 ){
        console.log(statistics[property]);
    }
}