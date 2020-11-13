/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: November 8, 2020
 * Author: Hongsoon Kim
 * 
 */

const unzipper = require('unzipper'),
  fs = require("fs"),
  PNG = require('pngjs').PNG,
  path = require('path'),
  { pipeline } = require('stream');


/**
 * Description: decompress file from given pathIn, write to given pathOut 
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
  pipeline(
    fs.createReadStream(pathIn),
    unzipper.Extract({path: pathOut}),
    function onEnd (err) {
      if(err) {
        console.error('Error occurred: ', err);
        process.exit(1);
      }

      console.log('Extraction operation complete');
    }
  )
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path 
 * 
 * @param {string} path 
 * @return {promise}
 */
const readDir = dir => {

};

/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * 
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {

};

unzip('./myfile.zip', './unzipped/');

module.exports = {
  unzip,
  readDir,
  grayScale
};