String.prototype.splitFirst = function (separator) {
    var si = this.split(separator);
    var output = [];
    output.push(si[0]);
    if (si.length>1) {
        si.shift();
        output.push(si.join(separator));
    }
    return output;
};