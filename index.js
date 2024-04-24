const user = {
    "firstName": "Гена",
    "lastName": "Букин",
    "achievments": {
        "important": "хет-трик в финале турнира Кожаный мяч"
    }
}

const company = {
    "name": "Apple",
    "location": "Калифорния, США",
    "achievments": {
        "important": "Сделали iPhone"
    }
}
function printOnlyAch( {achievments} ){
    console.dir(achievments)
}


function printInfo(obj){
    console.dir(obj)
}

printOnlyAch(user)
printOnlyAch(company);
