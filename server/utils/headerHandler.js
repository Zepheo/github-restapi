const headerHandler = (headers) => {
  const { link } = headers;
  return Number(link.split(',')[1].replace(/^.*\&page=/i, '').replace(/>.*$/, ''));
  
};

module.exports.headerHandler = headerHandler;