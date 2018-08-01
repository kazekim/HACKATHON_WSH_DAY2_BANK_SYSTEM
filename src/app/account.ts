export class Account {
    public acctNo: number;
    public acctName: string;
    public balance: number;

    constructor(_acctNo: number, _acctName: string) {
        this.acctNo = _acctNo;
        this.acctName = _acctName;
        this.balance  = 0;
    } 
}
