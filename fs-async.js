const {readFile,writeFile} = require('fs');

readFile('./content/text.txt','utf8',(err,result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;
    readFile('./content/secondtext.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(result);
        const second = result;
        writeFile('./content/result-async.text',
        `here is the result : ${first},${second}`,(err,result)=>{
            if(err){
                return;
            }
            console.log(result);
        })

    })
})