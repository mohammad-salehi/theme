function sortArrayByProperty(array, property) {
  return array.sort((a, b) => {
    if (a[property] < b[property]) {
      return 1;
    }
    if (a[property] > b[property]) {
      return -1;
    }
    return 0;
  });
}
function sortSellArrayByProperty(array, property) {
  return array.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
}
export const AllDephProcessor = (response) => {
  
  const BuyRequest = [];
  const SellRequest = [];

  let GetSellOrders = [];
  let GetBuyOrders = [];

  response.data.asks.forEach((item) => {
    GetSellOrders.push({
      price: Number(item[0]),
      volume: Number(item[1]),
    });
  });

  response.data.bids.forEach((item) => {
    GetBuyOrders.push({
      price: Number(item[0]),
      volume: Number(item[1]),
    });
  });

  GetSellOrders = sortSellArrayByProperty(GetSellOrders, "price");
  GetBuyOrders = sortArrayByProperty(GetBuyOrders, "price");
  for (let i = GetBuyOrders.length - 1; i >= 0; i--) {
    let askSum = 0;
    for (let j = i; j >= 0; j--) {
      askSum += Number(GetBuyOrders[j].volume);
    }
    let obj = [String(GetBuyOrders[i].price), String(askSum)];
    BuyRequest.push(obj);
  }

  for (let i = 0; i < GetSellOrders.length; i++) {
    let askSum = 0;
    for (let j = 0; j <= i; j++) {
      askSum += Number(GetSellOrders[j].volume);
    }
    let obj = [String(GetSellOrders[i].price), String(askSum)];
    SellRequest.push(obj);
  }

  return {
    BuyRequest,
    SellRequest,
  };
}

export const AllOrdersProcessor = (response) => {
  let GetSellOrders = [];
  let GetBuyOrders = [];

  response.data.asks.forEach((item) => {
    GetSellOrders.push({
      price: Number(item[0]),
      volume: Number(item[1]),
    });
  });

  response.data.bids.forEach((item) => {
    GetBuyOrders.push({
      price: Number(item[0]),
      volume: Number(item[1]),
    });
  });

  // console.log('GetSellOrders')
  // console.log(GetSellOrders)
  // console.log('GetBuyOrders')
  // console.log(GetBuyOrders)

  GetSellOrders = sortSellArrayByProperty(GetSellOrders, "price");
  GetBuyOrders = sortArrayByProperty(GetBuyOrders, "price");

  GetSellOrders = GetSellOrders.slice(0, 10);
  GetBuyOrders = GetBuyOrders.slice(0, 10);

  GetSellOrders = sortArrayByProperty(GetSellOrders, "price");

  return {
    BuyOrders: GetBuyOrders,
    SellOrders: GetSellOrders,
  };
};
export const ExchangeData = [
  {
    name: "نوبیتکس",
    EnglishName: "NOBITEX",
    id: 1,
    address: "https://api.nobitex.ir/v3/orderbook/USDTIRT",
    ImageAddress:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspS0wq4BERg-uKkAh08Nz4YzT4OItjm0IWA&s",
    depth: "https://api.nobitex.ir/v2/depth/USDTIRT",
  },
  {
    name: "والکس",
    EnglishName: "WALLEX",
    id: 2,
    address: "https://api.wallex.ir/v1/depth?symbol=USDTTMN",
    ImageAddress:
      "https://s.cafebazaar.ir/images/icons/ir.wallex.app-cae0dd03-3eb0-47ff-b0b1-043344aedc3e_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize",
    depth: "https://api.wallex.ir/v1/depth?symbol=USDTTMN",
  },
  {
    name: "رمزینکس",
    EnglishName: "RAMZINEX",
    id: 3,
    address:
      "https://publicapi.ramzinex.com/exchange/api/v1.0/exchange/orderbooks/11/buys_sells",
    ImageAddress:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCiWkkoAqjijG8xJcZVhcXTinMFdPsjql_w&s",
    depth:
      "https://publicapi.ramzinex.com/exchange/api/v1.0/exchange/orderbooks/11/buys_sells",
  },
  {
    name: "او ام پی فینکس",
    EnglishName: "OMPFINEX",
    id: 4,
    address:
      "https://publicapi.ramzinex.com/exchange/api/v1.0/exchange/orderbooks/11/buys_sells",
    ImageAddress:
      "https://s.cafebazaar.ir/images/icons/com.ompfinex.app-8b192243-90d1-439a-ad6e-1397f9b7ac29_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize",
    depth:
      "https://publicapi.ramzinex.com/exchange/api/v1.0/exchange/orderbooks/11/buys_sells",
  },
];
export function containsPersian(text) {
  const persianRegex = /[\u0600-\u06FF]/;
  return persianRegex.test(text);
}
export const handleInputChange = (setterFunction) => (event) => {
  if (!containsPersian(event.target.value)) {
    const value = event.target.value.replace(/[^0-9.,]/g, "");
    setterFunction(value);
  } else {
    toast.error("زبان کیبورد فارسی است", {
      position: "bottom-left",
    });
  }
};

