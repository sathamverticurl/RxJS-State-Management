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
  publish(eventdata) {
    this.multicasting.next(eventdata);
  }
  /**
   * Method to unpublish the data
   */
  unpublish() {
    this.multicasting.unsubscribe();
  }
}
