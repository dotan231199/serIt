import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MonitorSmartphone, 
  ShieldCheck, 
  Headset, 
  TrendingUp, 
  GraduationCap, 
  Users,
  ChevronDown,
  ChevronUp,
  Plus,
  Server,
  Award,
  Cpu,
  Globe,
  Zap,
  HeartHandshake,
  CheckCircle2,
  Phone,
  Mail,
  BookOpen,
  Search
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

// Re-using components from the original App.tsx
// Note: In a real app, these would be in their own files in src/components/

const Hero = () => {
  return (
    <section id="about" className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 min-h-[500px] mb-8 group shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
            alt="IT Services Concept" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-block px-4 py-1 bg-blue-600 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                Về chúng tôi
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.1] mb-6 tracking-tight">
                ServIT: Nền tảng định hướng tương lai trong ngành Dịch vụ Công nghệ.
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-4">
                Chúng tôi cung cấp cái nhìn toàn diện, lộ trình học tập và công cụ đánh giá giúp các bạn học sinh, sinh viên tự tin bước chân vào lĩnh vực IT Services đầy tiềm năng.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-400 font-medium italic">
                <span>• Định hướng nghề nghiệp chuẩn xác</span>
                <span>• Lộ trình phát triển bài bản</span>
                <span>• Kết nối chuyên gia & cộng đồng</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PurposeAndAudience = () => {
  const [activePurpose, setActivePurpose] = useState<number>(0);

  const purposes = [
    {
      title: "Thông tin nghề nghiệp",
      desc: "Cung cấp thông tin nghề nghiệp chính xác và dễ tiếp cận trong lĩnh vực Công nghệ thông tin."
    },
    {
      title: "Hiểu rõ nhóm nghề",
      desc: "Giúp học sinh, sinh viên hiểu rõ các nhóm nghề trong ngành công nghệ dịch vụ."
    },
    {
      title: "Hỗ trợ định hướng",
      desc: "Hỗ trợ định hướng nghề nghiệp, giúp người học lựa chọn ngành học và con đường phát triển phù hợp."
    },
    {
      title: "Kết nối tri thức",
      desc: "Kết nối tri thức công nghệ với nhu cầu thực tế của xã hội, góp phần chuẩn bị nguồn nhân lực công nghệ trong tương lai."
    }
  ];

  return (
    <div className="bg-white py-12">
      {/* Section 2: Apple Store Style */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="bg-[#000000] rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-12 lg:p-20 overflow-hidden relative min-h-[600px] flex flex-col lg:flex-row items-center">
          
          {/* Left Controls */}
          <div className="flex flex-col gap-4 z-10 w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">
              Mục đích của website.
            </h2>
            
            <div className="flex items-start gap-6">
              {/* Up/Down Nav */}
              <div className="hidden md:flex flex-col gap-3 mt-4">
                <button 
                  onClick={() => setActivePurpose(Math.max(0, activePurpose - 1))}
                  disabled={activePurpose === 0}
                  className="w-10 h-10 rounded-full bg-[#1c1c1e] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2c2c2e] disabled:opacity-30 disabled:hover:bg-[#1c1c1e] disabled:hover:text-gray-400 transition-colors"
                >
                  <ChevronUp className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActivePurpose(Math.min(purposes.length - 1, activePurpose + 1))}
                  disabled={activePurpose === purposes.length - 1}
                  className="w-10 h-10 rounded-full bg-[#1c1c1e] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2c2c2e] disabled:opacity-30 disabled:hover:bg-[#1c1c1e] disabled:hover:text-gray-400 transition-colors"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-4 flex-1">
                {purposes.map((item, index) => {
                  const isActive = activePurpose === index;
                  return (
                    <motion.div
                      key={index}
                      layout
                      onClick={() => !isActive && setActivePurpose(index)}
                      className={`cursor-pointer overflow-hidden ${isActive ? 'bg-[#1c1c1e] rounded-3xl p-6 md:p-8 w-full max-w-md' : 'bg-[#1c1c1e] hover:bg-[#2c2c2e] rounded-full py-3 px-5 inline-flex items-center gap-3 w-max transition-colors'}`}
                    >
                      {isActive ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            <strong className="text-white">{item.title}.</strong> {item.desc}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center">
                            <Plus className="w-4 h-4 text-gray-400" />
                          </div>
                          <span className="text-white font-medium">{item.title}</span>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.img
                key={activePurpose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                src={
                  activePurpose === 0 ? "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2000&auto=format&fit=crop" :
                  activePurpose === 1 ? "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" :
                  activePurpose === 2 ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop" :
                  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
                }
                alt="Tech Concept"
                className="absolute inset-0 w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Section 3: Upgraded Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Dành cho học sinh & sinh viên</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Khám phá, định hướng và phát triển sự nghiệp trong kỷ nguyên số.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-[#f5f5f7] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10">
              <Search className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tìm hiểu nghề nghiệp</h3>
              <p className="text-xl text-slate-600 max-w-md leading-relaxed">Tìm hiểu về các nghề trong ngành Công nghệ thông tin một cách trực quan và chi tiết nhất.</p>
            </div>
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#f5f5f7] rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10">
              <Zap className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Khám phá cơ hội</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Khám phá cơ hội nghề nghiệp trong lĩnh vực công nghệ dịch vụ.</p>
            </div>
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 bg-[#111111] text-white rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group"
          >
            <div className="relative z-10 max-w-2xl">
              <GraduationCap className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Định hướng & Phát triển</h3>
              <p className="text-xl text-gray-400 leading-relaxed">Định hướng ngành học và phát triển kỹ năng phù hợp với xu hướng công nghệ hiện đại.</p>
            </div>
            <div className="relative z-10 mt-10 md:mt-0">
              <a href="/roadmap" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Xem lộ trình
              </a>
            </div>
            <div className="absolute right-1/4 bottom-[-20%] w-96 h-96 bg-emerald-900 rounded-full mix-blend-screen filter blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const IndustryOverview = () => {
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
      icon: <Users className="h-6 w-6 text-blue-500" />,
      bg: "bg-blue-50"
    },
    {
      title: "Xử lý và khắc phục sự cố thường xuyên",
      desc: "Công việc liên tục liên quan đến sửa lỗi, cài đặt lại hệ thống, bảo trì thiết bị, đảm bảo mọi thứ hoạt động bình thường.",
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-500" />,
      bg: "bg-emerald-50"
    },
    {
      title: "Yêu cầu kỹ năng kỹ thuật vững",
      desc: "Cần nắm chắc kiến thức về phần cứng, phần mềm, mạng cơ bản, bảo mật… để giải quyết vấn đề nhanh và chính xác.",
      icon: <MonitorSmartphone className="h-6 w-6 text-purple-500" />,
      bg: "bg-purple-50"
    },
    {
      title: "Cường độ công việc linh hoạt, đột xuất",
      desc: "Phải sẵn sàng phản ứng khi có sự cố bất ngờ xảy ra, có thể làm ngoài giờ trong trường hợp khẩn cấp.",
      icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
      bg: "bg-orange-50"
    },
    {
      title: "Luôn phải cập nhật công nghệ mới",
      desc: "Công nghệ thay đổi liên tục, vì thế người làm nghề cần học hỏi không ngừng để đáp ứng yêu cầu thực tế và hỗ trợ hiệu quả.",
      icon: <GraduationCap className="h-6 w-6 text-rose-500" />,
      bg: "bg-rose-50"
    }
  ];

  return (
    <section id="overview" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-white text-slate-500 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm border border-slate-100">
              Phân tích ngành
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Đặc Điểm Ngành Nghề</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {characteristics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group transition-all hover:shadow-xl"
              >
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Mức Lương & Thu Nhập</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Biểu đồ thể hiện sự tăng trưởng thu nhập mạnh mẽ theo số năm kinh nghiệm.
              </p>
            </div>

            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100 h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salaryData}>
                  <defs>
                    <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} tickFormatter={(value) => `${value}tr`} />
                  <Tooltip />
                  <Area type="monotone" dataKey="salary" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorSalary)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
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

const Home = () => {
  return (
    <>
      <Hero />
      <PurposeAndAudience />
      <IndustryOverview />
      <DetailedSalaryAndOpportunities />
      {/* More sections can be added here */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Khám phá thêm về ServIT</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a href="/careers" className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all">
              <MonitorSmartphone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold">Ngành nghề</h3>
            </a>
            <a href="/roadmap" className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold">Lộ trình</h3>
            </a>
            <a href="/quiz" className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold">Trắc nghiệm</h3>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
