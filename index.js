if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

console.log('Hello, world!');
console.log('CRON secret:', process.env.CRON);
