//Finish the for in loop??
//Given the below Object, write a for...in loop that will iterate through it 
//and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number. 
//done

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