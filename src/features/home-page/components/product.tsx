import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/elements/button/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Harvesting_section2 from "@/assets/background/Harvesting_section2.png";
import { useState } from "react";
import Orange1 from "@/assets/images/orange.png";
import Quyt from "@/assets/images/quyt.jpg";
import QuytHong from "@/assets/images/quyt-hong.png";
import Buoi from "@/assets/images/buoi.jpg";

const fruits = [
  {
    id: 1,
    name: "Cam sành",
    des: "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    image: Orange1,
  },
  {
    id: 2,
    name: "Quýt đường",
    des: "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    image: Quyt,
  },
  {
    id: 3,
    name: "Bưởi",
    des: "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    image: Buoi,
  },
  {
    id: 4,
    name: "Quýt hồng",
    des: "Được trồng theo tiêu chuẩn nông nghiệp hữu cơ, không hóa chất độc hại, đảm bảo an toàn cho sức khỏe. Đạt độ chín hoàn hảo, mọng nước, ngọt thanh tự nhiên, mang lại trải nghiệm tươi ngon đúng chuẩn.",
    image: QuytHong,
  },
];

export const Product = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      bgcolor="black"
      p={2}
      gap={4}
    >
      <Box justifyContent="center">
        <Typography
          fontSize={{ xs: "1.8rem", sm: "3rem", md: "3rem" }}
          fontWeight="bold"
          textAlign="center"
          color="white"
        >
          Sản phẩm
        </Typography>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr", // 1 cột trên màn hình nhỏ
          sm: "repeat(2, 1fr)", // 2 cột trên màn hình nhỏ
          md: "repeat(4, 1fr)", // 4 cột trên màn hình lớn
          rowGap: 50, // khoảng cách giữa các dòng
          columnGap: 0, // khoảng cách giữa các cột
          justifyItems: "center", // Căn giữa ngang (theo cột)
          alignItems: "center",
        }}
        mr={{ xs: 0, sm: 0, md: 12 }} // Khoảng cách giữa các items
        ml={{ xs: 0, sm: 0, md: 12 }}
      >
        {fruits.map((fruit) => {
          const isExpanded = expandedId === fruit.id;

          return (
            <motion.div
              key={fruit.id}
              animate={{ width: isExpanded ? 460 : 250 }}
              transition={{ duration: 0.8, ease: [0.2, 0.2, 0.2, 1.1] }}
              style={{
                maxWidth: 500, // Giữ layout nhất quán
              }}
            >
              <Box
                height={{ xs: "500px", sm: "600px", md: "700px" }}
                borderRadius={16}
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
                position="relative"
                overflow="hidden"
                p={4}
                onClick={() => setExpandedId(isExpanded ? null : fruit.id)}
                sx={{
                  cursor: "pointer",
                  background: "black",
                  width: "100%",
                }}
              >
                {/* Ảnh nền */}
                <Box
                  width="100%"
                  height="100%"
                  position="absolute"
                  top={0}
                  left={0}
                >
                  <Box
                    width="100%"
                    height="100%"
                    position="absolute"
                    top={0}
                    left={0}
                    sx={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${fruit.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      zIndex: 1,
                    }}
                  />
                </Box>

                {/* Nội dung */}
                <motion.div
                  initial={false}
                  animate={isExpanded ? "open" : "collapsed"}
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                  style={{
                    overflow: "hidden",
                    zIndex: 2,
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  <Typography
                    fontSize={{ xs: "1.5rem", sm: "2.6rem", md: "3rem" }}
                    fontWeight="bold"
                  >
                    {fruit.name}
                  </Typography>
                  <Typography
                    fontSize={{ xs: "0.9rem", sm: "1.1rem", md: "1.1rem" }}
                    mt={1}
                  >
                    {fruit.des}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      width: "100%",
                      maxWidth: "200px",
                      fontSize: "1rem",
                      padding: "10px 20px",
                      borderRadius: 16,
                    }}
                  >
                    Tìm hiểu thêm
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};
