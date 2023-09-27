export const useUrlApi = (api) => {
  let URL_API = "";

  switch (api) {
    case "EMPRESA":
      URL_API = "http://localhost:5001/empresa";
      break;
    case "PESSOA":
      URL_API = "http://localhost:5002/pessoa";
      break;
    case "OPORTUNIDADE":
      URL_API = "http://localhost:5003/oportunidade";
      break;
    default:
      URL_API = "";
  }

  return { URL_API };
};
