 // import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

// const data = [
//   { name: 'Placed', value: 500 },
//   { name: 'Unplaced', value: 200 },
//   { name: 'Remaining', value: 300 },
// ];

// const COLORS = ['rgba(180, 223, 229, 1)', 'rgba(48, 60, 108, 1)', 'rgba(250, 151, 108, 1)'];

// const renderActiveShape = (props) => {
//   const [count, setCount] = useState(null);
//   //no of placed student
//   const [placedcount, setplacedCount] = useState(0);
//   const authToken = localStorage.getItem('authToken');
//   console.log(authToken);
//   async function fetchStudentCount() {
//     if (!authToken) {
//         console.error('No authToken found');
//         return;
//     }

//     try {
//         const response = await fetch('http://localhost:3000/students/alluser', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${authToken}`
//             }
//         });
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data.count;  
//     } catch (error) {
//         console.error('Error fetching student count:', error);
//     }
// }
// async function fetchPlacedStudentCount() {
//   if (!authToken) {
//       console.error('No authToken found');
//       return;
//   }

//   try {
//       const response = await fetch('http://localhost:3000/students/placedStudent', {
//           method: 'GET',
//           headers: {
//               'Authorization': `Bearer ${authToken}`
//           }
//       });
//       if (!response.ok) {
//           throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data);
//       return data;  
//   } catch (error) {
//       console.error('Error fetching student count:', error);
//   }
// }
 
//   useEffect(() => {
//     async function getCount() {
//         const count = await fetchStudentCount();
//         setCount(count);
//     }
//     async function getplacedCount() {
//       const placedcount= await  fetchPlacedStudentCount();
//       setplacedCount(placedcount.count);
//   }
//     getCount();
//     getplacedCount(); 
// }, []);

//   const RADIAN = Math.PI / 180;
//   const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? 'start' : 'end';




//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
//         PV {value}
//       </text>
//       <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
//         Rate {(percent * 100).toFixed(2)}%
//       </text>
//     </g>
//   );
// };

// export default class Example extends PureComponent {
//   state = {
//     activeIndex: 0,
//   };

//   onPieEnter = (_, index) => {
//     this.setState({
//       activeIndex: index,
//     });
//   };

//   render() {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
//         <ResponsiveContainer width="100%" height={400}>
//           <PieChart>
//             <Pie
//               activeIndex={this.state.activeIndex}
//               activeShape={renderActiveShape}
//               data={data}
//               cx="50%"
//               cy="50%"
//               innerRadius="40%"
//               outerRadius="60%"
//               fill="#8884d8"
//               dataKey="value"
//               onMouseEnter={this.onPieEnter}
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   }
// }
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['rgba(180, 223, 229, 1)', 'rgba(48, 60, 108, 1)', 'rgba(250, 151, 108, 1)'];

const RADIAN = Math.PI / 180;

const renderActiveShape = (props) => {
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Student ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`Rate ${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

export default class Example extends PureComponent {
  state = {
    activeIndex: 0,
    data: [],
  };

  async componentDidMount() {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      console.error('No authToken found');
      return;
    }

    try {
      const [totalResponse, placedResponse] = await Promise.all([
        fetch('http://localhost:3000/students/alluser', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }),
        fetch('http://localhost:3000/students/placedStudent', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        })
      ]);

      if (!totalResponse.ok || !placedResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const totalData = await totalResponse.json();
      const placedData = await placedResponse.json();

      const totalCount = totalData.count;
      const placedCount = placedData.count;
      const unplacedCount = totalCount - placedCount;

      this.setState({
        data: [
          { name: 'Placed', value: placedCount },
          { name: 'Unplaced', value: unplacedCount },
          { name: 'All Student', value:  totalCount },
        ]
      });
    } catch (error) {
      console.error('Error fetching student count:', error);
    }
  }

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div> 
      <div>
      <h1 className="text-green-400 text-lg font-semibold">
        Top Placements
      </h1>
    </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={this.state.data}
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="60%"
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={this.onPieEnter}
            >
              {this.state.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      </div>
    );
  }
}


         