export function caesar(str, num){
    const shift = num % 26;
    let cipher = ''
    for(let i =0; i < str.length; i++){
        let char = str[i];
        if(isLetter(char)){
            let code = char.charCodeAt(0);
            if(code >= 97 && code <= 122){
                cipher += String.fromCharCode(
                    ((code - 97 + shift + 26) % 26) + 97
                );
            } else {
                cipher += String.fromCharCode(
                    ((code - 65 + shift + 26) % 26) + 65
                );
            }

        } else {
            cipher += char;
        }
    }

    return cipher
}



function isLetter(char) {
  return /^[a-z]$/i.test(char);
}