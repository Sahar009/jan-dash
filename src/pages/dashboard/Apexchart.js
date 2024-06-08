import React from 'react';
import Chart from 'react-apexcharts';
import './Apexchart.scss';

const Apexchart = () => {
  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
    },
    yaxis: {
      title: {
        text: '%',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    colors: ['#0f4471', '#ffa500'],
  };

  const barChartData = [{
    name: 'Earnings',
    data: [40, 60, 45, 80, 50, 30, 60, 70, 30, 90, 60, 50],
  }, {
    name: 'Expenses',
    data: [30, 50, 30, 70, 40, 20, 50, 60, 20, 80, 50, 40],
  }];

  const radialBarChartOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Students',
          }
        }
      }
    },
    labels: ['Male', 'Female'],
    colors: ['#ffa500', '#0f4471'],
  };

  const radialBarChartData = [55, 45];

  return (
    <div className="dashboard">
      <div className="chart-container">
        <Chart
          options={barChartOptions}
          series={barChartData}
          type="bar"
          height={350}
        />
      </div>
      <div className="chart-container">
        <Chart
          options={radialBarChartOptions}
          series={radialBarChartData}
          type="radialBar"
          height={350}
        />
      </div>
    </div>
  );
};

export default Apexchart;
