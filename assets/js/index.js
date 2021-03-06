class RangeValidator {
  constructor(from, to) {
    if (typeof (from + to) !== "number" || isNaN(from + to)) {
      return new TypeError('value of "to" and "from" must be "number" type');
    }
    if (from < to) {
      this._from = from;
      this._to = to;
    } else {
      return new RangeError('value of "to" must be bigger, then "from"');
    }
  }

  set from(newFrom) {
    if (typeof newFrom !== "number" || isNaN(newFrom)) {
      return new TypeError('value of "from" must be "number" type');
    }
    if (newFrom > this._to) {
      throw new RangeError('value of "to" must be bigger, then "from"');
    } else {
      this._from = newFrom;
    }
    return this._from;
  }

  get from() {
    return this._from;
  }

  set to(newTo) {
    if (typeof newTo !== "number" || isNaN(newTo)) {
      return new TypeError('value of "to" must be "number" type');
    }
    if (newTo < this._from) {
      throw new RangeError('value of "to" must be bigger, then "from"');
    } else {
      this._to = newTo;
    }
    return this._to;
  }

  get to() {
    return this._to;
  }

  get range() {
    return [this._from, this._to];
  }

  
  validate(value) {
    if(value>=this._from && value<=this._to){
      return value
    } else {
      throw new RangeError('Value is not been part of range')
    }
}
}

const range1 = new RangeValidator(1, 10);
