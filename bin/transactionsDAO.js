const connection = ('./appDB.js');

function insertTransaction(data){
    connection.connect();
    let query = connection.query('INSERT INTO transactions ?', data, function (error, results, fields){
        if(error) throw error;
        console.log('Inserting ' + data.transactionId + 'into the database')
    });
}

function selectTransactions(date){
    connection.connect();
    let query = connection.query('SELECT * from transactions where STR_TO_DATE(date, \'%d,%m,%y\') < CURDATE()', function (error, results, fields){
        if(error) throw error;
        console.log('Selecting ' + results.length + 'transactions from the database')
    });
}
