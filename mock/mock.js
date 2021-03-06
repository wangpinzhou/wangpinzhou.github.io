Mock.mock(/table\.json/, {
  "status": "success",
  "msg": "msg",
  "data": {
    "skuList": {
      "pageCount": 1,
      "rowList|10-30": [{
        "id": '@id',
        "cword": '@cword(2,3)',
        "date": '@date()',
        "img": Mock.Random.image(),
        "sku|1": [111, 222, 333, 444, 555,666,777,888,999 ],
        "color|1": ['黑色', '白色', '蓝色', '红色'],
        "size|1": ['S', "M", "L", "XL", "XXL", "XXXL", "XXXXL", "XXXXXL", '均码'],
        "qty1|-100-100": (-100, 100),
        "qty2|1-100": (1, 100),
        "qty3|1-100": (1, 100),
        "price|10-20": 10,
      },
      ]
    }
  }
})