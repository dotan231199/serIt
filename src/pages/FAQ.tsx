import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  MessageCircleQuestion, 
  Search,
  HelpCircle,
  BookOpen,
  MessageSquare,
  Mail,
  Phone
} from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      q: "Ngành IT Services có yêu cầu bằng Đại học không?",
      a: "Không bắt buộc, nhưng là một lợi thế lớn. Nhiều vị trí như IT Support hoặc Kỹ thuật viên chấp nhận bằng Cao đẳng hoặc các chứng chỉ nghề quốc tế (CompTIA, CCNA). Tuy nhiên, để thăng tiến lên các vị trí quản lý hoặc chuyên gia cao cấp, bằng Đại học giúp bạn có nền tảng tư duy tốt hơn và dễ dàng vượt qua các vòng lọc hồ sơ của tập đoàn lớn.",
      category: "Học tập"
    },
    {
      q: "Tiếng Anh có thực sự quan trọng trong ngành này?",
      a: "Cực kỳ quan trọng. Hầu hết tài liệu kỹ thuật, hướng dẫn sử dụng phần cứng/phần mềm và các kỳ thi chứng chỉ quốc tế đều bằng tiếng Anh. Ngoài ra, nếu bạn làm việc cho các công ty đa quốc gia (Outsourcing hoặc Managed Services), tiếng Anh là công cụ giao tiếp hàng ngày với khách hàng và đồng nghiệp nước ngoài.",
      category: "Kỹ năng"
    },
    {
      q: "Nên bắt đầu học từ đâu nếu không biết gì về IT?",
      a: "Hãy bắt đầu bằng việc hiểu về cấu tạo máy tính và hệ điều hành (Windows/Linux). Khóa học 'Google IT Support Professional Certificate' trên Coursera hoặc chứng chỉ 'CompTIA A+' là những điểm khởi đầu tuyệt vời cho người mới. Sau đó, hãy tập trung vào kiến thức mạng cơ bản.",
      category: "Định hướng"
    },
    {
      q: "Mức lương khởi điểm trung bình là bao nhiêu?",
      a: "Tại Việt Nam, mức lương khởi điểm cho vị trí IT Support hoặc Junior Technician dao động từ 7 - 12 triệu VNĐ/tháng. Nếu bạn có chứng chỉ quốc tế và tiếng Anh tốt, con số này có thể lên tới 15 - 18 triệu VNĐ/tháng ngay khi mới ra trường.",
      category: "Sự nghiệp"
    },
    {
      q: "Làm IT Services có vất vả không?",
      a: "Mọi ngành nghề đều có cái khó riêng. IT Services đôi khi yêu cầu bạn phải xử lý sự cố ngoài giờ hoặc trực ca (nếu làm trong trung tâm dữ liệu). Tuy nhiên, đây là công việc ít nhàm chán vì bạn luôn được tiếp xúc với công nghệ mới và giúp đỡ mọi người giải quyết vấn đề thực tế.",
      category: "Môi trường"
    },
    {
      q: "Phụ nữ có phù hợp làm IT Services không?",
      a: "Hoàn toàn phù hợp. Thực tế, phụ nữ thường có lợi thế về sự tỉ mỉ, kiên nhẫn và kỹ năng giao tiếp khéo léo - những yếu tố cực kỳ quan trọng trong hỗ trợ kỹ thuật và quản lý dịch vụ CNTT. Ngày càng có nhiều nữ giới thành công ở các vị trí quản lý dự án IT và chuyên gia bảo mật.",
      category: "Định hướng"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Giải đáp <span className="text-blue-600">Thắc mắc</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Mọi câu hỏi bạn cần về ngành IT Services đều có ở đây. Nếu không tìm thấy, hãy liên hệ trực tiếp với chúng tôi.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400" />
          <input 
            type="text" 
            placeholder="Tìm kiếm câu hỏi của bạn..."
            className="w-full pl-16 pr-8 py-6 bg-slate-50 border border-slate-200 rounded-[2rem] text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4 mb-20">
          {filteredFaqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-100 rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeIndex === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50'}`}>
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-slate-900">{faq.q}</span>
                </div>
                <ChevronDown className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 pt-0 ml-14">
                      <div className="h-px bg-slate-100 mb-6" />
                      <p className="text-slate-600 text-lg leading-relaxed">
                        {faq.a}
                      </p>
                      <div className="mt-6 flex gap-2">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-300">
              <MessageSquare className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 text-lg">Rất tiếc, chúng tôi không tìm thấy câu hỏi nào khớp với từ khóa của bạn.</p>
            </div>
          )}
        </div>

        {/* Contact Support Section */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">Bạn vẫn còn thắc mắc?</h2>
              <p className="text-slate-400 text-lg">Đừng ngần ngại liên hệ trực tiếp với đội ngũ chuyên gia của TechServ để được tư vấn 1-1 miễn phí.</p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a href="mailto:techserv26@gmail.com" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Email cho chúng tôi</p>
                  <p className="font-bold">techserv26@gmail.com</p>
                </div>
              </a>
              <a href="tel:099887766" className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Gọi hotline</p>
                  <p className="font-bold">099 88 77 66</p>
                </div>
              </a>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
