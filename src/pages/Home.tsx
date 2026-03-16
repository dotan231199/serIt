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

const Home = () => {
  return (
    <>
      <Hero />
      <PurposeAndAudience />
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
