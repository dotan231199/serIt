import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MonitorSmartphone, 
  ShieldCheck, 
  Headset, 
  ChevronDown,
  CheckCircle2,
  TrendingUp,
  X,
  Briefcase,
  Users,
  Award,
  Cpu
} from 'lucide-react';

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
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
