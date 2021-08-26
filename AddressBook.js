console.log("Welcome to The Address Book JS Program ") 
class Contact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
}

let contact = new Contact("Sumesh", "Jena", "B-Colony", "Rourkela", "Odisha",769012,987654321,"Sumeshjena.co@gmail.com");
console.log(contact)