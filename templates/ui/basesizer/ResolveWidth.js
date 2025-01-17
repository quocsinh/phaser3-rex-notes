var ResolveWidth = function (width) {
    var childrenWidth = this.childrenWidth;
    var minWidth = (this.minWidth !== undefined) ? this.minWidth : 0;
    if (width === undefined) {
        width = Math.max(minWidth, childrenWidth);

        if ((minWidth > 0) && (childrenWidth > minWidth)) {
            console.warn(`Layout width warn: ${this.constructor.name}'s minWidth (${minWidth}) < childrenWidth (${childrenWidth})`);
        }
    } else {
        if ((minWidth > width) || (childrenWidth > width)) {
            console.warn(`Layout width warn: ${this.constructor.name}'s minWidth (${minWidth}) or childrenWidth (${childrenWidth} > targetWidth ${width}`);
        }
    }

    return width;
}

export default ResolveWidth;