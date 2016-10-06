var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={ 
'article-one':{
    title: 'article one|yasharth verma',
    heading: 'article one',
    date: 'oct 5,2016',
    content: `
      <p>
                this is the content for the first article.this is the content for the first article.this is the content for the first article.this is the content for the first article.this is the content for the first article.this is the content for the first article.
            </p>
            <p>
                this is the content for the first article.this is the content for the first article.this is the content for the first article.this is the content for the first article.this is the content for the first article.this is the content for the first article.
            </p>
            <p>
                this is the content for the first article.this is the content for the first article.this is the content for the first article.this is the content for the first article.this is the content for the first article.this is the content for the first article.
            </p>`
},
'article-two':{ 
   title: 'article two|yasharth verma',
    heading: 'article two',
    date: 'oct 10,2016',
    content: `
      <p>
                this is the content for the second article.
            </p>`
    
},
'article-three':{
    title: 'article three|yasharth verma',
    heading: 'article three',
    date: 'oct 15,2016',
    content: `
      <p>
                this is the content for the third article.
            </p>`
}   

};
function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

    var htmlTemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=devicde-width, initial-scale="/>
        <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
    <body>
        <div  class="container">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        
        </div>
    </div>
    </body>
</html>

    
    `;
    return htmlTemplate;
}
    




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename',function (req,res) {
    //articlename==article-one
    //articles[articlename]=={} content object for article name
    var articlename=req.params.articlename;
    res.send(createtemplate(articles[articlename]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
