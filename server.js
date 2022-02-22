var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Contoso Pvt. Ltd is a fictional company used by Microsoft");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Contoso is a global manufacturing, sales, and support organization with more than 100,000 products.</li>"+
                    " <li>Contoso network engineers optimized traffic for their on-premises users to their intranet edge and to the closest Microsoft network location on the internet.</li>"+
                    " <li>The Contoso infrastructure for Windows 10 Enterprise deploys and automatically installs updates for devices that are running the company's primary PC and device operating system.</li>"+
                    " <li>Contoso uses the full spectrum of Microsoft 365 for enterprise security features for identity and access management, threat protection, information protection, and security management.</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
