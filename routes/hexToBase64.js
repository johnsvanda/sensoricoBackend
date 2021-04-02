const crc = require("crc");

const editJsonFile = require("edit-json-file");
let content = require("./commands");
let file = editJsonFile(`${__dirname}/commands.json`);

const hexToBase64 = (data) => {
  let rawData = data.replace(/\s/g, "");
  let baseData = Buffer.from(rawData, "hex").toString("base64");
  return baseData;
};

value = crc
  .crc16modbus(Buffer.from("250900000001FF2E8B", "hex"))
  .toString("16");
let final = value.toString();
let tmp1 = final.slice(0, 2);
let tmp2 = final.slice(2, 4);

let crcResult = tmp2 + tmp1;
console.log(crcResult);

/* Object.keys(content).forEach((key) => {
  file.set(key, hexToBase64(content[key]));
}); */

file.save();
