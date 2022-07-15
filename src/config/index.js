const envirnomenturls=new Map();

envirnomenturls.set('localhost','http://localhost:8080');

export default envirnomenturls.get(window.location.hostname);
