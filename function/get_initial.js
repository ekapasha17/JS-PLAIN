function get_initial(name) {
    return name
      .split(" ")
      .map(word => word[0].toUpperCase())
      .join("");
}
  
module.exports = get_initial;