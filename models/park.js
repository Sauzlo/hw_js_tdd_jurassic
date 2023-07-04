const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
};

Park.prototype.addDinosaurToCollection = function(dinosaur) {
    this.dinosaurCollection.push(dinosaur)
};

Park.prototype.removeDinosaurFromCollection = function(dinosaur) {
    const index = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(index, 1);
};

Park.prototype.popularDinosaur = function() {
    let mostPopular;
    let guests = 0;
    for (dinosaur of this.dinosaurCollection){
        if (dinosaur.guestsAttractedPerDay > guests){
            mostPopular = dinosaur;
            guests = dinosaur.guestsAttractedPerDay;
        };
    };
    return mostPopular
};

Park.prototype.findDinosaursBySpecies = function(species) {
    let dinosaurs = [];
    for (dinosaur of this.dinosaurCollection){
        if (dinosaur.species === species){
            dinosaurs.push(dinosaur);
        };
    };
    return dinosaurs;
};

Park.prototype.calculateDailyVisitors = function() {
    let total = 0;
    for (dinosaur of this.dinosaurCollection){
        total += dinosaur.guestsAttractedPerDay;
    };
    return total;
};

Park.prototype.calculateYearlyVisitors = function() {
    daily = this.calculateDailyVisitors();
    total = daily * 365;
    return total;
};

Park.prototype.calculateYearlyRevenue = function () {
    visits = this.calculateYearlyVisitors();
    revenue = visits * this.ticketPrice;
    return revenue;
};

module.exports = Park;