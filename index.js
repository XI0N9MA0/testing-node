const http = require("node:http");

const server = http.createServer((req,res)=>{

  const superHero = {
    firstName: "Bruce Wayne",
    lastName: "Wayne",
  }

  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("server running on port 3000");
  
});
