import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Counter = ({ value, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="text-center p-4 bg-[#364153] rounded-2xl shadow-lg">
      {inView && (
        <CountUp
          start={0}
          end={value}
          duration={2.5}
          className="text-4xl font-bold text-blue-600"
        />
      )}
      <p className="text-lg text-[#95989F] text-600 mt-2">{label}</p>
    </div>
  );
};

export default function CounterUpSection() {
  const stats = [
    { value: 1500, label: 'Users' },
    { value: 250, label: 'Projects' },
    { value: 120, label: 'Clients' },
    { value: 50, label: 'Awards' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Counter key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
}
