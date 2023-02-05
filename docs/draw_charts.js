
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




const pages_count = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Page Count'
    },
    xAxis: {
      categories: [
        '10 pages',
        '100 pages',
        '1K pages',
        '10K pages',
        '100K pages (Fail)'
      ],
      crosshair: true
    },
    yAxis: [{
      min: 0,
      title: {
        text: 'Size (KB)'
      }
    },{
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
      name: 'Build Size KB',
      data: [8.29, 52.24, 491.69, 4770, 0]
  
    },{
      name: 'Build Time sec',
      data: [3.67, 4.28, 11.13, 151.80, 0],
      yAxis: 2
  
    },{
      name: 'Memory MB',
      data: [350, 380, 665, 2820, 4270],
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
    draw_chart(pages_count)
}

draw_all_charts().then(console.log("done"))
