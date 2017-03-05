const path = require('path');
const encryptor = require('file-encryptor');
const recursive = require('recursive-readdir');
const fs = require('./lib/fs');
const del = require('del');

const encode = process.argv.includes('--encode');
const decode = process.argv.includes('--decode');
const clean = process.argv.includes('--clean');

function encrypt() {

  const key = 'encryptor-key';
  const encodeFolder = path.resolve(__dirname, '../src');

  if (encode) {
    console.log(encodeFolder);

    recursive(encodeFolder, ['.DS_Store'], (err, files) => {
      if (err) return;
      files.forEach(file => {
        console.log(file);
        encryptor.encryptFile(file, `${file}.bin`, key, (err) => {
          // Encryption complete.
        });
      });
    });
  }

  if (decode) {
    recursive(encodeFolder, ['.DS_Store'], (err, files) => {
      if (err) return;
      files.forEach(file => {
        console.log(file);
        encryptor.decryptFile(file, file.replace('.bin', ''), key, (err) => {
          // Encryption complete.
        });
      });
    });
  }

  if (clean) {
    del(['src/**/*.js.bin']);
  }
}

module.exports = encrypt;
