const courses = [
    {id:1, name:'raj'},
    {id:2, name:'ram'},
];
 const cours = courses.find(function (course){
     return course.name === 'raj';                 //by usind Anonamys function
 });

 const arrow = courses.find(course => course.name === 'ram');
 const arrow1 = courses.findIndex(course => course.name === 'ram');

 console.log(cours);
 console.log(arrow);
 console.log(arrow1);