export const ScenariosSettingData = [
  //aggressive
  {
    label: "شروع سناریو بالاتر از بازار (ریال)",
    name: "order book reducer price",
    value: "order_book_reducer_price",
    scenario: "aggressive",
    type:'number'
  },
  {
    label: "تیک‌سایز سفارشات سرباز (ریال)",
    name: "soldier step percentage take size",
    value: "soldier_step_percentage_take_size",
    scenario: "aggressive",
    type:'array'
  },
  {
    label: "تیک‌سایز سفارشات پشتیبان (ریال)",
    name: "support step percentage take size",
    value: "support_step_percentage_take_size",
    scenario: "aggressive",
    type:'array'
  },
  {
    label: "شرط شروع سفارشات سرباز",
    name: "condition for start soldier step",
    value: "condition_for_start_soldier_step",
    scenario: "aggressive",
    type:'number'
  },
  {
    label: "تیک‌سایز سفارشات (ریال)",
    name: "media order take size",
    value: "media_order_take_size",
    scenario: "aggressive",
    type:'array'
  },
  {
    label: "بازه اعمال سفارشات نسبت به موجودی حساب (درصد)",
    name: "order volume for media order range",
    value: "order_volume_for_media_order_range",
    scenario: "aggressive",
    type:'array'
  },
  {
    label: "ضریب حجم سفارش اول",
    name: "aggressive order volume coefficient",
    value: "aggressive_order_volume_coefficient",
    scenario: "aggressive",
    type:'number'
  },
  {
    label: "فاصله قیمت سفارش با قیمت بازار (ریال)",
    name: "distance of media order should update state",
    value: "distance_of_media_order_should_update_state",
    scenario: "aggressive",
    type:'number'
  },
  {
    label: "حجم پیشفرض سفارش اول",
    name: "adjusted volume",
    value: "adjusted_volume",
    scenario: "aggressive",
    type:'number'
  },
  //media
  {
    label: "بازه تیک‌سایز سفارشات رسانه(آرایه)",
    name: "order take size for media scenario",
    value: "order_take_size_for_media_scenario",
    scenario: "media",
    type:'array'
  },
  {
    label: "بازه درصدی رندوم برای سفارشات رسانه(آرایه)",
    name: "percentage random range for media scenario",
    value: "percentage_random_range_for_media_scenario",
    scenario: "media",
    type:'array'
  },
  {
    label: "شرط دور شدن از قیمت بازار",
    name: "moving away from the market price",
    value: "moving_away_from_the_market_price",
    scenario: "media",
    type:'number'
  },
  {
    label: "شرط نزدیک شدن به قیمت بازار",
    name: "getting closer to market price",
    value: "getting_closer_to_market_price",
    scenario: "media",
    type:'number'
  },
  //aggressive_media
  {
    label: "زمان انتظار برای سفارش اول",
    name: "pending time for first order",
    value: "pending_time_for_first_order",
    scenario: "aggressive_media",
    type:'number'
  },
  {
    label: "ضریب حجم سفارشات سناریو تهاجمی",
    name: "aggressive order volume coefficient for aggressive scenario",
    value: "aggressive_order_volume_coefficient_for_aggressive_scenario",
    scenario: "aggressive_media",
    type:'number'
  },
  {
    label: "قیمت مدنظر برای کاهش عمق هدف",
    name: "order book reducer price for aggressive scenario",
    value: "order_book_reducer_price_for_aggressive_scenario",
    scenario: "aggressive_media",
    type:'number'
  },
  {
    label: "حجم سفارش تهاجمی(USDT)",
    name: "condition for aggressive order amount",
    value: "condition_for_aggressive_order_amount",
    scenario: "aggressive_media",
    type:'number'
  },
  {
    label: "مدت انتظار سفارشات پشتیبان",
    name: "pending time for support order",
    value: "pending_time_for_support_order",
    scenario: "aggressive_media",
    type:'number'
  },
  {
    label: "تعداد سفارشات پشتیبان",
    name: "count of support order",
    value: "count_of_support_order",
    scenario: "aggressive_media",
    type:'number'
  },
  {
    label: "درصد تیک سایز سفارشات پشتیبان",
    name: "support step percentage take size list",
    value: "support_step_percentage_take_size_list",
    scenario: "aggressive_media",
    type:'array'
  },
  {
    label: "ضریب حجم سفارشات پشتیبان",
    name: "support order volume percentage",
    value: "support_order_volume_percentage",
    scenario: "aggressive_media",
    type:'number'
  },
  {
    label: "بازه ضریب حجم سفارشات پشتیبان",
    name: "coefficient random range for volume support order",
    value: "coefficient_random_range_for_volume_support_order",
    scenario: "aggressive_media",
    type:'array'
  },
  {
    label: "مدت انتظار سفارشات رسانه",
    name: "pending time for media order",
    value: "pending_time_for_media_order",
    scenario: "aggressive_media",
    type:'number'
  },
  {
    label: "بازه تیک سایز سفارشات رسانه",
    name: "order take size for media order",
    value: "order_take_size_for_media_order",
    scenario: "aggressive_media",
    type:'array'
  },
  {
    label: "بازه ضریب سفارشات رسانه",
    name: "coefficient random range for media order",
    value: "coefficient_random_range_for_media_order",
    scenario: "aggressive_media",
    type:'array'
  },
  {
    label: "تعداد سفارشات رسانه",
    name: "count of media orders",
    value: "count_of_media_orders",
    scenario: "aggressive_media",
    type:'number'
  },
  {
    label: "مقدار فاصله برای بروزرسانی سفارشات رسانه",
    name: "condition amount distance for update media orders",
    value: "condition_amount_distance_for_update_media_orders",
    scenario: "aggressive_media",
    type:'number'
  },
  {
    label: "ضریب تصادفی برای سفارشات جان‌نثار",
    name: "coefficient random for spread orders",
    value: "coefficient_random_for_spread_orders",
    scenario: "aggressive_media",
    type:'array'
  },
  {
    label: "تیک‌سایز سفارشات جان‌نثار",
    name: "spread orders take size",
    value: "spread_orders_take_size",
    scenario: "aggressive_media",
    type:'array'
  },
  //buy
  {
    label: "چندمین سفارش در جدول سفارشات",
    name: "buy scenario order position",
    value: "buy_scenario_order_position",
    scenario: "buy",
    type:'number'
  },
  {
    label: "کمترین حجم سفارش",
    name: "buy scenario min order size",
    value: "buy_scenario_min_order_size",
    scenario: "buy",
    type:'number'
  },
  {
    label: "بیشترین حجم سفارش",
    name: "buy scenario max order size",
    value: "buy_scenario_max_order_size",
    scenario: "buy",
    type:'number'
  },
  {
    label: "مدت فعال بودن سفارشات(ثانیه)",
    name: "buy scenario hold time seconds",
    value: "buy_scenario_hold_time_seconds",
    scenario: "buy",
    type:'number'
  },
  //auto
  {
    label: "زمان انتظار برای سفارش اول",
    name: "pending time for first order",
    value: "pending_time_for_first_order",
    scenario: "auto",
    type:'number'
  },
  {
    label: "ضریب حجم سفارشات سناریو تهاجمی",
    name: "aggressive coefficient",
    value: "aggressive_coefficient",
    scenario: "auto",
    type:'number'
  },
  {
    label: "مدت انتظار سفارشات پشتیبان",
    name: "pending time for support order",
    value: "pending_time_for_support_order",
    scenario: "auto",
    type:'number'
  },
  {
    label: "تعداد سفارشات پشتیبان",
    name: "count of support order",
    value: "count_of_support_order",
    scenario: "auto",
    type:'number'
  },
  {
    label: "درصد تیک سایز سفارشات پشتیبان(آرایه)",
    name: "support step percentage take size list",
    value: "support_step_percentage_take_size_list",
    scenario: "auto",
    type:'array'
  },
  {
    label: "ضریب حجم سفارشات پشتیبان",
    name: "support order volume percentage",
    value: "support_order_volume_percentage",
    scenario: "auto",
    type:'number'
  },
  {
    label: "بازه ضریب حجم سفارشات پشتیبان(آرایه)",
    name: "coefficient random range for volume support order",
    value: "coefficient_random_range_for_volume_support_order",
    scenario: "auto",
    type:'array'
  },
  {
    label: "مدت انتظار سفارشات رسانه",
    name: "pending time for media order",
    value: "pending_time_for_media_order",
    scenario: "auto",
    type:'number'
  },
  {
    label: "بازه تیک سایز سفارشات رسانه(آرایه)",
    name: "order take size for media order",
    value: "order_take_size_for_media_order",
    scenario: "auto",
    type:'array'
  },
  {
    label: "بازه ضریب سفارشات رسانه(آرایه)",
    name: "coefficient random range for media order",
    value: "coefficient_random_range_for_media_order",
    scenario: "auto",
    type:'array'
  },
  {
    label: "تعداد سفارشات رسانه",
    name: "count of media orders",
    value: "count_of_media_orders",
    scenario: "auto",
    type:'number'
  },
  {
    label: "مقدار فاصله برای بروزرسانی سفارشات رسانه(آرایه)",
    name: "condition amount distance for update media orders",
    value: "condition_amount_distance_for_update_media_orders",
    scenario: "auto",
    type:'number'
  },
  {
    label: "حداکثر حجم تهاجمی",
    name: "max bucket",
    value: "max_bucket",
    scenario: "auto",
    type:'number'
  },
  {
    label: "زمان تنفس",
    name: "waiting time",
    value: "waiting_time",
    scenario: "auto",
    type:'number'
  },
  {
    label: "درصد مورد نیاز برای ایجاد پله",
    name: "percentage threshold",
    value: "percentage_threshold",
    scenario: "auto",
    type:'array'
  },
  {
    label: "اختلاف قیمت بالاتر از پله",
    name: "higher price amount",
    value: "higher_price_amount",
    scenario: "auto",
    type:'number'
  },
  {
    label: "ضریب تصادفی برای سفارشات جان‌نثار(آرایه)",
    name: "coefficient random for spread orders",
    value: "coefficient_random_for_spread_orders",
    scenario: "auto",
    type:'array'
  },
  {
    label: "تیک‌سایز سفارشات جان‌نثار(آرایه)",
    name: "spread orders take size",
    value: "spread_orders_take_size",
    scenario: "auto",
    type:'array'
  },
];
