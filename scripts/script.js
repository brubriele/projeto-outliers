
/* Text transform BALL */
function mOverGen(obj) { obj.innerHTML = "Juntxs, representam 5% da amostra" }

function mOutGen(obj) { obj.innerHTML = "LGBTI" }

function mOverGera(obj) { obj.innerHTML = "Aquelxs entre 15 e 24 anos, representam 15%" }

function mOutGera(obj) { obj.innerHTML = "Gerações" }

function mOverRenda(obj) { obj.innerHTML = " 3% acumulam entre R$20.000,00 e R$45.000,00" }

function mOutRenda(obj) { obj.innerHTML = "Renda" }



/* Gráficos */

// Load Charts and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Draw the pie chart for Pie's chart when Charts is loaded.
google.charts.setOnLoadCallback(drawPieChart);

// Draw the pie chart for the Combo's chart when Charts is loaded.
google.charts.setOnLoadCallback(drawVisualization);

// Chamada para o Gráfico de Pizza (Gênero).
function drawPieChart() {

  // Create the data table for Pie's chart.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Masculino', 4431],
    ['Feminino', 4907],
  ]);

  // Set options for Pie's chart.
  var options = {
    title: 'Gênero (não declarado)',
    width: 400,
    height: 300,
    colors: ['#0086D9', '#FF5959']
  };

  // Instantiate and draw the chart for Pie's chart.
  var chart = new google.visualization.PieChart(document.getElementById('Pie_chart_div'));
  chart.draw(data, options);
}

// Chamada para o Gráfico de Barras (Gênero x Orientação Sexual).
function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Gênero', 'Homossexual', 'Bissexual', 'Outras', 'Não respondeu'],
    ['Feminino', 15, 17, 27, 40],
    ['Masculino', 20, 13, 21, 30]
  ]);

  var options = {
    title: 'Gênero x Orientação Sexual (%)',
    vAxis: { title: 'Orientação Sexual' },
    hAxis: { title: 'Gênero' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
    colors: ['#9E78FF', '#8565D6', '#654DA3', '#B5BFCC']
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

/*Gráfico donut*/
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Orientaçao Sexual', 'Voto'],
    ['LGBT | Válidos', 438],
    ['LGBT | Nulos/Brancos/Abstenções', 50]
  ]);

  var options = {
    title: 'Amostra: 488 | Recorte: 7978 eleitores (5%)',
    pieHole: 0.6,
    colors: ['#684092', '#A6A6A6']
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Orientação Sexual', 'Voto'],
    ['Heteros', 6898],
    ['Heteros | Nulos/Brancos/Abstenções', 1080]
  ]);

  var options = {
    title: 'Amostra: 9338 | Recorte: 7978 eleitores (85%)',
    pieHole: 0.6,
    colors: ['#0086D9', '#A6A6A6']
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
  chart.draw(data, options);
}


google.charts.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart() {

  var data = google.visualization.arrayToDataTable([
    ['ID', 'Renda Familiar', 'Escolaridade', 'Candidato', 'Population'],
    ['Fernando Haddad', 1, 5, 'Fernando Haddad (Grupo: LGBT | MAIOR)', 27],
    ['Fernando Haddad', 2, 5, 'Fernando Haddad (Grupo: LGBT | INTERMEDIÁRIO)', 12],
    ['Fernando Haddad', 6, 7, 'Fernando Haddad (Grupo: LGBT | MENOR)', 3],
    ['Jair Bolsonaro', 1, 2, 'Jair Bolsonaro (Grupo: LGBT | MAIOR)', 10],
    ['Jair Bolsonaro', 3, 5, 'Jair Bolsonaro (Grupo: LGBT | INTERMEDIÁRIO)', 5],
    ['Jair Bolsonaro', 6, 6, 'Jair Bolsonaro (Grupo: LGBT | MENOR)', 1]
  ]);

  var options = {
    title: 'Correlação entre Renda e Escolaridada por Intenção de Voto (2018)',
    hAxis: { title: 'Renda Familiar' },
    vAxis: { title: 'Escolaridade' },
    bubble: { textStyle: { fontSize: 11 } },
    colors: ['#E67322', '#E67322', '#F6BE9D', '#3A5461', '#3C93AF', '#71A7BF']
  };

  var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawVisualizationGera);

