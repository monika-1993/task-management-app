import { Status, StatusList } from './types';

export const getstatusNameFromCode = (code) => {
  switch (code) {
    case Status.done:
      return 'Done';
    case Status.inProcess:
      return 'In Process';
    case Status.schedule:
      return 'Schedule';
    case Status.onHold:
      return 'On Hold';
    case Status.sent:
      return 'Sent';
    case Status.open:
      return 'Open';
    default:
      return '';
  }
};

export const statusList = (): StatusList[] => {
  const statuses = [];
  Object.values(Status).filter(code => typeof code === 'number').forEach(s =>
    statuses.push(
      {
        'code': s,
        'statusName': getstatusNameFromCode(s)
      }
    ));
  return statuses;
};

export const getColorFromStatus = (status: Status = Status.open): string => {
  let color;
  switch (status) {
    case Status.open:
      color = '#33FCFF';
      break;
    case Status.done:
      color = '#6EFF33';
      break;
    case Status.inProcess:
      color = '#DA33FF';
      break;
    case Status.onHold:
      color = '#FF8A33';
      break;
    case Status.schedule:
      color = '#FFFF33';
      break;
    case Status.sent:
      color = '#8633FF';
      break;
    default:
      color = '#33FCFF';
  }
  return color;
};
