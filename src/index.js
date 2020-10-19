function zero_nine(number) {
    switch (number) {
        case '0':
            return 'zero';
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';
        default:
            return;
    }
}

function ten_nineteen(number) {
    switch (number) {
        case '10':
            return 'ten';
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen';
        case '14':
            return 'fourteen';
        case '15':
            return 'fifteen';
        case '16':
            return 'sixteen';
        case '17':
            return 'seventeen';
        case '18':
            return 'eighteen';
        case '19':
            return 'nineteen';
        default:
            return;
    }
}

function twenty_ninetyNine(number) {
    function twenty_ninetyNine_toReadable(innerNumber) {
        switch (innerNumber) {             
            case '2':
                return 'twenty';
            case '3':
                return 'thirty';
            case '4':
                return 'forty';
            case '5':
                return 'fifty';
            case '6':
                return 'sixty';
            case '7':
                return 'seventy';
            case '8':
                return 'eighty';
            case '9':
                return 'ninety';
            default:
                return;
        }
    }

    let firstNumber = number[0].toString(), secondNumber = number[1].toString();
    
    if (firstNumber === '0') {
        return zero_nine(secondNumber);
    }

    if (firstNumber === '1') {
        return ten_nineteen(number.toString());
    }

    if (secondNumber === '0') {
        return twenty_ninetyNine_toReadable(firstNumber);
    }

    return `${twenty_ninetyNine_toReadable(firstNumber)} ${zero_nine(secondNumber)}`;
}

function hundred(number) {
    let hundreds = number[0], leftovers = number.slice(1);
    return `${zero_nine(hundreds)} hundred ${twoDigits(leftovers)}`.trim();
}

function twoDigits(number) {
    if (number >= 20 && number < 100) {
        return twenty_ninetyNine(number);
    }  

    if (number >= 10 && number < 20) {
        return ten_nineteen(number);
    }
    
    if (number[1] === '0') {
        return '';
    }

    return zero_nine(number[1]);
}

module.exports = function toReadable(number) {
    // *** 3 digits

    if (number >= 100) {
        return hundred(number.toString());
    }
    
    // *** 3 digits


    // ** 2 digits

    if (number >= 10 && number < 100) {
        if (number >= 20 && number < 100) {
            return twenty_ninetyNine(number.toString());
        }  
    
        if (number >= 10 && number < 20) {
            return ten_nineteen(number.toString());
        }
    }    

    // ** 2 digits


    // * 1 digit

    if (number < 10) {
        return zero_nine(number.toString());
    }

    // * 1 digit
}
