function rot13(str) {
    let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let b = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let str1 = [...str].map((el) => {
        if ([...a].indexOf(el) >= 0) {
            return [...b][[...a].indexOf(el)];
        } else {
            return el;
        }
    })
    return str1.join('')
}

console.log(rot13('EBG13 rknzcyr.'));