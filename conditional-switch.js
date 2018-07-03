Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string  is in the set , then return A.
If the first character in string  is in the set , then return B.
If the first character in string  is in the set , then return C.
If the first character in string  is in the set , then return D.
Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).

Input Format

Stub code in the editor reads a single string denoting  from stdin.

Sample Input 0

adfgt
Sample Output 0

A

Explanation 0

The first character of string  is s=adfgt is a. Because the given criteria stipulate that we print A any time the first character is in {a, e, i, o, u} , we return A as our answer.

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return "A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            return "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            return "C";
            break;
        default:
            return "D";
    }
    return letter;
}

//or

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return letter="A";
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            return letter="B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            return letter="C";
            break;x
        default:
            return letter="D";
    }
    return letter;
}
