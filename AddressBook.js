console.log("Welcome to The Address Book JS Program ") 
class Contact{
    constructor(...params){

        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }

    get firstName()
    { 
        return this._firstName
    }
    set firstName(firstName)
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(firstName))
            this._firstName = firstName
        else throw "Incorrect First Name"
    }
    get lastName(){ return this._lastName}
    set lastName(lastName){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')
        if(nameRegex.test(lastName))
            this._lastName = lastName
        else throw "Incorrect Last Name"
    }
    get address(){ return this._address}
    set address(address){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(address))
            this._address = address
        else throw "Incorrect Address"
    }
    get city(){ return this._city}
    set city(city){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(city))
            this._city = city
        else throw "Incorrect City"
    }
    get state(){ return this._state}
    set state(state){
        let regex = RegExp('[a-zA-Z0-9 ,]{4,}')
        if(regex.test(state))
            this._state = state
        else throw "Incorrect State"
    }
    get zip(){ return this._zip}
    set zip(zip){
        let letterRegex = RegExp('^[^a-zA-z]+$')
        let splRegex = RegExp('^[!@#$^&%*()+=-[]\/{}|:<>?,.]+$')
        let pinRegex = RegExp('^[0-9]{3}[\\s]{0,1}[0-9]{3}$')
        if(letterRegex.test(zip) && !splRegex.test(zip) && pinRegex.test(zip)){
            zip = parseInt(zip.replace(" ",""))
            this._zip = zip
        }
        else throw "Incorrect Zip"
    }
    get phoneNo(){ return this._phoneNo}
    set phoneNo(phoneNo){
        let regex = RegExp('[0-9]{2}\\s[0-9]{10}')
        if(regex.test(phoneNo))
            this._phoneNo = phoneNo
        else throw "Incorrect Phone Number"
    }
    get email(){ return this._email}
    set email(email){
        let regex = RegExp('^[a-z]+([_+-.]?[a-z0-9]+)*[@][a-z0-9]+[.]([a-z]+){2,}([.]?[a-z]{2})?$')
        if(regex.test(email))
            this._email = email
        else throw "Incorrect Email"
    }

    toString(){
        return "FirstName: " + this.firstName + " LastName: " + this.lastName + " Address: " + this.address + " City: " + this.city +
                " State: " + this.state + " Zip: " + this.zip + " PhoneNO: " + this.phoneNo + " Email: " + this.email;
    }
}

let contact1 = new Contact("Sumesh", "Jena", "B-Colony", "Rourkela", "Odisha","769012","91 987654321","Sumeshjena.co@gmail.com");
let contact2 = new Contact("Lalitha", "Dhulipala", "HI-Tech City", "Hyderabad", "Telangana", "542004","91 9812287593", "dinesh9@gmail.com")
let contact3 = new Contact("Subrahmanyam", "Nistala", "Jubliee Hills", "Hyderabad", "Telangana", "561004", "91 9854280202", "swathi11@gmail.com")

var addressBookArray = new Array()
addressBookArray.push(contact1)
addressBookArray.push(contact2)
addressBookArray.push(contact3)    

for(let i = 0; i < addressBookArray.length; i++){
    console.log(addressBookArray[i].toString())
}