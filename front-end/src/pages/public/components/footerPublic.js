function FooterPublic() {
    return ( 
        <footer className="bg-black border-t border-zinc-400 text-center lg:text-center">
        <div className="container px-6 pt-[100px]">
          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-zinc-400">Thông tin người dùng</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-zinc-400">
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-zinc-400">
                    Quan hệ nhà đầu tư
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-zinc-400">
                    Quyền riêng tư
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-zinc-400">
                    Kiểm tra tốc độ
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-zinc-400">Trợ giúp</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-zinc-400">
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-zinc-400">
                    Tùy chọn cookie
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-zinc-400">
                    Thông báo pháp lý
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-zinc-400">Về chúng tôi</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-zinc-400">
                    Đặt vé
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-zinc-400">
                    Giá vé
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-zinc-400">
                    Lịch chiếu
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-zinc-400">
                    Sự kiện khuyến mãi
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5 text-zinc-400">Mạng xã hội</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-zinc-400">
                    Tài khoản
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-zinc-400">
                    Thông tin doanh nghiệp
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-zinc-400">
                    Trung tâm đa phương tiện
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-zinc-400">
                    Liện hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-gray-700 text-center p-4">
          © 2022 Copyright -&ensp;
          <a className="text-zinc-400" href="https://tailwind-elements.com/">
             Pul React
          </a>
        </div>
      </footer>
    );
}

export default FooterPublic;