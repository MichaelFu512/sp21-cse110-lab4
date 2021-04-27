let statstics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const prop in statstics) {
    if(prop.charAt(0) == 'r' || statstics[prop] % 2 == 1) {
        console.log(statstics[prop]);
    }
}