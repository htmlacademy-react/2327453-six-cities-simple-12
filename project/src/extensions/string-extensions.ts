declare global {
  interface String {
    capitalizeFirstLetter(): string;
  }
}

String.prototype.capitalizeFirstLetter = function (): string {
  const thisString = String(this);
  return thisString.charAt(0).toUpperCase() + thisString.slice(1);
};

export {};
