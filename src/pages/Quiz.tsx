import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Clock,
  ArrowRight, 
  RotateCcw,
  MonitorSmartphone,
  ShieldCheck,
  Headset,
  Lightbulb,
  Target
} from 'lucide-react';

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(-1); // -1 is intro
  const [scores, setScores] = useState({ support: 0, security: 0, technician: 0 });

  const questions = [
    {
      question: "Khi thiết bị công nghệ gặp lỗi, bạn thường:",
      options: [
        { text: "Tự tìm cách sửa", score: { support: 0, security: 1, technician: 3 } },
        { text: "Tìm hướng dẫn trên Internet", score: { support: 2, security: 1, technician: 1 } },
        { text: "Nhờ người khác sửa", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không quan tâm", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn cảm thấy thế nào khi học công nghệ mới?",
      options: [
        { text: "Rất hào hứng", score: { support: 1, security: 2, technician: 2 } },
        { text: "Khá thích", score: { support: 2, security: 1, technician: 1 } },
        { text: "Bình thường", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không thích", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn thích kiểu công việc nào?",
      options: [
        { text: "Phân tích và giải quyết vấn đề", score: { support: 1, security: 3, technician: 2 } },
        { text: "Làm việc với máy tính", score: { support: 1, security: 1, technician: 3 } },
        { text: "Công việc sáng tạo", score: { support: 2, security: 0, technician: 0 } },
        { text: "Công việc ngoài trời", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Khi gặp một vấn đề khó, bạn:",
      options: [
        { text: "Kiên trì giải quyết", score: { support: 1, security: 3, technician: 2 } },
        { text: "Tìm sự trợ giúp", score: { support: 3, security: 0, technician: 1 } },
        { text: "Thử một vài lần", score: { support: 1, security: 0, technician: 1 } },
        { text: "Tránh làm", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn có thích tìm hiểu cách hoạt động của máy tính không?",
      options: [
        { text: "Rất thích", score: { support: 1, security: 2, technician: 3 } },
        { text: "Khá thích", score: { support: 2, security: 1, technician: 1 } },
        { text: "Bình thường", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không thích", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn có sẵn sàng học công nghệ mới liên tục không?",
      options: [
        { text: "Rất sẵn sàng", score: { support: 1, security: 3, technician: 2 } },
        { text: "Khá sẵn sàng", score: { support: 2, security: 1, technician: 1 } },
        { text: "Chỉ khi cần", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không muốn", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn thích môi trường làm việc nào?",
      options: [
        { text: "Môi trường công nghệ", score: { support: 1, security: 2, technician: 3 } },
        { text: "Văn phòng", score: { support: 3, security: 1, technician: 0 } },
        { text: "Sáng tạo", score: { support: 1, security: 0, technician: 0 } },
        { text: "Ngoài trời", score: { support: 0, security: 0, technician: 1 } }
      ]
    },
    {
      question: "Bạn có thích giúp người khác sửa lỗi công nghệ không?",
      options: [
        { text: "Rất thích", score: { support: 3, security: 0, technician: 2 } },
        { text: "Khá thích", score: { support: 2, security: 0, technician: 1 } },
        { text: "Bình thường", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không thích", score: { support: 0, security: 1, technician: 0 } }
      ]
    },
    {
      question: "Bạn cảm thấy thế nào khi làm việc với máy tính lâu?",
      options: [
        { text: "Rất thoải mái", score: { support: 1, security: 2, technician: 3 } },
        { text: "Khá ổn", score: { support: 2, security: 1, technician: 1 } },
        { text: "Hơi mệt", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không thích", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn thích kiểu thử thách nào?",
      options: [
        { text: "Giải quyết lỗi kỹ thuật", score: { support: 1, security: 2, technician: 3 } },
        { text: "Học phần mềm mới", score: { support: 2, security: 1, technician: 1 } },
        { text: "Hoạt động sáng tạo", score: { support: 1, security: 0, technician: 0 } },
        { text: "Hoạt động thể chất", score: { support: 0, security: 0, technician: 1 } }
      ]
    },
    {
      question: "Bạn có thích tìm hiểu về bảo mật mạng không?",
      options: [
        { text: "Rất thích", score: { support: 0, security: 3, technician: 1 } },
        { text: "Khá thích", score: { support: 1, security: 2, technician: 1 } },
        { text: "Bình thường", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không thích", score: { support: 1, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Khi phải học kiến thức khó, bạn:",
      options: [
        { text: "Cố gắng học đến khi hiểu", score: { support: 1, security: 3, technician: 2 } },
        { text: "Học từ từ", score: { support: 2, security: 1, technician: 1 } },
        { text: "Chỉ học phần cần thiết", score: { support: 1, security: 0, technician: 1 } },
        { text: "Tránh học", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn thích công việc nào hơn?",
      options: [
        { text: "Sửa lỗi hệ thống", score: { support: 0, security: 2, technician: 3 } },
        { text: "Hỗ trợ người dùng", score: { support: 3, security: 0, technician: 1 } },
        { text: "Thiết kế sáng tạo", score: { support: 1, security: 0, technician: 0 } },
        { text: "Công việc ngoài trời", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn có thích làm việc với hệ thống mạng không?",
      options: [
        { text: "Rất thích", score: { support: 0, security: 3, technician: 2 } },
        { text: "Khá thích", score: { support: 1, security: 2, technician: 1 } },
        { text: "Bình thường", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không thích", score: { support: 1, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn thường làm gì khi gặp phần mềm mới?",
      options: [
        { text: "Tự khám phá", score: { support: 1, security: 2, technician: 3 } },
        { text: "Xem hướng dẫn", score: { support: 3, security: 1, technician: 1 } },
        { text: "Chỉ dùng cơ bản", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không muốn thử", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn đánh giá khả năng kiên nhẫn của mình thế nào?",
      options: [
        { text: "Rất kiên nhẫn", score: { support: 3, security: 2, technician: 1 } },
        { text: "Khá kiên nhẫn", score: { support: 2, security: 1, technician: 1 } },
        { text: "Bình thường", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không kiên nhẫn", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn có thích làm việc nhóm không?",
      options: [
        { text: "Rất thích", score: { support: 3, security: 1, technician: 0 } },
        { text: "Khá thích", score: { support: 2, security: 1, technician: 1 } },
        { text: "Bình thường", score: { support: 1, security: 0, technician: 1 } },
        { text: "Không thích", score: { support: 0, security: 2, technician: 1 } }
      ]
    },
    {
      question: "Bạn có thích cập nhật kiến thức mới không?",
      options: [
        { text: "Rất thích", score: { support: 1, security: 3, technician: 2 } },
        { text: "Khá thích", score: { support: 2, security: 1, technician: 1 } },
        { text: "Hơi ngại", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không thích", score: { support: 0, security: 0, technician: 0 } }
      ]
    },
    {
      question: "Bạn nghĩ mình phù hợp với ngành công nghệ không?",
      options: [
        { text: "Rất phù hợp", score: { support: 1, security: 2, technician: 3 } },
        { text: "Có thể phù hợp", score: { support: 2, security: 1, technician: 1 } },
        { text: "Chưa chắc", score: { support: 1, security: 0, technician: 0 } },
        { text: "Không phù hợp", score: { support: 0, security: 0, technician: 0 } }
      ]
    }
  ];

  const handleAnswer = (scoreObj: any) => {
    setScores(prev => ({
      support: prev.support + scoreObj.support,
      security: prev.security + scoreObj.security,
      technician: prev.technician + scoreObj.technician
    }));
    setCurrentStep(prev => prev + 1);
  };

  const getResult = () => {
    const max = Math.max(scores.support, scores.security, scores.technician);
    if (max === scores.security) return {
      title: "Kỹ sư An toàn thông tin",
      desc: "Bạn có tư duy của một người bảo vệ. Bạn cẩn trọng, thích phân tích rủi ro và đam mê việc bảo vệ dữ liệu.",
      icon: <ShieldCheck className="h-12 w-12 text-rose-500" />,
      bg: "bg-rose-500/10",
      color: "text-rose-500",
      path: "/careers#security"
    };
    if (max === scores.technician) return {
      title: "Kỹ thuật viên CNTT",
      desc: "Bạn là người của hành động. Bạn thích làm việc với phần cứng, tháo lắp và trực tiếp xử lý các thiết bị vật lý.",
      icon: <MonitorSmartphone className="h-12 w-12 text-emerald-500" />,
      bg: "bg-emerald-500/10",
      color: "text-emerald-500",
      path: "/careers#technician"
    };
    return {
      title: "Chuyên viên Hỗ trợ kỹ thuật",
      desc: "Bạn là người kết nối tuyệt vời. Bạn có kỹ năng giao tiếp tốt và luôn sẵn lòng giúp đỡ mọi người giải quyết vấn đề.",
      icon: <Headset className="h-12 w-12 text-blue-500" />,
      bg: "bg-blue-500/10",
      color: "text-blue-500",
      path: "/careers#support"
    };
  };

  const resetQuiz = () => {
    setScores({ support: 0, security: 0, technician: 0 });
    setCurrentStep(0);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {currentStep === -1 ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Target className="h-10 w-10 text-blue-500" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Bạn phù hợp với <span className="text-blue-500">vị trí nào?</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Chỉ với 19 câu hỏi trắc nghiệm tâm lý và sở thích, chúng tôi sẽ giúp bạn tìm ra hướng đi phù hợp nhất trong ngành IT Services.
              </p>
              <button
                onClick={() => setCurrentStep(0)}
                className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all flex items-center gap-3 mx-auto group"
              >
                Bắt đầu khám phá <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Clock className="h-6 w-6 text-blue-400 mb-4" />
                  <h4 className="text-white font-bold mb-2">2 phút thực hiện</h4>
                  <p className="text-slate-500 text-sm">Nhanh chóng và súc tích.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Zap className="h-6 w-6 text-yellow-400 mb-4" />
                  <h4 className="text-white font-bold mb-2">Kết quả tức thì</h4>
                  <p className="text-slate-500 text-sm">Phân tích dựa trên sở thích.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Lightbulb className="h-6 w-6 text-emerald-400" />
                  <h4 className="text-white font-bold mb-2">Định hướng nghề</h4>
                  <p className="text-slate-500 text-sm">Gợi ý lộ trình học tập.</p>
                </div>
              </div>
            </motion.div>
          ) : currentStep < questions.length ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="py-12"
            >
              <div className="mb-12">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">Câu hỏi {currentStep + 1} / {questions.length}</span>
                  <span className="text-slate-500 text-sm">{Math.round(((currentStep + 1) / questions.length) * 100)}% hoàn thành</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-tight">
                {questions[currentStep].question}
              </h3>

              <div className="space-y-4">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all group flex items-center gap-6"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors font-bold text-xl flex-shrink-0">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-lg md:text-xl font-medium text-slate-200 group-hover:text-white transition-colors">{option.text}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className={`w-28 h-28 ${getResult().bg} rounded-[2.5rem] flex items-center justify-center mx-auto mb-10`}>
                {getResult().icon}
              </div>
              <h2 className="text-white text-xl font-bold uppercase tracking-[0.3em] mb-4">Kết quả của bạn</h2>
              <h3 className={`text-4xl md:text-6xl font-bold mb-6 ${getResult().color}`}>
                {getResult().title}
              </h3>
              <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                {getResult().desc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={resetQuiz}
                  className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-lg border border-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <RotateCcw className="h-5 w-5" /> Làm lại bài test
                </button>
                <a
                  href={getResult().path}
                  className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-3"
                >
                  Tìm hiểu sâu hơn <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-20 p-10 bg-white/5 rounded-[3rem] border border-white/10 text-left">
                <h4 className="text-white font-bold text-2xl mb-6 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-blue-500" /> Lời khuyên cho bạn
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-slate-400">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Hãy bắt đầu tìm hiểu các chứng chỉ cơ bản như CompTIA A+ để xây dựng nền tảng vững chắc.</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-400">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Tham gia các cộng đồng IT để học hỏi kinh nghiệm thực tế từ những người đi trước.</span>
                  </li>
                  <li className="flex items-start gap-4 text-slate-400">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Đừng ngần ngại thực hành trên các thiết bị cũ hoặc máy ảo để nâng cao tay nghề.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;
