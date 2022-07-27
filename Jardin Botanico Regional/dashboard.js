/* globals Chart:false, feather:false */
(() => {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Abril',
        'Mayo',
        'Junio',
        'Julio'
      ],
      datasets: [{
        label: 'Zapote',
        data: [
          70,
          102,
          131,
          98
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#F7464A',
        borderWidth: 4,
        pointBackgroundColor: '#FF5A5E'
      },
      {
        label: 'Caoba',
        data: [
          106,
          132,
          80,
          63
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#46BFBD',
        borderWidth: 4,
        pointBackgroundColor: '#5AD3D1'
      },
      {
        label: 'Cedro',
        data: [
          120,
          94,
          79,
          87
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#FDB45C',
        borderWidth: 4,
        pointBackgroundColor: '#FFC870'
      },
      {
        label: 'Guarumo',
        data: [
          94,
          76,
          106,
          71
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#949FB1',
        borderWidth: 4,
        pointBackgroundColor: '#A8B3C5'
      },
      {
        label: 'Chiit',
        data: [
          86,
          51,
          87,
          47
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#4D5360',
        borderWidth: 4,
        pointBackgroundColor: '#616774'
      },
      {
        label: 'Despeinada',
        data: [
          89,
          84,
          100,
          106
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#7dc4f0',
        borderWidth: 4,
        pointBackgroundColor: '#8dcff7'
      },
      {
        label: 'Ceiba',
        data: [
          80,
          94,
          106,
          79
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#4E8DC7',
        borderWidth: 4,
        pointBackgroundColor: '#4E8DC7'
      },
      {
        label: 'Chaka',
        data: [
          89,
          84,
          94,
          85
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#f77246',
        borderWidth: 4,
        pointBackgroundColor: '#f77246'
      },
      {
        label: 'Roble',
        data: [
          76,
          79,
          76,
          70
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#ba8dc9',
        borderWidth: 4,
        pointBackgroundColor: '#ba8dc9'
      },
      {
        label: 'Siricote',
        data: [
          102,
          81,
          89,
          59
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#95c98d',
        borderWidth: 4,
        pointBackgroundColor: '#95c98d'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
    }
  })
})()

var ctxP = document.getElementById("pieChart").getContext('2d');
    var myPieChart = new Chart(ctxP, {
      type: 'pie',
      data: {
        labels: ["Zapote", "Caoba", "Cedro", "Guarumo", "Chiit", "Despeinada", "Ceiba", "Chaka", "Roble", "Siricote"],
        datasets: [{
          data: [401, 381, 380, 347, 271, 379, 359, 352, 301, 331],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "#7dc4f0", "#4E8DC7", "#f77246", "#ba8dc9", "#95c98d"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774", "#8dcff7"]
        }]
      },
      options: {
        responsive: true
      }
    });

function tablaJulio()
{
  document.getElementById("Titulo").innerHTML = "Julio";
  document.getElementById("despeinada").style = "";
  document.getElementById("caoba").style = "";
  document.getElementById("cedro").style = "";
  document.getElementById("zapote").style = "background-color: #68c47a;";
  document.getElementById("Venta1").innerHTML="98";
  document.getElementById("Venta2").innerHTML="63";
  document.getElementById("Venta3").innerHTML="87";
  document.getElementById("Venta4").innerHTML="71";
  document.getElementById("Venta5").innerHTML="47";
  document.getElementById("Venta6").innerHTML="106";
  document.getElementById("Venta7").innerHTML="79";
  document.getElementById("Venta8").innerHTML="85";
  document.getElementById("Venta9").innerHTML="70";
  document.getElementById("Venta10").innerHTML="59";
  x1 = document.getElementById("Precio1").innerHTML;
  y1 = document.getElementById("Venta1").innerHTML;
  document.getElementById("Aporte1").innerHTML= x1*y1;
  x2 = document.getElementById("Precio2").innerHTML;
  y2 = document.getElementById("Venta2").innerHTML;
  document.getElementById("Aporte2").innerHTML= x2*y2;
  x3 = document.getElementById("Precio3").innerHTML;
  y3 = document.getElementById("Venta3").innerHTML;
  document.getElementById("Aporte3").innerHTML= x3*y3;
  x4 = document.getElementById("Precio4").innerHTML;
  y4 = document.getElementById("Venta4").innerHTML;
  document.getElementById("Aporte4").innerHTML= x4*y4;
  x5 = document.getElementById("Precio5").innerHTML;
  y5 = document.getElementById("Venta5").innerHTML;
  document.getElementById("Aporte5").innerHTML= x5*y5;
  x6 = document.getElementById("Precio6").innerHTML;
  y6 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x6*y6;
  x7 = document.getElementById("Precio6").innerHTML;
  y7 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x7*y7;
  x8 = document.getElementById("Precio6").innerHTML;
  y8 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x8*y8;
  x9 = document.getElementById("Precio6").innerHTML;
  y9 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x9*y9;
  x10 = document.getElementById("Precio6").innerHTML;
  y10 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x10*y10;
  xTotal = parseFloat(y1)+parseFloat(y2)+parseFloat(y3)+parseFloat(y4)+parseFloat(y5)+parseFloat(y6)+parseFloat(y7)+parseFloat(y8)+parseFloat(y9)+parseFloat(y10);
  yTotal = parseFloat(x1*y1)+parseFloat(x2*y2)+parseFloat(x3*y3)+parseFloat(x4*y4)+parseFloat(x5*y5)+parseFloat(x6*y6)+parseFloat(x7*y7)+parseFloat(x8*y8)+parseFloat(x9*y9)+parseFloat(x10*y10);
  document.getElementById("VentaTotal").innerHTML= xTotal;
  document.getElementById("AporteTotal").innerHTML= yTotal;
}

function tablaJunio()
{
  document.getElementById("Titulo").innerHTML = "Junio";
  document.getElementById("despeinada").style = "";
  document.getElementById("caoba").style = "";
  document.getElementById("cedro").style = "";
  document.getElementById("zapote").style = "background-color: #68c47a;";
  document.getElementById("Venta1").innerHTML="131";
  document.getElementById("Venta2").innerHTML="80";
  document.getElementById("Venta3").innerHTML="79";
  document.getElementById("Venta4").innerHTML="106";
  document.getElementById("Venta5").innerHTML="87";
  document.getElementById("Venta6").innerHTML="100";
  document.getElementById("Venta7").innerHTML="106";
  document.getElementById("Venta8").innerHTML="94";
  document.getElementById("Venta9").innerHTML="76";
  document.getElementById("Venta10").innerHTML="89";
  x1 = document.getElementById("Precio1").innerHTML;
  y1 = document.getElementById("Venta1").innerHTML;
  document.getElementById("Aporte1").innerHTML= x1*y1;
  x2 = document.getElementById("Precio2").innerHTML;
  y2 = document.getElementById("Venta2").innerHTML;
  document.getElementById("Aporte2").innerHTML= x2*y2;
  x3 = document.getElementById("Precio3").innerHTML;
  y3 = document.getElementById("Venta3").innerHTML;
  document.getElementById("Aporte3").innerHTML= x3*y3;
  x4 = document.getElementById("Precio4").innerHTML;
  y4 = document.getElementById("Venta4").innerHTML;
  document.getElementById("Aporte4").innerHTML= x4*y4;
  x5 = document.getElementById("Precio5").innerHTML;
  y5 = document.getElementById("Venta5").innerHTML;
  document.getElementById("Aporte5").innerHTML= x5*y5;
  x6 = document.getElementById("Precio6").innerHTML;
  y6 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x6*y6;
  x7 = document.getElementById("Precio6").innerHTML;
  y7 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x7*y7;
  x8 = document.getElementById("Precio6").innerHTML;
  y8 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x8*y8;
  x9 = document.getElementById("Precio6").innerHTML;
  y9 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x9*y9;
  x10 = document.getElementById("Precio6").innerHTML;
  y10 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x10*y10;
  xTotal = parseFloat(y1)+parseFloat(y2)+parseFloat(y3)+parseFloat(y4)+parseFloat(y5)+parseFloat(y6)+parseFloat(y7)+parseFloat(y8)+parseFloat(y9)+parseFloat(y10);
  yTotal = parseFloat(x1*y1)+parseFloat(x2*y2)+parseFloat(x3*y3)+parseFloat(x4*y4)+parseFloat(x5*y5)+parseFloat(x6*y6)+parseFloat(x7*y7)+parseFloat(x8*y8)+parseFloat(x9*y9)+parseFloat(x10*y10);
  document.getElementById("VentaTotal").innerHTML= xTotal;
  document.getElementById("AporteTotal").innerHTML= yTotal;
}

function tablaMayo()
{
  document.getElementById("Titulo").innerHTML = "Mayo";
  document.getElementById("despeinada").style = "";
  document.getElementById("caoba").style = "background-color: #68c47a;";
  document.getElementById("cedro").style = "";
  document.getElementById("zapote").style = "";
  document.getElementById("Venta1").innerHTML="102";
  document.getElementById("Venta2").innerHTML="132";
  document.getElementById("Venta3").innerHTML="94";
  document.getElementById("Venta4").innerHTML="76";
  document.getElementById("Venta5").innerHTML="51";
  document.getElementById("Venta6").innerHTML="84";
  document.getElementById("Venta7").innerHTML="94";
  document.getElementById("Venta8").innerHTML="84";
  document.getElementById("Venta9").innerHTML="79";
  document.getElementById("Venta10").innerHTML="81";
  x1 = document.getElementById("Precio1").innerHTML;
  y1 = document.getElementById("Venta1").innerHTML;
  document.getElementById("Aporte1").innerHTML= x1*y1;
  x2 = document.getElementById("Precio2").innerHTML;
  y2 = document.getElementById("Venta2").innerHTML;
  document.getElementById("Aporte2").innerHTML= x2*y2;
  x3 = document.getElementById("Precio3").innerHTML;
  y3 = document.getElementById("Venta3").innerHTML;
  document.getElementById("Aporte3").innerHTML= x3*y3;
  x4 = document.getElementById("Precio4").innerHTML;
  y4 = document.getElementById("Venta4").innerHTML;
  document.getElementById("Aporte4").innerHTML= x4*y4;
  x5 = document.getElementById("Precio5").innerHTML;
  y5 = document.getElementById("Venta5").innerHTML;
  document.getElementById("Aporte5").innerHTML= x5*y5;
  x6 = document.getElementById("Precio6").innerHTML;
  y6 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x6*y6;
  x7 = document.getElementById("Precio6").innerHTML;
  y7 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x7*y7;
  x8 = document.getElementById("Precio6").innerHTML;
  y8 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x8*y8;
  x9 = document.getElementById("Precio6").innerHTML;
  y9 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x9*y9;
  x10 = document.getElementById("Precio6").innerHTML;
  y10 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x10*y10;
  xTotal = parseFloat(y1)+parseFloat(y2)+parseFloat(y3)+parseFloat(y4)+parseFloat(y5)+parseFloat(y6)+parseFloat(y7)+parseFloat(y8)+parseFloat(y9)+parseFloat(y10);
  yTotal = parseFloat(x1*y1)+parseFloat(x2*y2)+parseFloat(x3*y3)+parseFloat(x4*y4)+parseFloat(x5*y5)+parseFloat(x6*y6)+parseFloat(x7*y7)+parseFloat(x8*y8)+parseFloat(x9*y9)+parseFloat(x10*y10);
  document.getElementById("VentaTotal").innerHTML= xTotal;
  document.getElementById("AporteTotal").innerHTML= yTotal;
}

function tablaAbril()
{
  document.getElementById("Titulo").innerHTML = "Abril";
  document.getElementById("despeinada").style = "";
  document.getElementById("caoba").style = "";
  document.getElementById("cedro").style = "background-color: #68c47a;";
  document.getElementById("zapote").style = "";
  document.getElementById("Venta1").innerHTML="70";
  document.getElementById("Venta2").innerHTML="106";
  document.getElementById("Venta3").innerHTML="120";
  document.getElementById("Venta4").innerHTML="94";
  document.getElementById("Venta5").innerHTML="86";
  document.getElementById("Venta6").innerHTML="89";
  document.getElementById("Venta7").innerHTML="80";
  document.getElementById("Venta8").innerHTML="89";
  document.getElementById("Venta9").innerHTML="76";
  document.getElementById("Venta10").innerHTML="102";
  x1 = document.getElementById("Precio1").innerHTML;
  y1 = document.getElementById("Venta1").innerHTML;
  document.getElementById("Aporte1").innerHTML= x1*y1;
  x2 = document.getElementById("Precio2").innerHTML;
  y2 = document.getElementById("Venta2").innerHTML;
  document.getElementById("Aporte2").innerHTML= x2*y2;
  x3 = document.getElementById("Precio3").innerHTML;
  y3 = document.getElementById("Venta3").innerHTML;
  document.getElementById("Aporte3").innerHTML= x3*y3;
  x4 = document.getElementById("Precio4").innerHTML;
  y4 = document.getElementById("Venta4").innerHTML;
  document.getElementById("Aporte4").innerHTML= x4*y4;
  x5 = document.getElementById("Precio5").innerHTML;
  y5 = document.getElementById("Venta5").innerHTML;
  document.getElementById("Aporte5").innerHTML= x5*y5;
  x6 = document.getElementById("Precio6").innerHTML;
  y6 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x6*y6;
  x7 = document.getElementById("Precio6").innerHTML;
  y7 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x7*y7;
  x8 = document.getElementById("Precio6").innerHTML;
  y8 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x8*y8;
  x9 = document.getElementById("Precio6").innerHTML;
  y9 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x9*y9;
  x10 = document.getElementById("Precio6").innerHTML;
  y10 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x10*y10;
  xTotal = parseFloat(y1)+parseFloat(y2)+parseFloat(y3)+parseFloat(y4)+parseFloat(y5)+parseFloat(y6)+parseFloat(y7)+parseFloat(y8)+parseFloat(y9)+parseFloat(y10);
  yTotal = parseFloat(x1*y1)+parseFloat(x2*y2)+parseFloat(x3*y3)+parseFloat(x4*y4)+parseFloat(x5*y5)+parseFloat(x6*y6)+parseFloat(x7*y7)+parseFloat(x8*y8)+parseFloat(x9*y9)+parseFloat(x10*y10);
  document.getElementById("VentaTotal").innerHTML= xTotal;
  document.getElementById("AporteTotal").innerHTML= yTotal;
}

function tablaCuatri()
{
  document.getElementById("Titulo").innerHTML = "Ultimo cuatrimestre";
  document.getElementById("despeinada").style = "";
  document.getElementById("caoba").style = "";
  document.getElementById("cedro").style = "";
  document.getElementById("zapote").style = "background-color: #68c47a;";
  document.getElementById("Venta1").innerHTML="401";
  document.getElementById("Venta2").innerHTML="381";
  document.getElementById("Venta3").innerHTML="380";
  document.getElementById("Venta4").innerHTML="347";
  document.getElementById("Venta5").innerHTML="271";
  document.getElementById("Venta6").innerHTML="379";
  document.getElementById("Venta7").innerHTML="359";
  document.getElementById("Venta8").innerHTML="352";
  document.getElementById("Venta9").innerHTML="301";
  document.getElementById("Venta10").innerHTML="331";
  x1 = document.getElementById("Precio1").innerHTML;
  y1 = document.getElementById("Venta1").innerHTML;
  document.getElementById("Aporte1").innerHTML= x1*y1;
  x2 = document.getElementById("Precio2").innerHTML;
  y2 = document.getElementById("Venta2").innerHTML;
  document.getElementById("Aporte2").innerHTML= x2*y2;
  x3 = document.getElementById("Precio3").innerHTML;
  y3 = document.getElementById("Venta3").innerHTML;
  document.getElementById("Aporte3").innerHTML= x3*y3;
  x4 = document.getElementById("Precio4").innerHTML;
  y4 = document.getElementById("Venta4").innerHTML;
  document.getElementById("Aporte4").innerHTML= x4*y4;
  x5 = document.getElementById("Precio5").innerHTML;
  y5 = document.getElementById("Venta5").innerHTML;
  document.getElementById("Aporte5").innerHTML= x5*y5;
  x6 = document.getElementById("Precio6").innerHTML;
  y6 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x6*y6;
  x7 = document.getElementById("Precio6").innerHTML;
  y7 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x7*y7;
  x8 = document.getElementById("Precio6").innerHTML;
  y8 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x8*y8;
  x9 = document.getElementById("Precio6").innerHTML;
  y9 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x9*y9;
  x10 = document.getElementById("Precio6").innerHTML;
  y10 = document.getElementById("Venta6").innerHTML;
  document.getElementById("Aporte6").innerHTML= x10*y10;
  xTotal = parseFloat(y1)+parseFloat(y2)+parseFloat(y3)+parseFloat(y4)+parseFloat(y5)+parseFloat(y6)+parseFloat(y7)+parseFloat(y8)+parseFloat(y9)+parseFloat(y10);
  yTotal = parseFloat(x1*y1)+parseFloat(x2*y2)+parseFloat(x3*y3)+parseFloat(x4*y4)+parseFloat(x5*y5)+parseFloat(x6*y6)+parseFloat(x7*y7)+parseFloat(x8*y8)+parseFloat(x9*y9)+parseFloat(x10*y10);
  document.getElementById("VentaTotal").innerHTML= xTotal;
  document.getElementById("AporteTotal").innerHTML= yTotal;
}