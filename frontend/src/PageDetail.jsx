// import HistoryChart from './components/HistoryChart'
// import CoinDetail from './components/CoinDetail'
// const PageDetail = () => {
//   return (
//     <div className='wrapper-container mt-10 bg-black'>
//       <HistoryChart/>
//       <CoinDetail/>
//     </div>
//   )
// }

// export default PageDetail

// PageDetail component
import HistoryChart from './components/HistoryChart'
import CoinDetail from './components/CoinDetail'

const PageDetail = () => {
  return (
    <div className='wrapper-container bg-black'>
      <div className="coin-detail">
        <div className="coin-detail-container">
          <CoinDetail />
        </div>
      </div>
      <div className="line"></div>
      <div className="history-chart">
        <div className="chart-container">
          <HistoryChart />
        </div>
      </div>
    </div>
  )
}

export default PageDetail
