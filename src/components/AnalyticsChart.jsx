import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { registrationData } from '../mockData';

const AnalyticsChart = () => {
  return (
    <div style={{ width: '100%', height: 400, backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
      <h2 style={{ fontFamily: 'sans-serif', color: '#1e293b' }}>Активність реєстрацій</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={registrationData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="date" 
            tick={{fontSize: 12}} 
            tickFormatter={(str) => str.slice(5)} // Показуємо тільки MM-DD
          />
          <YAxis tick={{fontSize: 12}} />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Line 
            type="monotone" 
            dataKey="registrations" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ r: 6, fill: '#3b82f6' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;