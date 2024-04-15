import { pieChartData } from '../../data/dummy';
import { Header, Pie as PieChart } from '../../components';

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
    <Header category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisibility={true} height='full'/>
    </div>
  </div>
);

export default Pie;