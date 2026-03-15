import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Tag, Globe, ExternalLink } from 'lucide-react';

const News = () => {
  const featuredPost = {
    title: "Lời cảnh báo của Forbes về thiếu hụt nhân sự trong ngành An ninh mạng",
    excerpt: "Gần 4 triệu việc làm an ninh mạng đang bị bỏ trống. Khám phá lý do tại sao bạn nên cân nhắc bước chân vào lĩnh vực đầy tiềm năng này.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    date: "16 Th08, 2024",
    source: "Forbes",
    url: "https://www.forbes.com/sites/jackkelly/2024/08/16/nearly-4-million-cybersecurity-jobs-are-vacant-heres-why-you-should-consider-breaking-into-this-sector/",
    category: "An ninh mạng"
  };

  const posts = [
    {
      id: 1,
      title: "Khoảng cách kỹ năng trong An ninh mạng: Một lỗ hổng chực chờ",
      excerpt: "Sự thiếu hụt kỹ năng an ninh mạng ngày càng tăng đang tạo ra những rủi ro lớn cho các tổ chức. Bài viết từ Forbes Tech Council phân tích nguyên nhân và giải pháp.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      date: "26 Th02, 2025",
      source: "Forbes",
      url: "https://www.forbes.com/councils/forbestechcouncil/2025/02/26/the-growing-cybersecurity-skills-gap-a-breach-waiting-to-happen/",
      category: "An ninh mạng"
    },
    {
      id: 2,
      title: "Nghiên cứu học thuật: Thiếu hụt nhân lực An ninh mạng",
      excerpt: "Nghiên cứu chi tiết từ Đại học Cornell về tình trạng thiếu hụt nhân sự an ninh mạng, phân tích các yếu tố ảnh hưởng và đề xuất mô hình giải quyết.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
      date: "26 Th04, 2022",
      source: "Cornell University",
      url: "https://arxiv.org/abs/2204.13793",
      category: "Nghiên cứu"
    },
    {
      id: 3,
      title: "Việt Nam thiếu hụt hàng trăm nghìn nhân sự CNTT chất lượng cao",
      excerpt: "Bất chấp làn sóng sa thải toàn cầu, thị trường Việt Nam vẫn đang khát nhân lực IT chất lượng cao để phục vụ công cuộc chuyển đổi số.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      date: "15 Th10, 2023",
      source: "VnEconomy",
      url: "https://vneconomy.vn/viet-nam-thieu-hut-hang-tram-nghin-nhan-su-cntt-chat-luong-cao.htm",
      category: "Thị trường IT"
    },
    {
      id: 4,
      title: "Kỷ lục thiếu hụt 4 triệu chuyên gia An ninh mạng toàn cầu",
      excerpt: "Báo cáo lực lượng lao động an ninh mạng toàn cầu của ISC2 cho thấy khoảng cách nhân lực đã đạt mức kỷ lục, đòi hỏi các chiến lược tuyển dụng mới.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
      date: "31 Th10, 2023",
      source: "ISC2",
      url: "https://www.isc2.org/Insights/2023/10/ISC2-Reveals-Workforce-Growth-But-Record-Breaking-Gap-4-Million-Cybersecurity-Professionals",
      category: "Báo cáo toàn cầu"
    },
    {
      id: 5,
      title: "Báo cáo thị trường IT Việt Nam: Nhu cầu nhân lực vẫn tăng cao",
      excerpt: "Theo báo cáo mới nhất từ TopDev, mức lương và nhu cầu tuyển dụng lập trình viên tại Việt Nam vẫn giữ đà tăng trưởng ổn định.",
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
      date: "Năm 2024",
      source: "TopDev",
      url: "https://topdev.vn/blog/bao-cao-thi-truong-it-viet-nam/",
      category: "Báo cáo thị trường"
    },
    {
      id: 6,
      title: "Chi phí tội phạm mạng dự kiến đạt 10.5 nghìn tỷ USD vào năm 2025",
      excerpt: "Sự thiếu hụt nhân sự an ninh mạng tỷ lệ thuận với sự gia tăng của tội phạm mạng. Cybersecurity Ventures dự báo thiệt hại khổng lồ trong những năm tới.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      date: "Năm 2024",
      source: "Cybersecurity Ventures",
      url: "https://cybersecurityventures.com/cybercrime-damages-6-trillion-by-2021/",
      category: "Dự báo"
    }
  ];

  const categories = [
    "Tất cả",
    "An ninh mạng",
    "Thị trường IT",
    "Nghiên cứu",
    "Báo cáo toàn cầu",
    "Báo cáo thị trường",
    "Dự báo"
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Tin tức & <span className="text-blue-600">Nghiên cứu</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tổng hợp các bài báo, nghiên cứu học thuật và báo cáo thị trường uy tín về ngành Công nghệ thông tin và An ninh mạng.
          </p>
        </div>

        {/* Featured Post */}
        <a href={featuredPost.url} target="_blank" rel="noopener noreferrer" className="block mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-xl group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-slate-500 text-sm font-medium">
                    <Calendar className="h-4 w-4 mr-2" />
                    {featuredPost.date}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-slate-700 font-medium">
                    <Globe className="h-5 w-5 mr-2 text-slate-400" />
                    Nguồn: {featuredPost.source}
                  </div>
                  <span className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                    Đọc bài báo <ExternalLink className="h-5 w-5 ml-2" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </a>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                index === 0 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <a href={post.url} target="_blank" rel="noopener noreferrer" key={post.id} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-100 group cursor-pointer flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1.5">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center text-slate-500 text-sm mb-4 font-medium">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex items-center text-slate-700 text-sm font-medium">
                      <Globe className="h-4 w-4 mr-2 text-slate-400" />
                      Nguồn: {post.source}
                    </div>
                    <span className="text-blue-600 group-hover:text-blue-700">
                      <ExternalLink className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-8 py-3 rounded-full font-bold transition-colors">
            Xem thêm bài viết
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
