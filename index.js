function checkMonth() {
    let monthNumber = Number(prompt("Введите месяц года"));

    switch (monthNumber) {
        case 1.0:
        case 2.0:
        case 12.0:
            alert('Зима');
            break;
        case 3.0:
        case 4.0:
        case 5.0:
            alert('Весна');
            break;
        case 6.0:
        case 7.0:
        case 8.0:
            alert('Лето');
            break;
        case 9.0:
        case 10.0:
        case 11.0:
            alert('Осень');
            break;
        default:
            alert('Не месяц года');
            break;
    }
}