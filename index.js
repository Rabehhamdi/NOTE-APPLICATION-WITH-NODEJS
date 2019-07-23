 
const fs = require('fs') 

var option = process.argv[2];  
switch (option)
{
    case "list":  
        var file_content = fs.readFileSync('data.json','utf8') 
        var content = JSON.parse(file_content); 
        console.log('Printing ' + content.length +' note(s)')   
        console.log(content)
    break
    case "add":
        if (process.argv[3] === "--titre" && process.argv[5] === "--body")
            { 
            var newdata = {titre : process.argv[4] , body:  process.argv[6]}; 
            let data = JSON.parse(fs.readFileSync('data.json').toString());

            fs.writeFileSync('data.json', JSON.stringify(data.concat([newdata])))
            
            console.log("Note added successfully") 
        }
        else
        console.log("Cannot add note")
        break
    case "remove":
        if (process.argv[3] === "--titre"){
            let newdata=[]
            let data = JSON.parse(fs.readFileSync('data.json').toString());
            for(i=0;i<data.length;i++){
                if (data[i].titre !== process.argv[4])
                    newdata[i]=data[i]
            } 
            fs.writeFileSync('data.json', JSON.stringify(newdata) )

        } else
            console.log("Cannot remove note")
        break 
    case "Modification":
        if (process.argv[3] === "--titre" && process.argv[5] === "--newtitre" && process.argv[7] === "--newbody" ) {
            let newdata = [{ titre: '', body:''}]
            let data = JSON.parse(fs.readFileSync('data.json').toString());
            for (i = 0; i < data.length; i++) {
                if (data[i].titre !== process.argv[4])
                    newdata[i] = data[i]
                else
                    {newdata[i].titre = process.argv[6]
                    newdata[i].body = process.argv[8]}

            }
            fs.writeFileSync('data.json', JSON.stringify(newdata))

        } else
            console.log("Cannot remove note")
        break 
    case 'read': 
    default: console.log("Option \n --add \t -- remove \n --list ")
            break
}