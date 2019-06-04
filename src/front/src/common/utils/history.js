import { Observable } from 'rxjs'

const list = [];
let observable;

export const historyAdd = (data) => {
  list.push(data);
  observable.next(`${list.length}-${data}`);
};
export const historyGet = () => list.reverse();
export const historyObservable = new Observable((o) => {observable = o});
