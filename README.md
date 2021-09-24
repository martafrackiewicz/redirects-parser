# redirects-parser

1. Redirects in JSON -> redirects.json
   (Excel -> csv (headers: old, new) -> json)

record example: {
"old": "https://www.example.pl/about/blog/",
"new": "https://www.example.pl/about-us/blog/"
},

2. npm start

3. Result -> redirects.txt

record example:
RewriteRule /about/blog/ https://www.example.pl/about-us/blog/ [R=301,L]
