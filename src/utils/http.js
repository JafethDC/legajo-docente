export const commonResponseHandle = response => {
  if(response.ok){
    return response.json();
  }else{
    throw new Error('Request failed');
  }
};