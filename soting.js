const courses = [
    {id:1, name:'Node.js'},
    {id:2, name:'Javascript'}
];
courses.sort(function(a,b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0
});

console.log(courses);
