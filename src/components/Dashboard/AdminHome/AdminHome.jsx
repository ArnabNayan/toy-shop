import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {  FaMoneyBill, FaMotorcycle,  FaTractor,  FaUsers } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie, Legend } from 'recharts';
const colors = ['#0088FE', '#00C49F', 'red','#FFBB28', '#FF8042', 'pink' ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const AdminHome = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:stats=[]}=useQuery({
      queryKey:['admin-states'],
      queryFn: async()=>{
        const res=await axiosSecure.get('/admin-states');
        return res.data
      }
    })

    const {data:chartData=[]}=useQuery({
      queryKey:['order-stats'],
      queryFn: async()=>{
        const res=await axiosSecure.get('/order-stats');
        return res.data
      }
    })

    //custop shape for the bar chart
    const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

//custom shape for the pie chart

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const pieChartData=chartData.map(data=>{
  return {name:data.category,value:data.revenue}
})
    return (
        <div>     
             {
                user?.displayName?<h3 className="text-lg lg:text-3xl font-serif font-semibold">Hi, Welcome  <span className="text-lg lg:text-3xl font-serif font-semibold text-teal-600"> {user.displayName}</span></h3> :'Back'
               }
               <div className="stats shadow mt-10 gap-3">
  
               <div className="stat bg-rose-500 rounded-2xl">
                 <div className="stat-figure text-white">
                  <FaMoneyBill className="text-3xl"></FaMoneyBill>
                 </div>
                 <div className="stat-title text-white">Revenue</div>
                 <div className="stat-value text-white">{stats.revenue}</div>
                 <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
               </div>
               
               <div className="stat bg-amber-500 rounded-2xl w-48">
                 <div className="stat-figure text-white">
                   <FaUsers className="text-3xl"></FaUsers>
                 </div>
                 <div className="stat-title text-white">Users</div>
                 <div className="stat-value text-white">{stats.users}</div>
                 <div className="stat-desc text-white">↗︎ 400 (22%)</div>
               </div>
               
               <div className="stat bg-violet-600 rounded-2xl w-48">
                 <div className="stat-figure text-secondary">
                  <FaTractor className="text-3xl text-white"></FaTractor>
                 </div>
                 <div className="stat-title text-white">Orders</div>
                 <div className="stat-value text-white">{stats.orders}</div>
                 <div className="stat-desc text-white">↘︎ 90 (14%)</div>
             </div>
             <div className="stat bg-cyan-500 rounded-2xl w-48">
                 <div className="stat-figure text-white">
                   <FaMotorcycle className="text-3xl"></FaMotorcycle>
                 </div>
                 <div className="stat-title text-white">Toy Items</div>
                 <div className="stat-value text-white">{stats.toyItems}</div>
                 <div className="stat-desc text-white">↗︎ 400 (22%)</div>
               </div>
             </div>
            <div className="flex mt-5 gap-5">
               <div className="w-1/2">
                 <BarChart
      width={600}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
               </div>
               <div className="w-1/2">
                 <PieChart width={500} height={400}>
                   <Legend></Legend>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
         
        </PieChart>
               </div>
            </div>
           
        </div>
    );
};

export default AdminHome;