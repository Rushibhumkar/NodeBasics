module.exports = {
  name: "get",
  x: 10,
  y: 20,
  z: function () {
    return this.x + this.y;
    // return 10;
  },
};
