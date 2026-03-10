import portrait from '../assets/images/portrait.jpg';
import statue from '../assets/images/statue.jpg';
import book from '../assets/images/book-tianyanlun.jpg';
import family from '../assets/images/family.jpg';
import house from '../assets/images/house.jpg';

export const yanfuData = {
  name: "Nghiêm Phục",
  altName: "严复 | Yan Fu",
  years: "1854-1921",
  summary: "Một trong những học giả tiên phong giới thiệu văn hóa và khoa học phương Tây đến Trung Quốc, người đặt nền móng cho lý thuyết dịch thuật hiện đại với tiêu chuẩn 'Tín - Đạt - Nhã'.",
  tags: ["Nhà Tư Tưởng", "Dịch Giả", "Nhà Giáo Dục"],
  images: {
    portrait,
    statue,
    book,
    family,
    house
  },
  timeline: [
    { label: '1854', children: 'Sinh ra tại Mân Hầu, Phúc Kiến trong gia đình truyền thống Đông y.' },
    { label: '1867', children: 'Đỗ đầu Học viện Thuyền chính Phúc Châu, bắt đầu tiếp cận Tây học.' },
    { label: '1877', children: 'Du học Anh tại Trường Hải quân Hoàng gia Greenwich.' },
    { label: '1895', children: 'Tham gia hoạt động chính trị, chủ trương cải cách sau Chiến tranh Trung-Nhật.' },
    { label: '1906', children: 'Đảm nhiệm chức Hiệu trưởng Đại học Phục Đán.' },
    { label: '1912', children: 'Hiệu trưởng đầu tiên của Đại học Bắc Kinh (tiền thân).' },
    { label: '1921', children: 'Qua đời tại Phúc Châu, để lại di sản tri thức đồ sộ.' },
  ],
  philosophy: {
    title: "Tín - Đạt - Nhã (信达雅)",
    description: "Ba nguyên tắc vàng trong dịch thuật do Nghiêm Phục đề xướng:",
    items: [
      { key: "Tín", label: "Faithfulness", desc: "Trung thành với nội dung gốc." },
      { key: "Đạt", label: "Expressiveness", desc: "Diễn đạt mạch lạc, dễ hiểu." },
      { key: "Nhã", label: "Elegance", desc: "Văn phong trang trọng, tao nhã." }
    ]
  },
  works: [
    { title: "Thiên Diễn Luận", year: "1898", color: "volcano", desc: "Dịch từ 'Evolution and Ethics' của Thomas Huxley. Giới thiệu thuyết tiến hóa vào Trung Quốc." },
    { title: "Nguyên Phú", year: "1901", color: "blue", desc: "Dịch từ 'The Wealth of Nations' của Adam Smith. Đưa kinh tế học phương Tây vào nhận thức xã hội." },
    { title: "Quần Kỷ Quyền Giới Luận", year: "1903", color: "green", desc: "Dịch từ 'On Liberty' của John Stuart Mill. Bàn về ranh giới tự do cá nhân và tập thể." }
  ]
};
