//ex1

const pToHide = document.querySelector('.top_title')
const buttonHide = document.querySelector('.button1');

buttonHide.addEventListener('click', function() {

    if (pToHide.style.visibility === "hidden") {
        pToHide.style.visibility = "visible";
      } else {
        pToHide.style.visibility = "hidden";
      }
    });


 // ex2
    const hToRepaint = document.querySelector('.top_text')
    const buttonToRepaint = document.querySelector('.button2')

    buttonToRepaint.addEventListener('click', function() {

        if (hToRepaint.style.color === 'blue') {
            hToRepaint.style.color = 'white';
          } else {
            hToRepaint.style.color = 'blue';
          }
        });


// ex3 

const hToChange = document.querySelector('.top_text')
const buttonToTextChange = document.querySelector('.button3')
const originalText = hToChange.innerHTML; // будет сохранять старый текст вместе с тегами

buttonToTextChange.addEventListener ('click', function() {
     
     if (hToChange.innerHTML === 'Привет, мир!') {
        hToChange.innerHTML = originalText;
      } else {
        hToChange.innerHTML = 'Привет, мир!';
      }
    });


// ex4

const hToChange2 = document.querySelectorAll ('.description')
const buttonToAllTextChange = document.querySelector('.button4')



buttonToAllTextChange.addEventListener ('click', function() {
  hToChange2.forEach(function(element) {
element.textContent = "Новый текст"
    });
   });

//ex4 x2 (решение с сохранением оригинального текста и его возвратом)
// const hToChange2 = document.querySelectorAll ('.description')
// const buttonToAllTextChange = document.querySelector('.button4')
// const originalAllText = Array.from(hToChange2).map(description => description.innerHTML);


// buttonToAllTextChange.addEventListener ('click', function() {
//     hToChange2.forEach(function(element, index) {
//          if (element.innerHTML === 'Новый текст') {
//             element.innerHTML = originalAllText[index];
//           } else {
//             element.innerHTML = 'Новый текст';
//           }
//     });
//    });

//ex5 (дубликат ex4)


//ex6

const buttonToAddNewP = document.querySelector('.button6');

buttonToAddNewP.addEventListener('click', function() {
  console.log('Кнопка button6 нажата!'); // проверка активации кнопки
  const addNewP = document.createElement('p');
  addNewP.textContent = 'Новый элемент'; // Добавляем текст
  addNewP.classList.add('top_text2', 'description');  // Добавляем класс, чтобы была стилизация как у других текстовых элементов
  document.querySelector('header').appendChild(addNewP);
  // Перерисовка стилей
  addNewP.offsetHeight; // Для обновления рендеринга
    });

// ex7

let hToRemove = document.querySelector ('.description')
const buttonToRemove = document.querySelector('.button7')

buttonToRemove.addEventListener('click', function() {

  while (hToRemove) { // пока есть description цикл будет работать
    hToRemove.remove(); // удаляем первый description
    hToRemove = document.querySelector ('.description'); // перезаписываем в hToRemove первый элемент с классом description
    break; // останавливаем цикл
  }
  });




