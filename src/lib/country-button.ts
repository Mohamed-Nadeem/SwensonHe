import {bindable} from 'aurelia-framework';

export class CountryButton {
    @bindable countries;
    countryDetails;

    showDetails(index) {
        document.querySelector("html").style.overflow = "hidden";
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        let details = {
            country: this.countries[index].name, 
            capital: this.countries[index].capital, 
            region: this.countries[index].region, 
            population: this.countries[index].population};
        this.countryDetails = details;
    }

    closeModal (){
        document.querySelector("html").style.overflow = "";
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
}