import moment from 'moment';

export function format(source:Date, format: string): string {
  return moment(source).format(format);
}
