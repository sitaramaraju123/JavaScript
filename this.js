const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){

        // this.tags.forEach(function(tag){
        //     console.log(this.title, tag);           //without Arrow function
        // }, this);

         // this.tags.forEach(function(tag){
        //     console.log(this.title, tag);           //with bind method
        // }.bind(this));

        this.tags.forEach(tag => {
            console.log(this.title, tag);             //with Arrow function
        });
    }
};
video.showTags();