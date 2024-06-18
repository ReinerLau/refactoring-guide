export let _title = "undefined";

export let result = "";

result += `<h1>${title()}</h1>`;

const obj = {
  articleTitle: "test",
};

setTitle(obj["articleTitle"]);

function title() {
  return _title;
}

function setTitle(arg) {
  _title = arg;
}
