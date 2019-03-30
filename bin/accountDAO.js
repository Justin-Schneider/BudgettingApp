const connection = ('./appDB.js');

function insertAccount(data){
    connection.connect();
    let query = connection.query('INSERT INTO accounts ?', data, function (error, results, fields){
        if(error) throw error;
        console.log('Inserting ' + data.id + 'into the database')
    });
}

function selectTransactions(date){
    connection.connect();
    let query = connection.query('SELECT * from accounts', function (error, results, fields){
        if(error) throw error;
        console.log('Selecting ' + results.length + 'accounts from the database')
    });
}