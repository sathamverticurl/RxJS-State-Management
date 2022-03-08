import { Subject } from "rxjs";
export default class RxJSListener {
  private multicasting;
  public data;
  constructor() {
    this.multicasting = new Subject();
    this.data = this.multicasting.asObservable();
  }
  /**
   * Method to publish the data
   * @param eventdata
   */
  subscribe(eventdata) {
    this.multicasting.next(eventdata);
  }
  /**
   * Method to unpublish the data
   */
  unsubscribe() {
    this.multicasting.unsubscribe();
  }
}
