function Games() {
  this.users = {};
  this.currentId = 0;
}
Games.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}