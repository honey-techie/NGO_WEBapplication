const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "mysql-db-instance-lab5.co0ynpevyflj.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Rds-2023",
  database: "webpage",
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

db.query('SET time_zone = "+05:30"', (err, result) => {
  if (err) {
    console.error('Error setting timezone: ' + err.stack);
    return;
  }
  console.log('Timezone set to IST.');
});

module.exports = db;


// CREATE TABLE donations (
//   donation_id VARCHAR(255) PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   amount DECIMAL(10, 2) NOT NULL,
//   purpose VARCHAR(255),
//   donated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
