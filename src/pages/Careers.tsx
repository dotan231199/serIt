import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MonitorSmartphone, 
  ShieldCheck, 
  Headset, 
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  X,
  Briefcase,
  Users,
  Award,
  Cpu,
  GraduationCap,
  Zap
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';

const IndustryOverview = () => {
  const [selectedChar, setSelectedChar] = useState<any>(null);

  const salaryData = [
    { name: "Mới ra trường", salary: 10.5 },
    { name: "1-2 năm", salary: 17 },
    { name: "3-4 năm", salary: 27 },
    { name: "5-8 năm", salary: 40 },
    { name: "Chuyên gia", salary: 65 },
  ];

  const characteristics = [
    {
      title: "Tiếp xúc trực tiếp với người dùng",
      desc: "Luôn giao tiếp, hướng dẫn và hỗ trợ khách hàng hoặc nhân viên khi họ gặp vấn đề về thiết bị, phần mềm hay tài khoản.",
      fullDesc: "Trong ngành IT Services, việc tương tác với người dùng là một phần không thể thiếu. Bạn sẽ là cầu nối giữa công nghệ và con người, giúp họ hiểu và sử dụng các hệ thống một cách hiệu quả nhất. Kỹ năng giao tiếp và sự kiên nhẫn là chìa khóa để thành công trong vai trò này.",
      skills: ["Giao tiếp hiệu quả", "Lắng nghe thấu cảm", "Giải quyết vấn đề", "Kiên nhẫn"],
      icon: <Users className="h-7 w-7 text-blue-400" />,
      bg: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      glowColor: "hover:shadow-blue-500/40",
      modalColor: "from-blue-500/20 to-blue-900/50",
      textColor: "text-blue-400"
    },
    {
      title: "Xử lý và khắc phục sự cố thường xuyên",
      desc: "Công việc liên tục liên quan đến sửa lỗi, cài đặt lại hệ thống, bảo trì thiết bị, đảm bảo mọi thứ hoạt động bình thường.",
      fullDesc: "Khắc phục sự cố (Troubleshooting) là kỹ năng cốt lõi. Bạn sẽ phải đối mặt với nhiều vấn đề đa dạng từ phần cứng, phần mềm đến mạng lưới. Khả năng phân tích logic, chẩn đoán lỗi chính xác và đưa ra giải pháp nhanh chóng là rất quan trọng.",
      skills: ["Phân tích logic", "Chẩn đoán lỗi", "Quản lý thời gian", "Chịu áp lực cao"],
      icon: <CheckCircle2 className="h-7 w-7 text-emerald-400" />,
      bg: "bg-emerald-500/20",
      borderColor: "border-emerald-500/30",
      glowColor: "hover:shadow-emerald-500/40",
      modalColor: "from-emerald-500/20 to-emerald-900/50",
      textColor: "text-emerald-400"
    },
    {
      title: "Yêu cầu kỹ năng kỹ thuật vững",
      desc: "Cần nắm chắc kiến thức về phần cứng, phần mềm, mạng cơ bản, bảo mật… để giải quyết vấn đề nhanh và chính xác.",
      fullDesc: "Ngành IT Services đòi hỏi nền tảng kiến thức kỹ thuật rộng và vững chắc. Bạn không chỉ cần biết cách sử dụng mà còn phải hiểu rõ nguyên lý hoạt động của các hệ thống máy tính, mạng, máy chủ và các ứng dụng phần mềm.",
      skills: ["Quản trị mạng", "Hệ điều hành (Windows/Linux)", "Bảo mật cơ bản", "Phần cứng máy tính"],
      icon: <MonitorSmartphone className="h-7 w-7 text-purple-400" />,
      bg: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      glowColor: "hover:shadow-purple-500/40",
      modalColor: "from-purple-500/20 to-purple-900/50",
      textColor: "text-purple-400"
    },
    {
      title: "Cường độ công việc linh hoạt, đột xuất",
      desc: "Phải sẵn sàng phản ứng khi có sự cố bất ngờ xảy ra, có thể làm ngoài giờ trong trường hợp khẩn cấp.",
      fullDesc: "Đặc thù của ngành dịch vụ IT là các sự cố có thể xảy ra bất cứ lúc nào. Sự linh hoạt trong thời gian làm việc và khả năng sẵn sàng ứng phó với các tình huống khẩn cấp (on-call) là điều thường thấy, đặc biệt ở các vị trí quản trị hệ thống.",
      skills: ["Sẵn sàng ứng phó", "Linh hoạt thời gian", "Quản lý rủi ro", "Làm việc độc lập"],
      icon: <TrendingUp className="h-7 w-7 text-orange-400" />,
      bg: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
      glowColor: "hover:shadow-orange-500/40",
      modalColor: "from-orange-500/20 to-orange-900/50",
      textColor: "text-orange-400"
    },
    {
      title: "Luôn phải cập nhật công nghệ mới",
      desc: "Công nghệ thay đổi liên tục, vì thế người làm nghề cần học hỏi không ngừng để đáp ứng yêu cầu thực tế và hỗ trợ hiệu quả.",
      fullDesc: "Thế giới công nghệ không bao giờ đứng yên. Để không bị tụt hậu và luôn cung cấp dịch vụ tốt nhất, chuyên viên IT Services phải có tinh thần tự học cao, thường xuyên cập nhật các xu hướng, công cụ và giải pháp mới nhất trên thị trường.",
      skills: ["Tự học", "Nghiên cứu công nghệ", "Thích ứng nhanh", "Đọc hiểu tài liệu tiếng Anh"],
      icon: <GraduationCap className="h-7 w-7 text-rose-400" />,
      bg: "bg-rose-500/20",
      borderColor: "border-rose-500/30",
      glowColor: "hover:shadow-rose-500/40",
      modalColor: "from-rose-500/20 to-rose-900/50",
      textColor: "text-rose-400"
    }
  ];

  const NodeCard = ({ item, index }: { item: any, index: number, key?: React.Key }) => (
    <motion.div
      onClick={() => setSelectedChar(item)}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`block bg-slate-800/50 backdrop-blur-xl p-6 rounded-[2rem] shadow-xl border ${item.borderColor || 'border-white/10'} flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-3 hover:bg-slate-800/80 hover:shadow-2xl ${item.glowColor} relative z-10 h-full w-full max-w-[320px] mx-auto overflow-hidden cursor-pointer`}
    >
      {/* Subtle background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-5 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg relative z-10`}>
        {item.icon}
      </div>
      <h4 className="font-bold text-white text-lg mb-3 relative z-10">{item.title}</h4>
      <p className="text-slate-300 text-sm leading-relaxed mb-4 relative z-10 flex-grow">{item.desc}</p>
      
      <div className="mt-auto flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors relative z-10">
        <span>Tìm hiểu thêm</span>
        <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );

  return (
    <section id="overview" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-32">
          <div className="text-center mb-28">
            <div className="inline-block px-4 py-1 bg-white/10 text-blue-400 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm border border-white/20 backdrop-blur-md">
              Phân tích ngành
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">Đặc Điểm Ngành Nghề</h2>
          </div>
          
          {/* Desktop Diagram Layout */}
          <div className="relative w-full max-w-6xl mx-auto hidden lg:block h-[1000px] mt-12">
            {/* SVG Lines */}
            <motion.svg 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="grad4" x1="50%" y1="100%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="grad5" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Lines from center (50%, 50%) to star points */}
              <line x1="50%" y1="50%" x2="50.1%" y2="10%" stroke="url(#grad1)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" filter="url(#glow)" />
              <line x1="50%" y1="50%" x2="83%" y2="39%" stroke="url(#grad2)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" filter="url(#glow)" />
              <line x1="50%" y1="50%" x2="75%" y2="85%" stroke="url(#grad3)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" filter="url(#glow)" />
              <line x1="50%" y1="50%" x2="25%" y2="85%" stroke="url(#grad4)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" filter="url(#glow)" />
              <line x1="50%" y1="50%" x2="17%" y2="39%" stroke="url(#grad5)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" filter="url(#glow)" />
            </motion.svg>

            {/* Top */}
            <div className="absolute top-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[320px]">
              <NodeCard item={characteristics[0]} index={0} />
            </div>
            
            {/* Top Right */}
            <div className="absolute top-[39%] left-[83%] -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[320px]">
              <NodeCard item={characteristics[1]} index={1} />
            </div>

            {/* Bottom Right */}
            <div className="absolute top-[85%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[320px]">
              <NodeCard item={characteristics[2]} index={2} />
            </div>

            {/* Bottom Left */}
            <div className="absolute top-[85%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[320px]">
              <NodeCard item={characteristics[3]} index={3} />
            </div>

            {/* Top Left */}
            <div className="absolute top-[39%] left-[17%] -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[320px]">
              <NodeCard item={characteristics[4]} index={4} />
            </div>

            {/* Center Node */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
              className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
            >
              {/* Pulsing rings */}
              <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute w-64 h-64 bg-emerald-500/20 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
              
              <div className="relative w-56 h-56 bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl text-center p-8 shadow-[0_0_60px_rgba(59,130,246,0.6)] border-4 border-white/30 transform hover:scale-110 transition-transform duration-500 overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <span className="relative z-10 drop-shadow-lg">ĐẶC ĐIỂM CỦA NGÀNH<br/>IT SERVICES</span>
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col gap-6 mt-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-emerald-600 text-white font-bold text-xl text-center py-4 px-8 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)] border-2 border-white/20">
                ĐẶC ĐIỂM CỦA NGÀNH IT SERVICES
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {characteristics.map((item, index) => (
                <NodeCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Mức Lương & Thu Nhập</h2>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                Biểu đồ thể hiện sự tăng trưởng thu nhập mạnh mẽ theo số năm kinh nghiệm.
              </p>
            </div>

            <div className="lg:col-span-2 bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[3rem] shadow-2xl border border-white/10 h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salaryData}>
                  <defs>
                    <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff20" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(value) => `${value}tr`} />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff', borderRadius: '0.5rem' }} itemStyle={{ color: '#60a5fa' }} />
                  <Area type="monotone" dataKey="salary" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorSalary)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedChar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedChar(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`bg-slate-800 border ${selectedChar.borderColor} w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative`}
            >
              {/* Modal Header Background */}
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br ${selectedChar.modalColor} opacity-50 pointer-events-none`}></div>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedChar(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-slate-900/50 hover:bg-slate-900 rounded-full text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 relative z-10">
                <div className={`w-20 h-20 ${selectedChar.bg} rounded-2xl flex items-center justify-center mb-6 shadow-lg border ${selectedChar.borderColor}`}>
                  {React.cloneElement(selectedChar.icon, { className: `w-10 h-10 ${selectedChar.textColor}` })}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedChar.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Tổng quan</h4>
                    <p className="text-slate-300 leading-relaxed text-lg">{selectedChar.fullDesc}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Kỹ năng cốt lõi</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedChar.skills.map((skill: string, idx: number) => (
                        <span key={idx} className={`px-4 py-2 rounded-full text-sm font-medium ${selectedChar.bg} ${selectedChar.textColor} border ${selectedChar.borderColor}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const DetailedSalaryAndOpportunities = () => {
  const detailedSalaryData = [
    {
      name: "Mới vào nghề",
      itSupport: 9.5, itSupportText: "7 - 12 triệu",
      sysAdmin: 12.5, sysAdminText: "10 - 15 triệu",
      cloud: 27.5, cloudText: "20 - 35 triệu (Junior)",
      consultant: null, consultantText: ""
    },
    {
      name: "1-4 năm",
      itSupport: 11.5, itSupportText: "11 - 12 triệu",
      sysAdmin: 27.5, sysAdminText: "20 - 35 triệu",
      cloud: null, cloudText: "",
      consultant: 27.5, consultantText: "20 - 35 triệu"
    },
    {
      name: "5-9 năm / Senior",
      itSupport: 17, itSupportText: "Khoảng 17 triệu",
      sysAdmin: 50, sysAdminText: "40 - 60 triệu",
      cloud: 75, cloudText: "50 - 100+ triệu",
      consultant: 60, consultantText: "40 - 80 triệu"
    },
    {
      name: "Chuyên gia / Quốc tế",
      itSupport: 40, itSupportText: "Lên đến 40 triệu",
      sysAdmin: null, sysAdminText: "",
      cloud: null, cloudText: "",
      consultant: 62.5, consultantText: "50 - 75 triệu (Quốc tế)"
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100">
          <p className="font-bold text-slate-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => {
            const textKey = `${entry.dataKey}Text`;
            const textValue = entry.payload[textKey];
            if (!textValue) return null;
            return (
              <div key={index} className="flex items-center gap-2 text-sm mb-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                <span className="text-slate-600">{entry.name}:</span>
                <span className="font-semibold text-slate-900">{textValue}</span>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mức lương chi tiết */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm border border-blue-100">
              Chi tiết
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Mức lương theo từng vị trí</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Sự phân hóa thu nhập rõ rệt dựa trên chuyên môn và kinh nghiệm trong ngành dịch vụ IT.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-10 rounded-[3rem] shadow-sm border border-slate-100 h-[500px] max-w-5xl mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={detailedSalaryData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 13 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 13 }} tickFormatter={(value) => `${value}tr`} dx={-10} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Line type="monotone" dataKey="itSupport" name="IT Support" stroke="#3b82f6" strokeWidth={4} dot={{ r: 6, strokeWidth: 2 }} activeDot={{ r: 8 }} connectNulls />
                <Line type="monotone" dataKey="sysAdmin" name="System / Network Admin" stroke="#10b981" strokeWidth={4} dot={{ r: 6, strokeWidth: 2 }} activeDot={{ r: 8 }} connectNulls />
                <Line type="monotone" dataKey="consultant" name="IT Consultant" stroke="#8b5cf6" strokeWidth={4} dot={{ r: 6, strokeWidth: 2 }} activeDot={{ r: 8 }} connectNulls />
                <Line type="monotone" dataKey="cloud" name="Cloud / Cybersecurity" stroke="#f59e0b" strokeWidth={4} dot={{ r: 6, strokeWidth: 2 }} activeDot={{ r: 8 }} connectNulls />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Nhu cầu và cơ hội */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm border border-emerald-100">
                Xu hướng
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Nhu cầu và cơ hội</h2>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-6">
                  Các nghiên cứu và bài báo cho thấy nhân lực trong lĩnh vực công nghệ và dịch vụ CNTT đang rất cần thiết trong xã hội hiện đại. 
                </p>
                <p>
                  Sự phát triển mạnh mẽ của chuyển đổi số, Internet, dữ liệu và trí tuệ nhân tạo khiến các tổ chức ngày càng cần nhiều chuyên gia trong các mảng:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                    <span className="font-medium text-slate-800">Hỗ trợ kỹ thuật</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                    <span className="font-medium text-slate-800">Quản trị hệ thống</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                    <span className="font-medium text-slate-800">An toàn thông tin</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                    <span className="font-medium text-slate-800">Tư vấn và dịch vụ công nghệ</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" alt="IT Opportunities" className="rounded-[3rem] shadow-xl object-cover h-[500px] w-full" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* Lợi ích và Bất lợi */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Đánh giá tổng quan</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              So sánh chi tiết những mặt lợi ích và thách thức khi theo đuổi ngành dịch vụ IT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Lợi ích */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-emerald-900/5 border border-emerald-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Lợi ích</h3>
              </div>
              
              <div className="space-y-8 relative z-10">
                <div>
                  <h4 className="text-xl font-bold text-emerald-700 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Nhu cầu nhân lực cao
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Sự phát triển mạnh mẽ của chuyển đổi số, Internet và dữ liệu số khiến các tổ chức ngày càng cần nhiều nhân lực công nghệ để vận hành và bảo vệ hệ thống. Vì vậy, cơ hội việc làm trong ngành này rất lớn.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-700 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Mức thu nhập hấp dẫn
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Ngành Công nghệ thông tin là một trong những ngành có mức lương cao và tăng nhanh theo kinh nghiệm. Những người có kỹ năng chuyên môn tốt có thể đạt mức thu nhập rất cao.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-700 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Cơ hội phát triển rộng
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Người làm trong lĩnh vực này có thể phát triển lên nhiều vị trí khác nhau như: quản trị hệ thống, chuyên gia an ninh mạng, chuyên gia tư vấn công nghệ, quản lý công nghệ thông tin.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-700 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Môi trường hiện đại & Quốc tế
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Thường làm việc trong môi trường công nghệ hiện đại. Vì công nghệ là lĩnh vực toàn cầu, nhân lực CNTT có thể làm việc cho các công ty quốc tế hoặc làm việc từ xa với nhiều cơ hội phát triển.</p>
                </div>
              </div>
            </div>

            {/* Bất lợi */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-rose-900/5 border border-rose-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Thách thức</h3>
              </div>
              
              <div className="space-y-8 relative z-10">
                <div>
                  <h4 className="text-xl font-bold text-rose-700 mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" /> Áp lực công việc cao
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Những người làm trong ngành công nghệ thường phải xử lý sự cố hệ thống, đảm bảo hệ thống hoạt động liên tục, nên công việc đôi khi khá căng thẳng.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-rose-700 mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" /> Cần học hỏi liên tục
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Công nghệ thay đổi rất nhanh, vì vậy người làm trong ngành phải liên tục cập nhật kiến thức và kỹ năng mới.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-rose-700 mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" /> Thời gian không cố định
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Trong một số trường hợp như sự cố hệ thống hoặc tấn công mạng, nhân viên CNTT có thể phải làm việc ngoài giờ hoặc trực hệ thống.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-rose-700 mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" /> Đòi hỏi kỹ năng chuyên môn cao
                  </h4>
                  <p className="text-slate-600 leading-relaxed">Để làm tốt công việc, người lao động cần có kiến thức chuyên sâu về công nghệ, hệ thống và bảo mật, điều này đòi hỏi thời gian học tập và rèn luyện lâu dài.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const CareerDetail = ({ career, onClose }: { career: any, onClose: () => void }) => {
  if (!career) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/90 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
        >
          <X className="h-6 w-6 text-slate-600" />
        </button>

        <div className="relative h-64 md:h-80 w-full">
          <img 
            src={career.image} 
            alt={career.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${career.badgeColor}`}>
              {career.subtitle}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{career.title}</h2>
          </div>
        </div>

        <div className="p-8 md:p-12 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                  Khái niệm chi tiết
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {career.details.concept}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                  Các công việc chính
                </h3>
                <ul className="space-y-3">
                  {career.details.tasks.map((task: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                  Nhu cầu & Cơ hội phát triển
                </h3>
                <ul className="space-y-3">
                  {career.details.demand.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <TrendingUp className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-blue-600 rounded-full" />
                  Mức lương tham khảo
                </h3>
                <div className="space-y-4">
                  {career.details.salary.map((s: any, i: number) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">{s.level}</span>
                      <span className="text-slate-900 font-bold">{s.amount}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Careers = () => {
  const [selectedCareer, setSelectedCareer] = useState<any>(null);

  const careers = [
    {
      id: 'technician',
      title: "Kỹ thuật viên CNTT",
      subtitle: "IT Technician",
      tagline: "Những bác sĩ của máy tính",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
      icon: <MonitorSmartphone className="h-6 w-6 text-emerald-400" />,
      iconBg: "bg-emerald-500/20",
      iconBorder: "border-emerald-500/30",
      badgeColor: "bg-emerald-100 text-emerald-700",
      details: {
        concept: "Kỹ thuật viên Công nghệ thông tin là người lắp đặt, quản lý, sửa chữa và bảo trì các thiết bị và hệ thống máy tính trong tổ chức hoặc doanh nghiệp. Họ đóng vai trò quan trọng trong việc duy trì hạ tầng kỹ thuật ổn định cho mọi hoạt động.",
        tasks: [
          "Cài đặt phần mềm và hệ điều hành cho máy tính",
          "Lắp đặt và bảo trì thiết bị công nghệ (máy tính, máy in, mạng nội bộ)",
          "Kiểm tra, sửa chữa các lỗi kỹ thuật phần cứng",
          "Hỗ trợ người dùng khi gặp sự cố về thiết bị hoặc hệ thống",
          "Quản lý tài sản thiết bị CNTT của công ty"
        ],
        demand: [
          "Hầu hết các doanh nghiệp đều cần nhân sự IT để vận hành hệ thống",
          "Nhu cầu nhân lực ổn định và tăng theo quá trình chuyển đổi số",
          "Có thể phát triển lên các vị trí: quản trị hệ thống, quản trị mạng, kỹ sư IT"
        ],
        salary: [
          { level: "Mới vào nghề", amount: "8 – 12 triệu/tháng" },
          { level: "Có kinh nghiệm", amount: "15 – 25 triệu/tháng" },
          { level: "Chuyên gia", amount: "30 triệu/tháng trở lên" }
        ]
      }
    },
    {
      id: 'security',
      title: "Kỹ sư An toàn thông tin",
      subtitle: "Security Engineer",
      tagline: "Những người gác cổng số",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      icon: <ShieldCheck className="h-6 w-6 text-rose-400" />,
      iconBg: "bg-rose-500/20",
      iconBorder: "border-rose-500/30",
      badgeColor: "bg-rose-100 text-rose-700",
      details: {
        concept: "Kỹ sư an toàn thông tin là người bảo vệ hệ thống máy tính, mạng và dữ liệu khỏi các cuộc tấn công mạng hoặc rò rỉ thông tin. Trong thời đại dữ liệu là tài sản, vai trò của họ trở nên sống còn đối với mọi tổ chức.",
        tasks: [
          "Phân tích và phát hiện các lỗ hổng bảo mật",
          "Thiết kế hệ thống bảo mật cho mạng và dữ liệu",
          "Giám sát các nguy cơ tấn công mạng 24/7",
          "Xử lý và khắc phục các sự cố an ninh mạng",
          "Xây dựng chính sách bảo mật thông tin cho tổ chức"
        ],
        demand: [
          "Nhu cầu rất cao do tội phạm mạng ngày càng gia tăng",
          "Là một trong những lĩnh vực IT thiếu nhân lực trầm trọng nhất",
          "Có thể phát triển thành: chuyên gia bảo mật, chuyên gia phân tích an ninh mạng, quản lý an toàn thông tin (CISO)"
        ],
        salary: [
          { level: "Mới vào nghề", amount: "15 – 25 triệu/tháng" },
          { level: "3–5 năm kinh nghiệm", amount: "30 – 60 triệu/tháng" },
          { level: "Chuyên gia cao cấp", amount: "80 triệu/tháng hoặc hơn" }
        ]
      }
    },
    {
      id: 'support',
      title: "Chuyên viên Hỗ trợ kỹ thuật",
      subtitle: "IT Support Specialist",
      tagline: "Người giải cứu người dùng",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
      icon: <Headset className="h-6 w-6 text-blue-400" />,
      iconBg: "bg-blue-500/20",
      iconBorder: "border-blue-500/30",
      badgeColor: "bg-blue-100 text-blue-700",
      details: {
        concept: "Chuyên viên hỗ trợ kỹ thuật là người hỗ trợ người dùng giải quyết các vấn đề liên quan đến phần mềm, phần cứng và hệ thống công nghệ. Họ là 'mặt tiền' của bộ phận IT, trực tiếp tương tác và giúp đỡ khách hàng.",
        tasks: [
          "Hướng dẫn người dùng sử dụng hệ thống công nghệ",
          "Tiếp nhận và xử lý các sự cố kỹ thuật qua điện thoại, email hoặc trực tiếp",
          "Kiểm tra và khắc phục lỗi phần mềm hoặc thiết bị",
          "Hỗ trợ cài đặt và cấu hình hệ thống cho nhân viên mới",
          "Tài liệu hóa các lỗi thường gặp và cách xử lý"
        ],
        demand: [
          "Doanh nghiệp, tổ chức, trường học đều cần vị trí này",
          "Nhu cầu nhân lực lớn trong các công ty công nghệ và dịch vụ IT (Managed Services)",
          "Có thể phát triển lên các vị trí: quản trị hệ thống, quản lý IT, chuyên gia tư vấn công nghệ"
        ],
        salary: [
          { level: "Mới vào nghề", amount: "7 – 12 triệu/tháng" },
          { level: "Có kinh nghiệm", amount: "15 – 25 triệu/tháng" },
          { level: "Chuyên gia", amount: "30 triệu/tháng trở lên" }
        ]
      }
    }
  ];

  return (
    <div className="bg-white">
      <IndustryOverview />
      <DetailedSalaryAndOpportunities />
      
      <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Chi tiết các <span className="text-blue-600">Ngành nghề IT Services</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Khám phá sâu hơn về các vị trí công việc, yêu cầu kỹ năng và lộ trình thăng tiến trong từng lĩnh vực cụ thể.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {careers.map((career, index) => (
            <motion.div 
              key={career.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCareer(career)}
              className="relative rounded-[2.5rem] overflow-hidden h-[550px] bg-slate-800 group shadow-xl cursor-pointer"
            >
              <img 
                src={career.image} 
                alt={career.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className={`mb-6 w-14 h-14 ${career.iconBg} rounded-2xl flex items-center justify-center backdrop-blur-md border ${career.iconBorder}`}>
                  {career.icon}
                </div>
                <h4 className="text-3xl font-bold mb-3">{career.title}</h4>
                <p className="text-base text-slate-300 mb-3 font-medium tracking-wide uppercase">{career.subtitle}</p>
                <p className={`${career.badgeColor.split(' ')[1]} text-base font-bold italic`}>"{career.tagline}"</p>
                
                <div className="mt-8 flex items-center gap-2 text-white/80 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  Khám phá chi tiết <ChevronDown className="h-5 w-5 -rotate-90" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Detailed Section */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Tại sao nên chọn IT Services?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Tính ổn định cao</h4>
                    <p className="text-slate-600">Dù kinh tế biến động, các doanh nghiệp vẫn luôn cần duy trì hệ thống CNTT để hoạt động.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Kỹ năng đa dạng</h4>
                    <p className="text-slate-600">Bạn không chỉ học về kỹ thuật mà còn rèn luyện kỹ năng giao tiếp, giải quyết vấn đề và quản lý.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Lộ trình thăng tiến rõ ràng</h4>
                    <p className="text-slate-600">Từ nhân viên hỗ trợ đến quản trị viên hệ thống, kiến trúc sư giải pháp hoặc quản lý cấp cao.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCareer && (
          <CareerDetail 
            career={selectedCareer} 
            onClose={() => setSelectedCareer(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
