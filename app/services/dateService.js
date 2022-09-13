const mj = require ('jalali-moment');

exports.toPersianDate=(date,format='"HH:mm" jYYYY/jMM/jDD')=>{
    return mj(date).local('fa').format(format)
}