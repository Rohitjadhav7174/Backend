require('dotenv').config()
const express = require('express')
const app=express()
const PORT =4000

const data={
    "content": {
    "name": "hello.txt",
    "path": "notes/hello.txt",
    "sha": "95b966ae1c166bd92f8ae7d1c313e738c731dfc3",
    "size": 9,
    "url": "https://api.github.com/repos/octocat/Hello-World/contents/notes/hello.txt",
    "html_url": "https://github.com/octocat/Hello-World/blob/master/notes/hello.txt",
    "git_url": "https://api.github.com/repos/octocat/Hello-World/git/blobs/95b966ae1c166bd92f8ae7d1c313e738c731dfc3",
    "download_url": "https://raw.githubusercontent.com/octocat/HelloWorld/master/notes/hello.txt",
    "type": "file",
    "_links": {
      "self": "https://api.github.com/repos/octocat/Hello-World/contents/notes/hello.txt",
      "git": "https://api.github.com/repos/octocat/Hello-World/git/blobs/95b966ae1c166bd92f8ae7d1c313e738c731dfc3",
      "html": "https://github.com/octocat/Hello-World/blob/master/notes/hello.txt"
    }
  },
  "commit": {
    "sha": "7638417db6d59f3c431d3e1f261cc637155684cd",
    "node_id": "MDY6Q29tbWl0NzYzODQxN2RiNmQ1OWYzYzQzMWQzZTFmMjYxY2M2MzcxNTU2ODRjZA==",
    "url": "https://api.github.com/repos/octocat/Hello-World/git/commits/7638417db6d59f3c431d3e1f261cc637155684cd",
    "html_url": "https://github.com/octocat/Hello-World/git/commit/7638417db6d59f3c431d3e1f261cc637155684cd",
    "author": {
      "date": "2014-11-07T22:01:45Z",
      "name": "Monalisa Octocat",
      "email": "octocat@github.com"
    },
    "committer": {
      "date": "2014-11-07T22:01:45Z",
      "name": "Monalisa Octocat",
      "email": "octocat@github.com"
    },
    "message": "my commit message",
    "tree": {
      "url": "https://api.github.com/repos/octocat/Hello-World/git/trees/691272480426f78a0138979dd3ce63b77f706feb",
      "sha": "691272480426f78a0138979dd3ce63b77f706feb"
    },
    "parents": [
      {
        "url": "https://api.github.com/repos/octocat/Hello-World/git/commits/1acc419d4d6a9ce985db7be48c6349a0475975b5",
        "html_url": "https://github.com/octocat/Hello-World/git/commit/1acc419d4d6a9ce985db7be48c6349a0475975b5",
        "sha": "1acc419d4d6a9ce985db7be48c6349a0475975b5"
      }
    ],
    "verification": {
      "verified": false,
      "reason": "unsigned",
      "signature": null,
      "payload": null
    }
  }
}

app.get('/',(req,res)=>{

    res.send("Hello word")

})

app.get('/twitter',(req,res)=>{
    res.send('<h1>rohitjadhav</h1>')
})

app.get('/github',(req,res)=>{
    res.json(data)
})

app.listen(process.env.PORT,()=>{
    console.log('Hello rohit how can i help you',{PORT});
    
})