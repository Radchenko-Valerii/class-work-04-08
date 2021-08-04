class RangeValidator{
  constructor(from, to){
    if(typeof (from && to) !== 'number'){
      return new TypeError('value of "to" and "from" must be "string" type')
    }
    if(from < to){
      this._from = from;
      this._to = to;
    } else {
      return new RangeError('value of "to" must be bigger, then "from"')
    }
  }

  set from(newFrom){
    if(typeof newFrom !== 'number'){
      return new TypeError('value of "from" must be "string" type')
    }
    if(newFrom > this._to){
      throw new RangeError('value of "to" must be bigger, then "from"')
    } else {
      this._from = newFrom
    }
    return this._from
  }

  get from(){
    return this._from;
  }

  set to(newTo){
    if(typeof newTo !== 'number'){
      return new TypeError('value of "to" must be "string" type')
    }
    if(newTo < this._from){
      this._to = newTo
    }
    return this._to
  }

  get to(){
    return this._to;
  }

}

const range1 = new RangeValidator(1, 10)