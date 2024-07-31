async function getData()
{   
  try
  {
    let getData = await fetch("http://exercise.develop.maximaster.ru/service/cpu/") 
    if (getData.ok)
    {
        let commits = await getData.text();
        return commits;    
    }
    return Math.round(Math.random()*101);
  }
  catch
  {
    return Math.random()*101;
  } 
}
