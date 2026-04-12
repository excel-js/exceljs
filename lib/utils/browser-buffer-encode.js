const textEncoder = new TextEncoder('utf-8');

function stringToBuffer(str) {
  if (typeof str !== 'string') {
    return str;
  }
  if (textEncoder) {
    return Buffer.from(textEncoder.encode(str).buffer);
  }
  return Buffer.from(str);
}

exports.stringToBuffer = stringToBuffer;
