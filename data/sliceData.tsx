interface DataSlide {
  id: number;
  name: string;
  description: string;
  category: string[];
  imgavt: string;
  imgbg: string;
}
export const sliceData: DataSlide[] = [
  {
    id: 1,
    name: "Demon Slayer",
    description:
      "Bộ phim hoạt hình Thanh gươm diệt quỷ - Chuyến tàu vô tận đã phá kỷ lục phòng vé, trở thành phim có doanh thu cao nhất mọi thời đại ở Nhật Bản. Phim thu về hơn 36,8 tỷ yên (khoảng 350 triệu đôla) tiền bán vé, soán ngôi phim Vùng đất linh hồn của Miyazaki Hayao và giành vị trí đầu bảng doanh thu. Thành công của bộ phim càng trở nên đáng chú ý hơn nhờ thực tế là phim được công chiếu giữa đại dịch vi-rút corona, thời điểm ngành công nghiệp giải trí đang phải gồng mình để tồn tại.",
    category: ["Hành Động", "Kinh Dị"],
    imgavt: "/imgs/demonslayeravt.png",
    imgbg: "/imgs/demonslayer.png",
  },

  {
    id: 2,
    name: "One Piece",
    description:
      "Bộ phim hoạt hình Thanh gươm diệt quỷ - Chuyến tàu vô tận đã phá kỷ lục phòng vé, trở thành phim có doanh thu cao nhất mọi thời đại ở Nhật Bản. Phim thu về hơn 36,8 tỷ yên (khoảng 350 triệu đôla) tiền bán vé, soán ngôi phim Vùng đất linh hồn của Miyazaki Hayao và giành vị trí đầu bảng doanh thu. Thành công của bộ phim càng trở nên đáng chú ý hơn nhờ thực tế là phim được công chiếu giữa đại dịch vi-rút corona, thời điểm ngành công nghiệp giải trí đang phải gồng mình để tồn tại.",
    category: ["Hành Động", "Kinh Dị"],
    imgavt: "/imgs/onepieceavt.jpg",
    imgbg: "/imgs/onepiece.jpg",
  },
];
