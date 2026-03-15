import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Users, 
  Trophy, 
  Rocket, 
  ShieldCheck, 
  Globe,
  Heart,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Về chúng tôi</span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Sứ mệnh kết nối <span className="text-blue-600">tài năng trẻ</span> với thế giới công nghệ
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              TechServ không chỉ là một nền tảng thông tin, chúng tôi là người đồng hành tin cậy trên hành trình định hướng và phát triển sự nghiệp trong ngành IT Services tại Việt Nam.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-blue-600 mb-2">5,000+</p>
                <p className="text-slate-500 font-medium">Sinh viên được định hướng</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-emerald-600 mb-2">50+</p>
                <p className="text-slate-500 font-medium">Đối tác doanh nghiệp</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Team working" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Startup</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-slate-900 p-12 md:p-16 rounded-[3.5rem] text-white">
            <Target className="h-12 w-12 text-blue-500 mb-8" />
            <h2 className="text-3xl font-bold mb-6">Tầm nhìn</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Trở thành hệ sinh thái định hướng nghề nghiệp CNTT hàng đầu khu vực, nơi mọi bạn trẻ đều có thể tìm thấy lộ trình phát triển bản thân tối ưu nhất.
            </p>
          </div>
          <div className="bg-blue-600 p-12 md:p-16 rounded-[3.5rem] text-white">
            <Rocket className="h-12 w-12 text-blue-200 mb-8" />
            <h2 className="text-3xl font-bold mb-6">Sứ mệnh</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Thu hẹp khoảng cách giữa nhà trường và doanh nghiệp bằng cách cung cấp thông tin thực tế, kỹ năng cần thiết và cơ hội thực tập chất lượng cao.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Giá trị cốt lõi</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Những nguyên tắc vàng định hình nên văn hóa và mọi hoạt động của TechServ.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Tận tâm", desc: "Luôn đặt lợi ích và sự phát triển của sinh viên lên hàng đầu trong mọi quyết định.", color: "bg-rose-50 text-rose-600" },
              { icon: Lightbulb, title: "Sáng tạo", desc: "Không ngừng đổi mới phương pháp truyền đạt và cập nhật công nghệ mới nhất.", color: "bg-amber-50 text-amber-600" },
              { icon: ShieldCheck, title: "Chính trực", desc: "Cung cấp thông tin khách quan, trung thực về thị trường lao động và cơ hội nghề nghiệp.", color: "bg-emerald-50 text-emerald-600" },
              { icon: Users, title: "Cộng đồng", desc: "Xây dựng mạng lưới kết nối mạnh mẽ giữa sinh viên, chuyên gia và doanh nghiệp.", color: "bg-blue-50 text-blue-600" },
              { icon: Globe, title: "Toàn cầu", desc: "Định hướng sinh viên đạt chuẩn năng lực quốc tế để làm việc trong môi trường đa quốc gia.", color: "bg-purple-50 text-purple-600" },
              { icon: CheckCircle2, title: "Hiệu quả", desc: "Cam kết mang lại giá trị thực tiễn, giúp sinh viên có việc làm đúng chuyên môn.", color: "bg-indigo-50 text-indigo-600" }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-slate-50 rounded-[4rem] p-16 md:p-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Đội ngũ sáng lập</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Những chuyên gia tâm huyết với hơn 10 năm kinh nghiệm trong ngành IT Services.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Đỗ Thùy Trang", role: "Founder & CEO", image: "/founderr.jpg" },
              { name: "Đỗ Thùy Trang", role: "Head of Education", image: "/founderr.jpg" },
              { name: "Đỗ Thùy Trang", role: "Technical Director", image: "/founderr.jpg" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
