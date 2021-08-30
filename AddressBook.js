console.log("Welcome to The Address Book JS Program ") 
class Contact{
    constructor(...params){        
        this.firstName = params[0]        
        this.lastName = params[1];        
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }

    get firstName(){ return this._firstName}
    set firstName(firstName){
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

let contact1 = new Contact("Dhulipala", "Vagdevi", "vijag", "visakapatnam", "andhrapradesh", "524894", "91 8596486541", "vagdevi52@gmail.com")
let contact2 = new Contact("Lalitha", "Dhulipala", "HI-Tech City", "Hyderabad", "Telangana", "542004", "91 9812287593", "lalitha3@gmail.com")
let contact3 = new Contact("Swathi", "Chowdary", "Jubliee Hills", "Hyderabad", "Telangana", "561004", "91 9854280202", "swathi11@gmail.com")
let contact4 = new Contact("Naveen", "Chowdary", "Madhapur", "HYderabad", "TElangana", "526341", "91 9829280202", "naveen@gmail.com")
let contact5 = new Contact("Suresh", "Chowdary", "Gachibowli", "Hyderabad", "Telangana", "586987", "91 9729280202", "suresh@gmail.com")

var addressBookArray = new Array()
function addContact(contact){
    let duplicateContact = findContact(contact.firstName, contact.lastName)
    if(duplicateContact != null)
        console.log("Can't Add Contact. Dupicate Contact Found.")
    else
        addressBookArray.push(contact)
}
addContact(contact1)
addContact(contact2)
addContact(contact3)
addContact(contact4)
addContact(contact5)

function findContact(fname, lname){
    let contactToEdit;
    for(let i = 0; i < addressBookArray.length; i++){
        if(addressBookArray[i].firstName === fname && addressBookArray[i].lastName === lname)
            contactToEdit = addressBookArray[i]
    }
    return contactToEdit;
}
const prompt = require('prompt-sync')();
function findContactAndEdit(fname, lname){
    let contactToEdit = findContact(fname,lname)
    if(contactToEdit == null)
        console.log("No Contact Found To Edit")
    else{
        let input = 1;
        while(input != 9){
            console.log("1. Edit First Name \n2. Edit Last Name \n3. Edit Address \n4. Edit City \n5. Edit State");
            console.log("6. Edit ZipCode \n7. Edit Phone No \n8. Edit Email \n9. Exit")
            input = prompt("Enter Your Choice:  ")
            input = parseInt(input)
            switch (input) {
                case 1:
                    let fname = prompt("Enter the first Name: ")
                    contactToEdit.firstName = fname
                    break
                case 2:
                    let lname = prompt("Enter the last Name: ")
                    contactToEdit.lastName = lname
                    break
                case 3:
                    let address_edit = prompt("Enter the address: ")
                    contactToEdit.address = address_edit
                    break
                case 4:
                    let city_edit = prompt("Enter the city: ")
                    contactToEdit.city = city_edit
                    break
                case 5:
                    let state_edit = prompt("Enter the State: ")
                    contactToEdit.state = state_edit
                    break
                case 6:
                    let zip_edit = prompt("Enter the zip: ")
                    contactToEdit.zip = zip_edit
                    break
                case 7:
                    let phone_edit = prompt("Enter the phone number: ")
                    contactToEdit.phoneNo = phone_edit
                    break
                case 8:
                    let mail_edit = prompt("Enter the email: ")
                    contactToEdit.email = mail_edit
                    break
                case 9:
                    break
                default:
                    console.log("Wrong Input")
            }
        }
    }
}

let param1 = prompt("Enter the First Name (contact to edit):  ")
let param2 = prompt("Enter the Last Name (contact to edit):  ")
findContactAndEdit(param1, param2)

function deleteContact(fname, lname){
    let contactToDelete = findContact(fname. lname)
    if(contactToDelete == null)
        console.log("No Contact Found To Delete")
    else
        addressBookArray.pop(contactToDelete)
}
addressBookArray.push(contact4)
let param3 = prompt("Enter the First Name (contact to delete):  ")
let param4 = prompt("Enter the Last Name (contact to delete):  ")
deleteContact(param3, param4)

function count(counter){
    return counter + 1;
}
console.log("Total Number of Contacts: " + addressBookArray.reduce(count, 0))