import request from "@/request";

export const getProductList = (data) => {
  return request({
    url: "/product/v1/list",
    method: "get",
  });
};
