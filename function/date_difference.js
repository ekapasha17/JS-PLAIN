function date_difference(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
}

module.exports = date_difference;