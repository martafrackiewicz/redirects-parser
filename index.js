import fs from "fs";

const path = "./redirects.json";
const partToRemove = "https://www.example.pl";

const data = JSON.parse(fs.readFileSync(path, { encoding: "utf8" }));

const redirectsToWrite = data.map((element) => {
  return `RewriteRule ${element.old.slice(
    element.old.indexOf(partToRemove) + partToRemove.length
  )} ${element.new} [R=301,L]`;
});

const redirects = String(redirectsToWrite).replace(/,R+/g, "\nR");

fs.writeFileSync("./redirects.txt", redirects);
