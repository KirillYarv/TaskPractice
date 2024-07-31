async function getDataArray()
{
    try{
        let getData = await fetch("http://exercise.develop.maximaster.ru/service/products/");
        
        if (getData.ok)
        {
            let commits = await getData.json();
            return commits;    
        }
        return null;
    }
    catch
    {
        const result = '[{"price":10510,"quantity":4,"name":"Телевизор ЖК"},{"price":13252,"quantity":5,"name":"Маркеры офисные"},{"price":16451,"quantity":6,"name":"Бумага для принтера"},{"price":15080,"quantity":6,"name":"Стол компьютерный"},{"price":9139,"quantity":3,"name":"Монитор 22″"},{"price":15994,"quantity":6,"name":"Дверь межкомнатная"},{"price":15994,"quantity":6,"name":"Канцелярский набор"},{"price":9139,"quantity":3,"name":"Светильник"},{"price":10510,"quantity":4,"name":"Шкаф книжный"},{"price":12338,"quantity":4,"name":"Системный блок"},{"price":16908,"quantity":6,"name":"Вода бутилированная"},{"price":10510,"quantity":4,"name":"Стул офисный"},{"price":14166,"quantity":5,"name":"Бумага туалетная"}]';
        return JSON.parse(result);
    }
}