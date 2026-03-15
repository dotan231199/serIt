import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const NewsDetail = () => {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Mock data based on ID
  const post = {
    title: id === 'featured' ? "Tương lai của ngành IT Services trong kỷ nguyên AI" : "5 Chứng chỉ IT đáng giá nhất năm 2026",
    category: id === 'featured' ? "Xu hướng công nghệ" : "Chứng chỉ & Đào tạo",
    date: id === 'featured' ? "15 Th03, 2026" : "10 Th03, 2026",
    author: id === 'featured' ? "Đỗ Thùy Trang" : "Lê Hoàng Nam",
    readTime: "5 phút đọc",
    image: id === 'featured' 
      ? "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
      : "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p class="mb-6 text-lg text-slate-700 leading-relaxed">Trí tuệ nhân tạo (AI) không còn là khái niệm xa vời mà đang trực tiếp định hình lại cách các doanh nghiệp vận hành, đặc biệt là trong lĩnh vực IT Services. Sự ra đời của các mô hình ngôn ngữ lớn (LLM) và các công cụ tự động hóa đang tạo ra một bước ngoặt lớn.</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Tự động hóa quy trình hỗ trợ (Helpdesk Automation)</h3>
      <p class="mb-6 text-lg text-slate-700 leading-relaxed">Trước đây, các nhân viên IT Helpdesk phải xử lý hàng trăm ticket mỗi ngày với những vấn đề lặp đi lặp lại như reset mật khẩu, cấp quyền truy cập, hay cấu hình email. Hiện nay, AI Chatbot có thể giải quyết đến 70% các yêu cầu cơ bản này ngay lập tức, giải phóng thời gian để các kỹ sư tập trung vào các sự cố phức tạp hơn.</p>
      
      <blockquote class="border-l-4 border-blue-600 pl-6 py-4 my-8 bg-blue-50 rounded-r-lg italic text-slate-700 text-xl">
        "AI sẽ không thay thế kỹ sư IT, nhưng kỹ sư IT biết sử dụng AI sẽ thay thế những người không biết."
      </blockquote>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Dự đoán và ngăn chặn sự cố (Predictive Maintenance)</h3>
      <p class="mb-6 text-lg text-slate-700 leading-relaxed">Thay vì chờ đợi hệ thống sập mới bắt đầu sửa chữa (Reactive), AI giúp phân tích hàng triệu log data trong thời gian thực để phát hiện các dấu hiệu bất thường. Hệ thống có thể cảnh báo trước khi một ổ cứng hỏng hoặc một cuộc tấn công DDoS xảy ra, chuyển mô hình IT Services sang hướng chủ động (Proactive).</p>
      
      <h3 class="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Kỹ năng nào cần thiết cho tương lai?</h3>
      <ul class="list-disc pl-6 mb-6 text-lg text-slate-700 leading-relaxed space-y-2">
        <li><strong>Prompt Engineering:</strong> Kỹ năng giao tiếp và ra lệnh cho AI để tối ưu hóa công việc.</li>
        <li><strong>Data Analysis:</strong> Khả năng đọc hiểu và phân tích dữ liệu do AI xuất ra.</li>
        <li><strong>Security & Compliance:</strong> Đảm bảo an toàn dữ liệu khi tích hợp các công cụ AI của bên thứ ba.</li>
        <li><strong>Kỹ năng mềm:</strong> Sự thấu cảm, giao tiếp và giải quyết vấn đề phức tạp - những thứ AI chưa thể làm được.</li>
      </ul>
      
      <p class="mb-6 text-lg text-slate-700 leading-relaxed">Tóm lại, kỷ nguyên AI mang đến cả thách thức và cơ hội. Những chuyên gia IT Services nhanh nhạy nắm bắt công nghệ mới sẽ trở thành những nhân tố không thể thiếu trong bất kỳ tổ chức nào.</p>
    `
  };

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link to="/news" className="inline-flex items-center text-slate-500 hover:text-blue-600 font-medium mb-8 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Quay lại danh sách tin tức
        </Link>

        {/* Article Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-slate-100 mb-10">
            <div className="flex items-center gap-6">
              <div className="flex items-center text-slate-600 font-medium">
                <User className="h-5 w-5 mr-2 text-slate-400" />
                {post.author}
              </div>
              <div className="flex items-center text-slate-600 font-medium">
                <Calendar className="h-5 w-5 mr-2 text-slate-400" />
                {post.date}
              </div>
              <div className="flex items-center text-slate-600 font-medium hidden sm:flex">
                <Clock className="h-5 w-5 mr-2 text-slate-400" />
                {post.readTime}
              </div>
            </div>
            
            <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors bg-slate-50 px-4 py-2 rounded-full">
              <Share2 className="h-4 w-4" />
              Chia sẻ
            </button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl overflow-hidden mb-12 shadow-xl"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto max-h-[500px] object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Tags & Footer */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Tags:</span>
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">IT Services</span>
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">AI</span>
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">Tương lai</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
