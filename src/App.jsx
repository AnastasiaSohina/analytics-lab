import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Імітація отримання даних з API (вимога Просунутого рівня)
  useEffect(() => {
    const fetchData = async () => {
      // Імітуємо затримку мережі
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const apiResponse = [
        { name: 'Пн', reg: 12 },
        { name: 'Вв', reg: 18 },
        { name: 'Ср', reg: 15 },
        { name: 'Чт', reg: 25 },
        { name: 'Пт', reg: 32 },
        { name: 'Сб', reg: 20 },
        { name: 'Нд', reg: 40 },
      ];
      
      setData(apiResponse);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100%',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '15px' 
    }}>
      <div style={{ 
        backgroundColor: '#ffffff', 
        padding: 'clamp(15px, 5vw, 30px)', 
        borderRadius: '20px', 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '800px'
      }}>
        <h1 style={{ 
          color: '#0f172a', 
          fontSize: 'clamp(20px, 6vw, 28px)', 
          margin: '0 0 8px 0' 
        }}>
          Аналітика реєстрацій 📈
        </h1>
        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '30px' }}>
          Дані оновлено в реальному часі
        </p>

        {loading ? (
          <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ color: '#6366f1', fontWeight: 'bold' }}>Завантаження даних...</p>
          </div>
        ) : (
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}} 
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' 
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="reg" 
                  stroke="#6366f1" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorReg)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        <div style={{ 
          marginTop: '25px', 
          paddingTop: '20px', 
          borderTop: '1px solid #f1f5f9', 
          display: 'flex', 
          gap: '30px' 
        }}>
          <div>
            <span style={{ display: 'block', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' }}>Всього</span>
            <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#0f172a' }}>162</span>
          </div>
          <div>
            <span style={{ display: 'block', fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' }}>Тренд</span>
            <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#10b981' }}>+12%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;