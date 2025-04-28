export class ResponseEntity {
  success: boolean;
  message?: string;
  data: any;
  constructor(data: any) {
    this.data = data;
  }
  public static OK (d) {
    const res = new ResponseEntity(d);
    res.success = true;
    return res;
  }
  public static ERROR (d) {
    const res = new ResponseEntity(d);
    res.success = false;
    res.message = 'error occurred';
    return res;
  }
}
