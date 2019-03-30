'use strict';

class TransactionsDTO {

    constructor(transactionId, accountId, date, category, categoryType) {
        this.transactionId = transactionId;
        this.accountId = accountId;
        this.date = date;
        this.category = category;
        this.categoryType = categoryType;
    }

}