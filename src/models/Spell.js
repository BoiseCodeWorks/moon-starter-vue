export class Spell {
  constructor(data) {
    this._id = data._id;
    this.name = data.name;
    this.description = Array.isArray(data.desc) ? data.desc.join(" ") : "";
    this.components = data.components;
    this.range = data.range;
    this.duration = data.duration;
  }
}