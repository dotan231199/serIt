import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Award, 
  Cpu, 
  Globe, 
  MonitorSmartphone, 
  Server, 
  Zap, 
  HeartHandshake,
  BookOpen,
  Layers,
  Clock,
  Lightbulb
} from 'lucide-react';

const Roadmap = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: "01",
      title: "Giai đoạn 1: Nền tảng",
      subtitle: "THPT / Người mới bắt đầu",
      goal: "Xây dựng tư duy logic và làm quen với công nghệ",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      color: "from-blue-600 to-cyan-500",
      items: [
        { label: "Học tốt các môn", values: ["Toán (tư duy logic)", "Tin học (cơ bản)", "Tiếng Anh (đọc hiểu tài liệu)"] },
        { label: "Làm quen với", values: ["Cấu tạo máy tính", "Hệ điều hành Windows/Linux", "Sử dụng Internet an toàn"] },
        { label: "Kỹ năng mềm", values: ["Giao tiếp cơ bản", "Kỹ năng tìm kiếm thông tin (Google Dorking)"] }
      ]
    },
    {
      id: "02",
      title: "Giai đoạn 2: Đào tạo chuyên sâu",
      subtitle: "Cao đẳng / Đại học / Khóa học nghề",
      goal: "Nắm vững kiến thức chuyên môn cốt lõi",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      color: "from-indigo-600 to-purple-500",
      items: [
        { label: "Kiến thức mạng", values: ["Mô hình OSI", "Giao thức TCP/IP", "Cấu hình Router/Switch cơ bản"] },
        { label: "Hệ thống", values: ["Quản trị Windows Server", "Linux Administration (LPI)", "Virtualization (VMware, Hyper-V)"] },
        { label: "Dịch vụ", values: ["ITIL Foundation", "Quy trình hỗ trợ khách hàng (SLA, Ticket system)"] }
      ]
    },
    {
      id: "03",
      title: "Giai đoạn 3: Chứng chỉ & Thực tế",
      subtitle: "Nâng tầm giá trị bản thân",
      goal: "Sở hữu các chứng chỉ quốc tế uy tín",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
      color: "from-emerald-600 to-teal-500",
      items: [
        { label: "Chứng chỉ ưu tiên", values: ["CompTIA A+ / Network+ / Security+", "Cisco CCNA", "Microsoft 365 Certified"] },
        { label: "Thực tập", values: ["Làm việc tại Helpdesk", "Hỗ trợ kỹ thuật tại chỗ (On-site support)"] },
        { label: "Dự án", values: ["Xây dựng lab mạng gia đình", "Triển khai server cá nhân"] }
      ]
    },
    {
      id: "04",
      title: "Giai đoạn 4: Chuyên gia giải pháp",
      subtitle: "3-5 năm kinh nghiệm",
      goal: "Thiết kế và tối ưu hóa hệ thống phức tạp",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      color: "from-orange-600 to-amber-500",
      items: [
        { label: "Công nghệ mới", values: ["Cloud Computing (AWS, Azure, GCP)", "Automation (Python, Ansible)", "DevOps cơ bản"] },
        { label: "Bảo mật", values: ["Ethical Hacking", "Security Operations Center (SOC)"] },
        { label: "Quản lý", values: ["Team Lead", "Project Management (PMP)"] }
      ]
    },
    {
      id: "05",
      title: "Giai đoạn 5: Lãnh đạo công nghệ",
      subtitle: "Tầm nhìn chiến lược",
      goal: "Định hướng chiến lược CNTT cho doanh nghiệp",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      color: "from-rose-600 to-pink-500",
      items: [
        { label: "Vị trí", values: ["IT Manager", "Chief Information Officer (CIO)", "IT Consultant"] },
        { label: "Kỹ năng", values: ["Quản trị rủi ro", "Lập kế hoạch ngân sách IT", "Chuyển đổi số doanh nghiệp"] }
      ]
    }
  ];

  const scrollToStage = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.querySelectorAll('.snap-center');
      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        card.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      const cards = container.querySelectorAll('.snap-center');
      
      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const htmlCard = card as HTMLElement;
        const cardCenter = htmlCard.offsetLeft + htmlCard.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStage(closestIndex);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Lộ trình <span className="text-blue-600">Phát triển Sự nghiệp</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Từ những bước chân đầu tiên đến khi trở thành một chuyên gia hàng đầu trong lĩnh vực IT Services.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="hidden lg:flex justify-between items-center mb-20 px-10 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
          {stages.map((stage, index) => (
            <button
              key={stage.id}
              onClick={() => scrollToStage(index)}
              className="relative z-10 flex flex-col items-center group"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                activeStage === index ? 'bg-blue-600 text-white scale-125 shadow-lg shadow-blue-600/30' : 'bg-white text-slate-400 border-2 border-slate-200 hover:border-blue-400'
              }`}>
                {index + 1}
              </div>
              <span className={`mt-4 text-xs font-bold uppercase tracking-widest transition-colors ${
                activeStage === index ? 'text-blue-600' : 'text-slate-400'
              }`}>
                {stage.id}
              </span>
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Stages */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-12 snap-x snap-mandatory flex gap-8 scrollbar-hide"
        >
          {stages.map((stage) => (
            <motion.div
              key={stage.id}
              className="flex-shrink-0 w-[85vw] md:w-[650px] snap-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[750px] rounded-[3rem] overflow-hidden group shadow-2xl border border-slate-100">
                <img 
                  src={stage.image} 
                  alt={stage.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${stage.color} opacity-80 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
                  <div className="absolute top-10 left-10">
                    <span className="text-8xl font-black opacity-20 leading-none select-none">{stage.id}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">{stage.title}</h3>
                  <p className="text-lg md:text-xl font-medium text-white/70 mb-8">{stage.subtitle}</p>
                  
                  <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/20 h-[400px] flex flex-col">
                    <div className="flex items-center gap-3 mb-6 flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-yellow-400" />
                      <p className="font-bold text-blue-300 uppercase tracking-widest text-xs">Mục tiêu: {stage.goal}</p>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto scrollbar-hide pr-2">
                      <div className="grid grid-cols-1 gap-8">
                        {stage.items.map((item, i) => (
                          <div key={i}>
                            <p className="text-[11px] font-bold text-white/50 uppercase mb-4 tracking-[0.2em]">{item.label}</p>
                            <ul className="space-y-3">
                              {item.values.map((val, j) => (
                                <li key={j} className="text-sm md:text-base flex items-start gap-4 leading-relaxed">
                                  <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-white/90 font-medium">{val}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-4 mt-8">
          {stages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToStage(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                activeStage === index ? 'w-12 bg-blue-600' : 'w-3 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to stage ${index + 1}`}
            />
          ))}
        </div>

        {/* Detailed Advice Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100 flex flex-col">
            <BookOpen className="h-10 w-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Tài liệu học tập</h3>
            <p className="text-slate-600 mb-6 flex-grow">Tổng hợp các đầu sách, khóa học online và blog công nghệ uy tín để bạn tự học hiệu quả.</p>
            <a 
              href="https://roadmap.sh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto"
            >
              Xem danh sách <span>→</span>
            </a>
          </div>
          <div className="bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 flex flex-col">
            <Layers className="h-10 w-10 text-emerald-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Cộng đồng IT</h3>
            <p className="text-slate-600 mb-6 flex-grow">Kết nối với các diễn đàn, nhóm Facebook và Discord nơi các chuyên gia sẵn sàng hỗ trợ bạn.</p>
            <a 
              href="https://daynhauhoc.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto"
            >
              Tham gia ngay <span>→</span>
            </a>
          </div>
          <div className="bg-purple-50 p-10 rounded-[2.5rem] border border-purple-100 flex flex-col">
            <Clock className="h-10 w-10 text-purple-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Lịch thi chứng chỉ</h3>
            <p className="text-slate-600 mb-6 flex-grow">Cập nhật thời gian tổ chức các kỳ thi chứng chỉ quốc tế quan trọng trong năm 2026.</p>
            <a 
              href="https://www.comptia.org/testing/testing-options/take-online-exam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto"
            >
              Xem lịch thi <span>→</span>
            </a>
          </div>
        </div>

        {/* Bằng cấp cần có */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              2. MỘT SỐ <span className="text-blue-600">BẰNG CẤP CẦN CÓ</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Các chứng chỉ quốc tế giúp bạn khẳng định năng lực và tiến xa hơn trong sự nghiệp.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">CompTIA IT Fundamentals (ITF+)</h3>
                  <p className="text-blue-600 font-medium">Dành cho người mới vào nghề</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Giúp nắm kiến thức nền: phần cứng, phần mềm, mạng, bảo mật cơ bản.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Google IT Support Certificate</h3>
                  <p className="text-emerald-600 font-medium">Khóa học online (Coursera)</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Kiến thức thực tế: quản lý hệ điều hành, mạng, hệ thống.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Microsoft Certified: Windows Client</h3>
                  <p className="text-purple-600 font-medium">Endpoint Administrator</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Quản lý máy tính Windows, cấu hình, bảo trì.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-600">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">CCNA</h3>
                  <p className="text-rose-600 font-medium">Cisco Certified Network Associate</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Chứng chỉ mạng quan trọng nhất. Giúp bạn hiểu rõ cấu hình router, switch, bảo mật cơ bản.
              </p>
            </div>
          </div>
        </div>

        {/* Kỹ năng cần có */}
        <div className="mt-32 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              3. MỘT SỐ <span className="text-blue-600">KỸ NĂNG CẦN CÓ</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Sự kết hợp hoàn hảo giữa kỹ năng chuyên môn và kỹ năng mềm là chìa khóa thành công.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kỹ năng chuyên môn */}
            <div className="bg-slate-900 rounded-[3rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold">Kỹ năng chuyên môn</h3>
                </div>

                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-lg block mb-1">Kiến thức hệ thống & mạng</strong>
                      <span className="text-slate-400">Hiểu cách máy tính, server và mạng hoạt động.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-lg block mb-1">Quản lý dịch vụ CNTT (ITSM)</strong>
                      <span className="text-slate-400">Biết cách vận hành và hỗ trợ hệ thống cho doanh nghiệp.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-lg block mb-1">An toàn thông tin cơ bản</strong>
                      <span className="text-slate-400">Bảo vệ dữ liệu, phát hiện rủi ro.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-lg block mb-1">Điện toán đám mây</strong>
                      <span className="text-slate-400">Làm việc với các nền tảng lưu trữ và vận hành online.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-lg block mb-1">Xử lý sự cố kỹ thuật</strong>
                      <span className="text-slate-400">Nhanh chóng tìm nguyên nhân và khắc phục lỗi.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kỹ năng mềm */}
            <div className="bg-blue-50 rounded-[3rem] p-10 md:p-12 shadow-xl border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                    <HeartHandshake className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Kỹ năng mềm</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <strong className="text-lg text-slate-900 block mb-2">Giao tiếp</strong>
                    <p className="text-slate-600">Rõ ràng, dễ hiểu khi giải thích kỹ thuật cho người dùng.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <strong className="text-lg text-slate-900 block mb-2">Giải quyết vấn đề</strong>
                    <p className="text-slate-600">Tư duy logic để tìm ra giải pháp tối ưu.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <strong className="text-lg text-slate-900 block mb-2">Làm việc nhóm</strong>
                    <p className="text-slate-600">Phối hợp hiệu quả với các bộ phận khác.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <strong className="text-lg text-slate-900 block mb-2">Quản lý thời gian</strong>
                    <p className="text-slate-600">Sắp xếp ưu tiên xử lý các sự cố hợp lý.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sm:col-span-2">
                    <strong className="text-lg text-slate-900 block mb-2">Tinh thần phục vụ & Tự học</strong>
                    <p className="text-slate-600">Luôn sẵn sàng hỗ trợ khách hàng và liên tục cập nhật kiến thức vì công nghệ luôn thay đổi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
