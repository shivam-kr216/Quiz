import writeJsonFile from 'write.json';
const fs = require('fs');

function loadJSON(filename=''){
    return JSON.parse(
        fs.existsSync(filename)?fs.readFileSync(filename).toString():'null')
}

console.log(
    loadJSON('write.json')
)

/*(async () => {
    await writeJsonFile('write.json', {foo: true});
})();

let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(student, null, 2);

fs.writeFile('write.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');*/