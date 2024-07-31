function init () {
    myMap = new ymaps.Map("form-send__map", {
        center: [54.1930, 37.6184], // Тула
        zoom: 11
    }, {
        balloonMaxWidth: 200,
        searchControlProvider: 'yandex#search'
    });

    // Обработка события, возникающего при щелчке
    // левой кнопкой мыши в любой точке карты.
    // При возникновении такого события откроем балун.
    myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
            myMap.balloon.open(coords, {
                contentBody:'<p>Координаты точки: ' + [
                    coords[0].toPrecision(6),
                    coords[1].toPrecision(6)
                    ].join(', ') + '</p>',
                contentFooter:'<sup>Щелкните еще раз</sup>'
            });
        }
        else {
            myMap.balloon.close();
        }
    });
}

ymaps.ready(init);
let myMap;

const formSend = document.querySelector(".form-send");
const formSendMessage = document.querySelector(".form-send__message");


formSend.addEventListener('submit',(e) =>
{
    e.preventDefault();

    let errorText = "";
    let isCatch= false;

    const formData = new FormData(formSend);

    const fio = formData.get('form-send__FIO');
    const phone = formData.get('form-send__phone');
    const email = formData.get('form-send__email');
    const comment = formData.get('form-send__comment');

    
    if (!fio)
    {
        errorText += "ФИО – обязательные поля ";
        isCatch = true;
    }
    if (!phone)
    {
        errorText += "Телефон – обязательные поля ";
        isCatch = true;
    }
    if(!/^\d+$/.test(phone))
    {
        errorText += "Телефон должен содержать только числа ";
        isCatch = true;
    }
    if (!email.includes("@"))
    {
        errorText += "Email должен содержать символ собаки (@) ";
        isCatch = true;
    }
    if (!myMap.balloon.isOpen())
    {
        errorText += "Не отмечен адрес доставки ";
        isCatch = true;
    }
    if (comment.length > 500)
    {
        errorText += "Комментарий к заказу должен быть ограничен 500 символами ";
        isCatch = true;
    }

    if (isCatch)
    {
        formSendMessage.innerHTML = errorText;
        formSendMessage.style.color = "red";
        errorText = "";
    }
    else
    {
        formSendMessage.innerHTML = "Заказ оформлен!";
        formSendMessage.style.color = "green";
    }
});