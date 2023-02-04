
const static_server = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'SSG Vs SSR'
    },
    xAxis: {
      categories: [
        'Static',
        'Server'
      ],
      crosshair: true
    },
    yAxis: [{
      min: 0,
      title: {
        text: 'Size (MB)'
      }
    },{
        min: 0,
        title: {
          text: 'Time (sec)'
        },
        opposite: true
      }],
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Build Size',
      data: [7.947, 22.32]
  
    }, {
      name: 'Build Time',
      data: [83.6, 78.8],
      yAxis: 1
  
    }]
  }

function draw_chart(chart){
    const element = document.createElement("div")
    document.body.appendChild(element);
    Highcharts.chart(element, chart);
}

async function draw_all_charts(){
    //const resp = await fetch('./results.json')
    //const data = await resp.json()
    //console.log(data)

    draw_chart(static_server)
}

draw_all_charts().then(console.log("done"))
