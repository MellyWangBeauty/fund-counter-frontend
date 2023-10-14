export const menuTreeData = [
  {
    id: 1,
    parentId: 0,
    name: "首页",
    path: "/app",
    icon: "HomeFilled",
    children: [
      {
        id: 11,
        parentId: 1,
        name: "基金产品",
        path: "/app/fund",
        icon: "goods",
      },
    ],
  },
  {
    id: 2,
    parentId: 0,
    name: "账户管理",
    path: "/sys",
    icon: "Avatar",
    children: [
      {
        id: 21,
        parentId: 2,
        name: "用户中心",
        path: "/sys/user",
        icon: "User",
      },
    ],
  },
  {
    id: 3,
    parentId: 0,
    name: "业务查询",
    path: "/logs",
    icon: "document",
    children: [
      {
        id: 31,
        parentId: 3,
        name: "通用信息",
        path: "/logs/info",
        icon: "Files",
      },
      {
        id: 32,
        parentId: 3,
        name: "日终清算",
        path: "/logs/clear",
        icon: "Finished",
      },
    ],
  },
  {
    id: 4,
    parentId: 0,
    name: "交易管理",
    path: "/deal",
    icon: "Menu",
    children: [
      {
        id: 41,
        parentId: 4,
        name: "产品购买",
        path: "/deal/buy",
        icon: "ShoppingCart",
      },
      {
        id: 42,
        parentId: 4,
        name: "产品赎回",
        path: "/deal/sell",
        icon: "SoldOut",
      },
    ],
  },
];
