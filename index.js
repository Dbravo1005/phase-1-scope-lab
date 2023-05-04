var customerName = 'bob'

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    return upperCaseCustomerName
}


var bestCustomer;

function setBestCustomer(){
    bestCustomer = 'not bob'
    return setBestCustomer
}

function overwriteBestCustomer(){
     bestCustomer = 'maybe bob'
    return overwriteBestCustomer
}

const leastFavoriteCustomer = 'Dylan'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Damian"
    return changeLeastFavoriteCustomer
}