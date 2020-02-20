const numbArray = [
    'zero','one','two','three','four',
    'five','six','seven','eight','nine',
    'ten','eleven','twelve','thirteen','fourteen',
    'fifteen','sixteen','seventeen','eighteen','nineteen'
]

const tenArray = [
    '','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'
]


module.exports = function toReadable (number) {
    let numberArr = String(number).split("");
    let answer = '';

    switch (String(number).length) {
        case 1:
            return numbArray[number]

        case 2:
            if (number <= 19){
                return numbArray[number]
            }
            one = tenArray[+numberArr[0]]

            two = !!+numberArr[1] ? numbArray[+numberArr[1]] : '';

            return `${one} ${two}`.trim()
        case 3:
            one = numbArray[+numberArr[0]];
            if(!!+numberArr[1] && +numberArr[1] > 1){
                two = ` ${tenArray[+numberArr[1]]}`;

            }else{
                if(!!+(numberArr[1]+numberArr[2]) && !!+numberArr[1]){
                    two = ` ${numbArray[+(numberArr[1]+numberArr[2])]}`
                }else{
                    two = ''
                }
            }
            three = !!+numberArr[2] && +numberArr[1] !== 1 ? numbArray[+numberArr[2]] : '';
            return `${one} hundred${two} ${three}`.trim()
        default: return ''
    }
}


