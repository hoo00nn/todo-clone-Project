const request = async (method, url, body=false) => {
  const option = {};
  url = process.env.API_URL + url;
  option.headers = { 'Content-Type' : 'application/json' };
  option.credentials = 'include';
  
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