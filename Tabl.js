$(function () {
                                                              // Создаем диаграмму
                          
   $('#container').highcharts({
        chart: {
    type: 'bar',
      },
  title: {
    text: 'test from "Psycho"'
  },
  yAxis: {
      title: {
      text: 'процентное соотношение'
    }
  },
  plotOptions: {
    series: {
      stacking: 'percent',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
      }
    }
   },                                                           // Конец создания диограммы
    series:[                                                    // Заполнение диограммы масивом
    {  name: '1',
    
    data: [120, 13, 12, 19, 41], 
   },{name: '2',
    data: [2, 2, 21, 24, 12]
   },{name: '3',
    data: [11, 14, 23, 21, 32]
   },{name: '4',
    data: [17, 10, 34, 15, 10]
     },{name: '5',
    data: [32,12, 13, 23, 44]
         }]                                                     // Конец заполнения массива
      });
      chart = $("#container").highcharts();
          for (i = 0; i < 5; i++) {   
        var sData = JSON.stringify(chart.series[i].options.data); //Получаем данные из массива и переводим в строку
        $('#'+(i+1)).val(sData);                                  // Сохроняем в хранилище текстового поля
    }
    $('#btnLoad').click(function(){                               //Кнопка инициализации отправки данных JSON
    for (i = 0; i < 5; i++) {
      var oData = JSON.parse( $('#'+(i+1)).val() );              //Преобрахуем строку в обьект  
      chart.series[i].setData(oData);                            //Загружаем в график
    }});
      var t = arr;
    $('#btnRandom').click(function(){                     
    for (i = 0; i < 5; i++){
      var sData = JSON.stringify(t);                              //Заменяем данные на рандомный массив
        $('#'+(i+1)).val(sData);                     
    } });

});
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);         //Создаем не массив с неповторяющимеся данными
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }                                                                 //Описываем рандомный массив
    return array;
}

var arr = [];
for (var i = 0; i < 5; i++)
  arr.push(i);
shuffle(arr);
console.log(arr);


