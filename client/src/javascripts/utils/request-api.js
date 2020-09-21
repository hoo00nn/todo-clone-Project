const request = async (method, url, body=false) => {
  const option = {};
  option.headers = { 'Content-Type' : 'application/json' };
  
  if(!!body) {
    option.body = JSON.stringify(body);
  }

  const response = await fetch(url, {
    method,
    ...option,
  });

  const result = await response.json();

  return result;
};

export default request;