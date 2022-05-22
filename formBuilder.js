var express = require("express");
const app =express();


// app.get('/test', (req,res) => {
//     res.writeHeader(301, {
//         'X-Frame-Options': 'DENY',
//      'Content-Length': 0,
//      'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
//      'Pragma': 'no-cache',
//     'X-Content-Type-Options': 'nosniff',
// 'Referrer-Policy': 'no-referrer-when-downgrade',
// 'Content-Security-Policy':"script-src 'self' https://localhost:6940 'unsafe-eval' 'unsafe-inline'; style-src 'self' https://uas-ui3.cdn.greytip.com 'unsafe-inline'; img-src 'self' data: https://uas-ui3.cdn.greytip.com; font-src 'self' https://uas-ui3.cdn.greytip.com;"});
//     res.write("http://google.com")
//     res.end()
// });
app.get(['/', '/express', '/express/*'], (req,res) => {
    res.writeHeader(200, {
        'X-Frame-Options': 'DENY',
        'Content-Length': 0,
        'Cache-Control': 'no-cache, no-store, max-age=0, must-revalidate',
        'Pragma': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'no-referrer-when-downgrade',
        'Content-Security-Policy': "script-src 'self' https://localhost:6940 'unsafe-eval' 'unsafe-inline'; style-src 'self' https://uas-ui3.cdn.greytip.com 'unsafe-inline'; img-src 'self' data: https://uas-ui3.cdn.greytip.com; font-src 'self' https://uas-ui3.cdn.greytip.com;"
    });
    res.write("")
    res.end()
});


app.listen(6940, ()=> {
    console.log("-====>", 6940);
});