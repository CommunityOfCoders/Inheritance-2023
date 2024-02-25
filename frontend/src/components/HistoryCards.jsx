import React, { useState } from 'react';
import useAxios from "../hooks/useAxios";
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import Skeleton from "./Skeleton";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js/auto';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryCards = ({id}) => {
 
  const [chartType, setChartType] = useState('7days');

  const { response: response7Days, loading: loading7Days } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`); 
  const { response: response1Day, loading: loading1Day } = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=1`);

  if (loading7Days || loading1Day) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    );
  }

  const coinChartData7Days = response7Days?.prices?.map(value => ({ x: value[0], y: value[1].toFixed(2) })) || [];
  const coinChartData1Day = response1Day?.prices?.map(value => ({ x: value[0], y: value[1].toFixed(2) })) || [];

  const options = {
    responsive: true
  };

  const data7Days = {
    labels: coinChartData7Days.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: false,
        label: id,
        data: coinChartData7Days.map(val => val.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        pointRadius: 1,
      }
    ]
  };

  const data1Day = {
    labels: coinChartData1Day.map(value => moment(value.x).format('MMM D, h:mm a')),
    datasets: [
      {
        fill: false,
        label: `${id} (Last 24 Hours)`,
        data: coinChartData1Day.map(val => val.y),
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'rgba(255,99,132,0.5)',
        pointRadius: 1,
      }
    ]
  };

  return (
    <div>
      {chartType === '7days' && (
        <div>
          <h2>Last 7 Days</h2>
          <Line options={options} data={data7Days} />
        </div>
      )}
      {chartType === '24hours' && (
        <div>
          <h2>Last 24 Hours</h2>
          <Line options={options} data={data1Day} />
        </div>
      )}
      <div className="text-center mt-5">
        <button
          onClick={() => setChartType('7days')}
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-2 ${chartType === '7days' ? 'bg-blue-600' : ''}`}
        >
          7 Days
        </button>
        <button
          onClick={() => setChartType('24hours')}
          className={`bg-blue-500 hover.bg-blue-600 text-white font-bold py-2 px-4 rounded-full ${chartType === '24hours' ? 'bg-blue-600' : ''}`}
        >
          24 Hours
        </button>
      </div>
    </div>
  );
}

export default HistoryCards;
