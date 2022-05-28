#!/bin/python3
import pandas

### 定義寫入數據的函數
csv_path = '../DB/now_data.csv'

### 向browser輸出json
print("Content-type:application/json")
print()
data = pandas.read_csv(csv_path,encoding='UTF-8')
print(data.to_json(orient='records',force_ascii=False))

