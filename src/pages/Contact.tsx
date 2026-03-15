import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram,
  Clock,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Kết nối với <span className="text-blue-600">TechServ</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn trên con đường chinh phục ngành IT Services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Thông tin liên hệ</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl font-bold text-slate-900">techserv26@gmail.com</p>
                    <p className="text-slate-500">Phản hồi trong vòng 24h làm việc.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Hotline</p>
                    <p className="text-xl font-bold text-slate-900">099 88 77 66</p>
                    <p className="text-slate-500">Thứ 2 - Thứ 7 (8:00 - 21:00)</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Địa chỉ</p>
                    <p className="text-xl font-bold text-slate-900">TP. Hà Nội</p>
                    <p className="text-slate-500">Thành phố Hà Nội, Việt Nam</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Theo dõi chúng tôi</p>
                <div className="flex gap-4">
                  {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-slate-50 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-all">
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white">
                <Clock className="h-8 w-8 mb-4 opacity-80" />
                <h4 className="font-bold text-lg mb-2">Giờ làm việc</h4>
                <p className="text-blue-100 text-sm">Chúng tôi hỗ trợ trực tuyến 24/7 cho các trường hợp khẩn cấp.</p>
              </div>
              <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
                <MessageCircle className="h-8 w-8 mb-4 opacity-80" />
                <h4 className="font-bold text-lg mb-2">Tư vấn 1-1</h4>
                <p className="text-slate-400 text-sm">Đặt lịch hẹn để được chuyên gia định hướng lộ trình riêng biệt.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Gửi tin nhắn</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Họ và tên</label>
                  <input 
                    type="text" 
                    placeholder="Nguyễn Văn A"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="example@gmail.com"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Chủ đề</label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none">
                  <option>Tư vấn định hướng nghề nghiệp</option>
                  <option>Hỏi về lộ trình học tập</option>
                  <option>Hợp tác đào tạo</option>
                  <option>Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-2">Tin nhắn</label>
                <textarea 
                  rows={5}
                  placeholder="Bạn cần chúng tôi hỗ trợ điều gì?"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-3 group">
                Gửi yêu cầu ngay <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-[400px] bg-slate-200 rounded-[3rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 text-center">
              <MapPin className="h-10 w-10 text-rose-500 mx-auto mb-2" />
              <p className="font-bold text-slate-900">TechServ Campus</p>
              <p className="text-sm text-slate-500">TP. Hà Nội</p>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
            alt="Map"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
