declare global {
  interface Number {
    getPercents(): number;
  }
}

Number.prototype.getPercents = function (): number {
  const thisNumber = Number(this);
  return Math.round(thisNumber) * 20;
};

export {};
