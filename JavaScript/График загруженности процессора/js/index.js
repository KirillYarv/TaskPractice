
let dataCPU = 100;
let pastCPU = 100;
let date;

let countQuere = 0;
let countError = 0;

function shiftChart()
{
    chart.data.labels.shift();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
    });
}

async function fillChart()
{
  date = new Date();
    
  dataCPU = await getData();
  countQuere++;

  console.log(dataCPU);
  
  chart.data.labels.push(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
  chart.data.datasets.forEach((dataset) => {
      if (dataCPU == 0) 
      {
          dataset.data.push(pastCPU); 
          countError++;
          
      }
      else 
      {
          dataset.data.push(dataCPU); 
          pastCPU = dataCPU;
      }
  });
}

async function repeat() 
{   
    await fillChart();

    // изменение текста
    textInfo.innerHTML = `Запросов - ${countQuere}, процент ошибок - ${Math.round(countError/countQuere*100)}%`
    
    if (chart.data.labels.length > 10)
        shiftChart();
    
    chart.update(); 
    
    setTimeout(repeat, 5000);
  }
  
  repeat(); 

 

