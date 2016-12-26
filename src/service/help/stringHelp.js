
function  format(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
}


function isBlank(value) {
    var text = value || "";
    if (text.trim() === '') {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    format: format,
    isBlank: isBlank
};