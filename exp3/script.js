function replaceCharacter() {
  let str = document.getElementById("stringInput").value.trim();
  let charToReplace = document.getElementById("replaceChar").value;
  let replaceWith = document.getElementById("replaceWith").value;

  if (!str) {
    document.getElementById("replaceResult").innerHTML = " Please enter a string first.";
    return;
  }

  if (!charToReplace) {
    document.getElementById("replaceResult").innerHTML = " Please enter a character to replace.";
    return;
  }

  let replaced = str.split(charToReplace).join(replaceWith);
  document.getElementById("replaceResult").innerHTML = ` Replaced String: ${replaced}`;
}

function checkPalindrome() {
  let str = document.getElementById("palindromeInput").value.trim();

  if (!str) {
    document.getElementById("palindromeResult").innerHTML = " Please enter a string.";
    return;
  }

  let originalStr = str.replace(/\s/g, "").toLowerCase();
  let reversedStr = originalStr.split("").reverse().join("");

  if (originalStr === reversedStr) {
    document.getElementById("palindromeResult").innerHTML = `The string "${str}" is a palindrome.`;
  } else {
    document.getElementById("palindromeResult").innerHTML = ` The string "${str}" is not a palindrome.`;
  }
}

function replaceSubstring() {
  let str = document.getElementById("stringInput").value.trim();
  let substringToReplace = document.getElementById("substringInput").value;
  let replaceWith = document.getElementById("replaceWithSubstring").value;

  if (!str) {
    document.getElementById("substringResult").innerHTML = " Please enter a string first.";
    return;
  }

  if (!substringToReplace) {
    document.getElementById("substringResult").innerHTML = " Please enter a substring to replace.";
    return;
  }

  let replacedStr = str.replace(substringToReplace, replaceWith);
  document.getElementById("substringResult").innerHTML = ` String after replacement: ${replacedStr}`;
}
