function isBlank(str) {
    var value = str ||"";
    return value.trim()==='';
}

function isEqual(str1, str2) {
    var value1=  str1 ||"";
    var value2 = str2 ||"";

    return value1 === value2;
}

function  format(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
}

function replace(text, sub, replace, sensitive){
    var regex;
    if ( ! sensitive) {
        regex = new RegExp( '(' + sub + ')', 'gi' );
    } else {
        regex = new RegExp( '(' + sub + ')', 'g' );
    }

    return (text || "").replace( regex, replace );
}


function endWith(s, sub){
    s = s || "";
    sub = sub || "";
    return s.length >= sub.length && s.substr(s.length - sub.length) == sub;
}

module.exports = {
    isBlank:isBlank,
    isEqual: isEqual,
    format: format,
    replace: replace,
    endWith: endWith

};