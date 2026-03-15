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
  Server,
  Award,
  Cpu,
  Globe,
  Zap,
  HeartHandshake,
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
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

const Home = () => {
  return (
    <>
      <Hero />
      <IndustryOverview />
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
