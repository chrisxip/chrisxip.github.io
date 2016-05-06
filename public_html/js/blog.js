$(function (){
    var APPLICATION_ID =  "0044941E-8089-DF8B-FF28-8BCE7F83EB00",
    SECRET_KEY = "14F830BD-9377-2D42-FF45-79CFCC6ECB00",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
       
    var dataStore = Backendless.Persistence.of(Posts);
    
    console.log(postsCollection);
    
    var postsCollection = Backendless.Persistence.of(Posts).find();
    
    var wrapper = {
       posts: postsCollection.data  
    };
     
    Handlebars.registerHelper('format', function (time){
        return moment(time).format("dddd, MMMM Do YYYY");
    });
    
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('.main-container').html(blogHTML);

});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.emailEmail || "";
}



