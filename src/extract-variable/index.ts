export const getCount = (data) => {
  const firstCount = 1 * data.first;
  const secondCount = 2 * data.second;
  const thirdCount = 3 * data.third;
  return firstCount + secondCount + thirdCount;
};

export class Counter {
  private _data;
  constructor(data) {
    this._data = data;
  }

  get firstCount() {
    return this._data.first;
  }

  get secondCount() {
    return this._data.second;
  }

  get thirdCount() {
    return this._data.third;
  }

  getCount() {
    return 1 * this.firstCount + 2 * this.secondCount + 3 * this.thirdCount;
  }
}