function drawVisualizationGera() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Faixa Etária', 'A homossexualidade deve ser aceita por toda sociedade', 'A homossexualidade deve ser desencorajada por toda sociedade', 'Não sabe'],
    ['De 16 a 24 anos', 12, 2, 1],
    ['De 25 a 34 anos', 16, 3, 1],
    ['De 35 a 44 anos', 15, 4, 2],
    ['De 45 a 59 anos', 18, 5, 2],
    ['60 anos ou mais', 12, 4, 3]
  ]);

  var options = {
    title: 'Se acham que a homossexualidade deve ser ACEITA ou DESENCORAJADA, distruídxs por faixa etária (%)', fontSize: 11,
    vAxis: { title: 'Amostra (em %)' },
    hAxis: { title: '', textStyle: { color: 'black', fontSize: 9 } },
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
    legend: { position: 'bottom', textStyle: { color: 'black', fontSize: 9 } },
    colors: ['#654DA3', '#FF5959', '#FFD980']

  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div_combo'));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChartGera);

function drawChartGera() {

  var data = google.visualization.arrayToDataTable([
    ['Homossexualidade', 'Amount given'],
    ['A homossexualidade deve ser aceita por toda sociedade', 6840],
    ['A homossexualidade deve ser desencorajada por toda sociedade', 1700],
    ['Não sabe', 798]

  ]);

  var options = {
    title: 'Amostra: 9338 eleitores, sem recortes.',
    pieHole: 0.5,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'none',
    colors: ['#654DA3', '#FF5959', '#FFD980']
  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
  chart.draw(data, options);
}





// let item = document.querySelectorAll(".dropdown");
// let sub = document.querySelector(".content");

// for (let i = 0; i < item.length; i++) {
//   item[i].addEventListener('mouseover',
//     function () {
//       sub.classList.add(".active")
//     })
//   item[i].addEventListener('mouseleave',
//     function () {
//       sub.classList.remove('.active')
//     })
// }

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
  var data = new google.visualization.DataTable();


  var data = google.visualization.arrayToDataTable([
    ['Regioes', 'Bissexual', 'Homossexual', 'Não respondeu', { role: 'annotation' }],
    ['SUL', 7, 1, 3, ''],
    ['CENTRO-OESTE', 5, 6, 10, ''],
    ['NORTE', 5, 5, 12, ''],
    ['SUDESTE', 12, 14, 26, '']
  ]);

  var options = {
    title: 'Distribuição de eleitores LGBT por Regiões do País  *a amostra não abrangeu região nordeste',
    isStacked: true,
    hAxis: {
      title: 'Regiões',
      format: 'h:mm a',
      viewWindow: {
        min: [7, 30, 0],
        max: [17, 30, 0]
      }
    },
    vAxis: {
      title: 'Amostra (%)'
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_stacked'));
  chart.draw(data, options);
}


// google.charts.setOnLoadCallback(drawSeriesChart);

// function drawSeriesChart() {

//   var data = google.visualization.arrayToDataTable([
//     ['ID', 'Faixa Etária', 'Renda Familiar', 'Candidato', 'Population'],
//     ['Fernando Haddad', 1, 1, 'Fernando Haddad (De 16 a 24 anos)', 3],
//     ['Fernando Haddad', 1, 2, 'Fernando Haddad (De 16 a 24 anos)', 2],
//     ['Fernando Haddad', 1, 6, 'Fernando Haddad (De 16 a 24 anos)', 0.1],
//     ['Fernando Haddad', 1, 3, 'Fernando Haddad (De 16 a 24 anos)', 1],
//     ['Fernando Haddad', 1, 4, 'Fernando Haddad (De 16 a 24 anos)', 1],
//     ['Fernando Haddad', 1, 5, 'Fernando Haddad (De 16 a 24 anos)', 0.3],
//     ['Fernando Haddad', 1, 7, 'Fernando Haddad (De 16 a 24 anos)', 0.01],

//     ['Fernando Haddad', 2, 1, 'Fernando Haddad (De 25 a 34 anos)', 4],
//     ['Fernando Haddad', 2, 2, 'Fernando Haddad (De 25 a 34 anos)', 2],
//     ['Fernando Haddad', 2, 6, 'Fernando Haddad (De 25 a 34 anos)', 0.1],
//     ['Fernando Haddad', 2, 3, 'Fernando Haddad (De 25 a 34 anos)', 2],
//     ['Fernando Haddad', 2, 4, 'Fernando Haddad (De 25 a 34 anos)', 1],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', 0.5],
//     ['Fernando Haddad', 2, 7, 'Fernando Haddad (De 25 a 34 anos)', 0.03],

//     ['Fernando Haddad', 3, 5, 'Fernando Haddad (De 25 a 34 anos)', 4],
//     ['Fernando Haddad', 3, 5, 'Fernando Haddad (De 25 a 34 anos)', 1],
//     ['Fernando Haddad', 3, 5, 'Fernando Haddad (De 25 a 34 anos)', 0.2],
//     ['Fernando Haddad', 3, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 3, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 3, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 3, 5, 'Fernando Haddad (De 25 a 34 anos)', ],

//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],

//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ],
//     ['Fernando Haddad', 2, 5, 'Fernando Haddad (De 25 a 34 anos)', ]

//     ['Jair Bolsonaro', 1, 1, 'Jair Bolsonaro (De 16 a 24 anos)', 3],
//     ['Jair Bolsonaro', 1, 1, 'Jair Bolsonaro (De 16 a 24 anos)', 3],
//     ['Jair Bolsonaro', 1, 1, 'Jair Bolsonaro (De 16 a 24 anos)', 3],
//     ['Jair Bolsonaro', 1, 1, 'Jair Bolsonaro (De 16 a 24 anos)', 3],
//     ['Jair Bolsonaro', 1, 1, 'Jair Bolsonaro (De 16 a 24 anos)', 3],
//     ['Jair Bolsonaro', 1, 1, 'Jair Bolsonaro (De 16 a 24 anos)', 3],
//     ['Jair Bolsonaro', 1, 1, 'Jair Bolsonaro (De 16 a 24 anos)', 3],

//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],

//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],

//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],

//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ],
//     ['Jair Bolsonaro', 2, 5, 'Jair Bolsonaro (De 25 a 34 anos)', ]
//   ]);

//   var options = {
//     title: 'Correlação entre Renda e Escolaridada por Intenção de Voto (2018)',
//     hAxis: { title: 'Renda Familiar' },
//     vAxis: { title: 'Escolaridade' },
//     bubble: { textStyle: { fontSize: 11 } },
//     colors: ['#E67322', '#E67322', '#F6BE9D', '#3A5461', '#3C93AF', '#71A7BF']
//   };

//   var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
//   chart.draw(data, options);
// }

