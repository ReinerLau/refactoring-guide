export let tphd = "undefined";

export let result = "";

result += `<h1>${title()}</h1>`;

const obj = {
  articleTitle: "test",
};

setTitle(obj["articleTitle"]);

function title() {
  return tphd;
}

function setTitle(arg) {
  tphd = arg;
}
