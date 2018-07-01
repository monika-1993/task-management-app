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
