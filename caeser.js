export function ceaserSpec(str: string, amount: number) {
  if (amount < 0) {
    return ceaserSpec(str, amount + 26);
  }
  var output = "";
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (ch.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        ch = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }
      else if (code >= 97 && code <= 122) {
        ch = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += ch;
  }
  return output;
}