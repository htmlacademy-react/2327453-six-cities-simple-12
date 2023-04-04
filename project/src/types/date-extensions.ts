import moment from 'moment';

export function formatDate(source:Date, format: string): string {
  return moment(source).format(format);
}
