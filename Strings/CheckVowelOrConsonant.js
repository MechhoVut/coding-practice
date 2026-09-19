let char = " A ";

if (char.length !== 1) {
    console.log(`"${char}" is not a single character`);
}
else if ("aeiouAEIOU".includes(char)) {
    console.log(`${char} is a vowel`);
}
else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    console.log(`${char} is a consonant`);
}
else {
    console.log(`${char} is not a letter`);
}