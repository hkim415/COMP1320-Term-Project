/*
 * Project: COMP1320 Milestone 1
 * File Name: main.js
 * Description: 
 * 
 * Created Date: November 8, 2020
 * Author: Hongsoon Kim
 * 
 */

const IOhandler = require("./IOhandler"),
  zipFilePath = `./myfile.zip`,
  pathUnzipped = `./unzipped`,
  pathProcessed = `./grayscaled`;

let runFunction = (func, pathIn, pathOut) => {
  return new Promise((res, rej) => {
    func(pathIn, pathOut, (err) => {
      if (err) {
        rej(err);
      } else {
        return res;
      }
    })
  })
}

runFunction(IOhandler.unzip, zipFilePath, pathUnzipped)
  .then(runFunction(IOhandler.readDir, pathUnzipped))
  .then(runFunction(IOhandler.grayScale, pathUnzipped, pathProcessed))
  .catch(err => console.log(err));
