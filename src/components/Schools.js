import React, { useState } from "react";
import { List, Pagination, Avatar } from "antd";

// Масив шкіл
const schools = [
    { name: "Рівненський ліцей №1", img: "https://cdn4.suspilne.media/images/494cfbc347295092.png" },
    { name: "Рівненський ліцей №2", img: "https://files.ratelist.top/uploads/images/bs/5509/photos/60cc1661230ed0f72f332b6526f81ba0-original.webp" },
    { name: "Рівненський ліцей №3", img: "https://rivnecbs.com.ua/img/upload-files/%D0%97%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D1%96%20%D1%96%20%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D1%96%20%D0%B4%D0%B0%D1%82%D0%B8/3%20-%20%D1%82%D1%8F%20%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%20%D1%81%D1%83%D1%87%D0%B0%D1%81%D0%BD%D0%B8%D0%B9%20%D0%B2%D0%B8%D0%B3%D0%BB%D1%8F%D0%B4.jpg" },
    { name: "Рівненський ліцей №4", img: "https://7dniv.rv.ua/wp-content/uploads/2025/12/zosh4.png" },
    { name: "Рівненський ліцей №5", img: "https://files.ratelist.top/uploads/images/bs/5524/photos/92629604a56e6b00c0222d7179def1a9-original.webp" },
    { name: "Рівненський ліцей №6", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09nI0bbpFpNoA7aNRFDlhDWbv4oQMRIlk3w&s" },
    { name: "Рівненський ліцей №7", img: "https://lh5.googleusercontent.com/proxy/ENID178yIVRjCruK9atnoml9Now3-DvMlqlyGJaaW8Dj-Lvjyy6RIRgOEOXlo5Q9ZL8b9fQnwyi0" },
    { name: "Рівненський ліцей №8", img: "https://files.ratelist.top/uploads/images/bs/5501/photos/9014eb099b46976e4ed043cdb446e0f0-original.webp" },
    { name: "Рівненський ліцей №9", img: "https://lh3.googleusercontent.com/p/AF1QipN4AgX8tFhRKuhB1uNlMA62qAzoya36xvIegDvv=w600-k" },
    { name: "Рівненський ліцей №10", img: "https://lh3.googleusercontent.com/p/AF1QipNcEedNVuaS0DrmtvVkH8nA8y5EXm-FtENuHTEl=w600-k" },
    { name: "Рівненський ліцей №11", img: "https://files.ratelist.top/uploads/images/bs/5534/photos/22d5baf810a8b0049c35032caaab887a-original.webp" },
    { name: "Рівненський ліцей №12", img: "https://files.ratelist.top/uploads/images/bs/8392/photos/5570f1eb95ad72d97c649392176b25d4-original.webp" },
    { name: "Рівненський ліцей №13", img: "https://7dniv.rv.ua/wp-content/uploads/2021/07/zosh-13-rivne-hazeta-7dniv.jpg" },
    { name: "Рівненський ліцей №14", img: "https://dity.ogo.ua/wp-content/uploads/2017/03/image202.jpg" },
    { name: "Рівненський ліцей №15", img: "https://lh3.googleusercontent.com/p/AF1QipNtGN1W1EZiBJ2fmz8c4yIBjjC_VAZ7LYTyMMcS=w600-k" },
];

export default function Schools() {
    const [page, setPage] = useState(1);
    const pageSize = 5;

    const startIndex = (page - 1) * pageSize;
    const currentSchools = schools.slice(startIndex, startIndex + pageSize);

    return (
        <div>
            <h1>Школи Рівного</h1>
            <List
                bordered
                dataSource={currentSchools}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.img} size={80} />}
                            title={
                                <span style={{
                                    fontSize: "20px",
                                    display: "inline-block",
                                    lineHeight: "80px"
                                }}>
                                    {item.name}
                                </span>
                            }
                        />
                    </List.Item>
                )}
            />
            <Pagination
                current={page}
                pageSize={pageSize}
                total={schools.length}
                onChange={(p) => setPage(p)}
                style={{ marginTop: "20px", textAlign: "center" }}
            />
        </div>
    );
}