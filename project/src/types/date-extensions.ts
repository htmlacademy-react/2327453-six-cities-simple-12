import moment from 'moment';

declare global {
  interface Date {
    format(format: string): string;
  }
}

Date.prototype.format = function (format: string): string {
  return moment(this).format(format);
};

export {};

