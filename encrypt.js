const inp = "^22 ^8 11 3 ^23 5 ^10 _ ^15 ^18 ^21 25 ^8 4 15 ^10 8 _ ^14 ^14 ^8 Y - 2 ^10 ^14 ^9 ^16 6 L ^16 ^15 ^11 = 7 8 18 15 ? 7 8 18 15 2 26 15 11 / 14 12 24 . 22 25 6 7 6 12 2";  // encrypted foramted w spaces
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(""); // so professional

// atbash cipher
const atbash = (str) => {
    return str.split("").map((x) => {
        if (x.match(/[a-z]/g)) {
            return String.fromCharCode(219 - x.charCodeAt(0));
        }
        return x;
    }).join("");
}

// decrypts the numbers to letters except for the special characters
const decrypt = (str) => {
    return str.split(" ").map(x => {
        if (x.startsWith("^")) {
            return alphabet[parseInt(x.substring(1)) - 1].toUpperCase()
        }
        else if (parseInt(x) > 0) {
            return alphabet[parseInt(x) - 1]
        }
        else {
            // special characters
            return x
        }
    }).join("");
}
// it is backwards 
console.log(atbash(decrypt(inp)).split("").reverse().join(""));

