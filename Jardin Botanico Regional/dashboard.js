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
        labels: ["Zapote", "Caoba", "Cedro", "Guarumo", "Chiit", "Despeinada"],
        datasets: [{
          data: [401, 381, 380, 347, 271, 271],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "#7dc4f0"],
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
  document.getElementById("Venta1").innerHTML="98";
  document.getElementById("Venta2").innerHTML="63";
  document.getElementById("Venta3").innerHTML="87";
  document.getElementById("Venta4").innerHTML="71";
  document.getElementById("Venta5").innerHTML="47";
  document.getElementById("Venta6").innerHTML="106";
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
  xTotal = parseFloat(y1)+parseFloat(y2)+parseFloat(y3)+parseFloat(y4)+parseFloat(y5)+parseFloat(y6);
  yTotal = parseFloat(x1*y1)+parseFloat(x2*y2)+parseFloat(x3*y3)+parseFloat(x4*y4)+parseFloat(x5*y5)+parseFloat(x6*y6);
  document.getElementById("VentaTotal").innerHTML= xTotal;
  document.getElementById("AporteTotal").innerHTML= yTotal;
}

function tablaJunio()
{
  document.getElementById("Titulo").innerHTML = "Junio";
  document.getElementById("Venta1").innerHTML="131";
  document.getElementById("Venta2").innerHTML="80";
  document.getElementById("Venta3").innerHTML="79";
  document.getElementById("Venta4").innerHTML="106";
  document.getElementById("Venta5").innerHTML="87";
  document.getElementById("Venta6").innerHTML="100";
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
  xTotal = parseFloat(y1)+parseFloat(y2)+parseFloat(y3)+parseFloat(y4)+parseFloat(y5)+parseFloat(y6);
  yTotal = parseFloat(x1*y1)+parseFloat(x2*y2)+parseFloat(x3*y3)+parseFloat(x4*y4)+parseFloat(x5*y5)+parseFloat(x6*y6);
  document.getElementById("VentaTotal").innerHTML= xTotal;
  document.getElementById("AporteTotal").innerHTML= yTotal;
}

function tablaMayo()
{
  document.getElementById("Titulo").innerHTML = "Mayo";
  document.getElementById("Venta1").innerHTML="102";
  document.getElementById("Venta2").innerHTML="132";
  document.getElementById("Venta3").innerHTML="94";
  document.getElementById("Venta4").innerHTML="76";
  document.getElementById("Venta5").innerHTML="51";
  document.getElementById("Venta6").innerHTML="84";
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
  xTotal = parseFloat(y1)+parseFloat(y2)+parseFloat(y3)+parseFloat(y4)+parseFloat(y5)+parseFloat(y6);
  yTotal = parseFloat(x1*y1)+parseFloat(x2*y2)+parseFloat(x3*y3)+parseFloat(x4*y4)+parseFloat(x5*y5)+parseFloat(x6*y6);
  document.getElementById("VentaTotal").innerHTML= xTotal;
  document.getElementById("AporteTotal").innerHTML= yTotal;
}

function tablaAbril()
{
  document.getElementById("Titulo").innerHTML = "Abril";
  document.getElementById("Venta1").innerHTML="70";
  document.getElementById("Venta2").innerHTML="106";
  document.getElementById("Venta3").innerHTML="120";
  document.getElementById("Venta4").innerHTML="94";
  document.getElementById("Venta5").innerHTML="86";
  document.getElementById("Venta6").innerHTML="89";
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
  xTotal = parseFloat(y1)+parseFloat(y2)+parseFloat(y3)+parseFloat(y4)+parseFloat(y5)+parseFloat(y6);
  yTotal = parseFloat(x1*y1)+parseFloat(x2*y2)+parseFloat(x3*y3)+parseFloat(x4*y4)+parseFloat(x5*y5)+parseFloat(x6*y6);
  document.getElementById("VentaTotal").innerHTML= xTotal;
  document.getElementById("AporteTotal").innerHTML= yTotal;
}

function tablaCuatri()
{
  document.getElementById("Titulo").innerHTML = "Ultimo cuatrimestre";
  document.getElementById("Venta1").innerHTML="401";
  document.getElementById("Venta2").innerHTML="381";
  document.getElementById("Venta3").innerHTML="380";
  document.getElementById("Venta4").innerHTML="347";
  document.getElementById("Venta5").innerHTML="271";
  document.getElementById("Venta6").innerHTML="379";
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
  xTotal = parseFloat(y1)+parseFloat(y2)+parseFloat(y3)+parseFloat(y4)+parseFloat(y5)+parseFloat(y6);
  yTotal = parseFloat(x1*y1)+parseFloat(x2*y2)+parseFloat(x3*y3)+parseFloat(x4*y4)+parseFloat(x5*y5)+parseFloat(x6*y6);
  document.getElementById("VentaTotal").innerHTML= xTotal;
  document.getElementById("AporteTotal").innerHTML= yTotal;
}