//<!-- Begin
var units = new Array("one", "two", "three", "four", "five", "six", "seven", "eight", "nine"),
    teens = new Array("ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen ", "nineteen"),
    tens = new Array("twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"),
    illions = new Array('m', 'b', 'tr', 'quadr', 'quint', 'sext', 'sept', 'oct', 'non', 'dec', 'undec', 'duodec', 'tredec', 'quattuordec', 'quindec', 'sexdec', 'septendec', 'octodec', 'novemdec', 'vigint', 'unvigint', 'duovigint', 'trevigint', 'quattuorvigint', 'quinvigint', 'sexvigint', 'septenvigint', 'octovigint', 'novemvigint', 'trigint', 'untrigint', 'duotrigint', 'tretrigint', 'quattuortrigint', 'quintrigint', 'sextrigint', 'septentrigint', 'octotrigint', 'novemtrigint', 'quadragint', 'unquadragint', 'duoquadragint', 'trequadragint', 'quattuorquadragint', 'quinquadragint', 'sexquadragint', 'septenquadragint', 'octoquadragint', 'novemquadragint', 'quinquagint', 'unquinquagint', 'duoquinquagint', 'trequinquagint', 'quattuorquinquagint', 'quinquinquagint', 'sexquinquagint', 'septenquinquagint', 'octoquinquagint', 'novemquinquagint', 'sexagint', 'unsexagint', 'duosexagint', 'tresexagint', 'quattuorsexagint', 'quinsexagint', 'sexsexagint', 'septsexagint', 'octosexagint', 'novemsexagint', 'septuagint', 'unseptuagint', 'duoseptuagint', 'treseptuagint', 'quattuorseptuagint', 'quinseptuagint', 'sexseptuagint', 'septseptuagint', 'octoseptuagint', 'novemseptuagint', 'octogint', 'unoctogint', 'duooctogint', 'treoctogint', 'quattuoroctogint', 'quinoctogint', 'sexoctogint', 'septoctogint', 'octooctogint', 'novemoctogint', 'nonagint', 'unnonagint', 'duononagint', 'trenonagint', 'duattuornonagint', 'quinnonagint', 'sexnonagint', 'septnonagint', 'octononagint', 'novemnonagint', 'cent', 'cenunt', 'duocent', 'centret');

function smallNum(num, mag) {
    let a = num.charAt(0),
        b = num.charAt(1),
        c = num.charAt(2),
        s = "";

    if (a != 0) {
        s += units[a - 1] + " hundred";
        if (b == 0 && c == 0) return s;
        //else s += " and ";
    }
    if (b == 0) {
        if (c == 0) return "";
        return s + units[c - 1];
    }
    if (b == 1) {
        return s + teens[c];
    }
    if (b > 1) {
        s += tens[b - 2];
        if (c > 0) s += "-" + units[c - 1];
        return s;
    }
}

function fixChars() {
    let subject = document.forms.frmNumber.num,
        str = subject.value,
        str2 = "",
        L = str.length,
        t,
        f = false,
        i;

    for (i = 0; i < L; i++) {
        t = str.charAt(i);
        if (t * 1 == t) {
            if (t != 0) f = true;
            if (f) str2 += t;
        }
    }
    if (str2 == "") str2 = "0";
    subject.value = str2;
}

function getNumber() {
    fixChars();
    let s = document.forms.frmNumber.num.value;
    if (s.length > 315) {
        alert("Your number is " + s.length + " digits long.\nThe maximum length is 303  digits.");
        return false;
    }
    let r = "", temp = "";
    while (s.length % 3 > 0) s = "0" + s;
    let max = Math.ceil(s.length / 3);
    let i;
    for (i = 0; i < max; i++) {
        temp = smallNum(s.substr(i * 3, 3));
        if (temp != "") {
            if (max - i == 1 && r != "" && s.substr(i * 3, 3) < 100) r += "  ";
            else if (r != "") r += ", ";
            if (max - i == 2) temp += " thousand";
            if (max - i > 2) temp += " " + illions[max - i - 3] + "illion";
        }
        r += temp;
    }
    if (s == 0) r = "zero";
    r = r.charAt(0).toUpperCase() + r.substring(1, r.length) + ".";
    document.getElementById("output").innerHTML = r;
    return false;
}
// End -->

function numbersOnlyInt(e) {
    let unicode = (e.charCode) ? e.charCode : e.keyCode;
    // if the key isn't the backspace key (which we should allow)
    if (unicode != 8 && unicode != 13) {
        // if not a number
        if (unicode < 48 || unicode > 57)
            //disable key press    
            return false;
    }
}
