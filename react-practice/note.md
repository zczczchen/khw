https://www-sandbox.thekono.com/magazines/golf_digest
425 / 1024
一行 3 個 / 一行 4 個 / 一行 6 個
左右 12px
上下 20px
img 150\*202
url： /magazines/golf_digest

用這兩支 api，會用到 fetch 裡面的 GET
先 call 第一支，拿到月份後
再 call 第二支拿到 issue 名稱和 cover url
title id 就是 golf_digest

base_url
https://api-sandbox.thekono.com/KPI2

https://api-sandbox.thekono.com/KPI2/titles/golf_digest/years

Get all issues published year
URL: {base_url}/titles/:title_id/years
Method: GET
Parameters: none
Response:
[
{
"year": 2012
},
{
"year": 2013
},
{
"year": 2014
},
{
"year": 2015
},
{
"year": 2016
}
]

https://api-sandbox.thekono.com/KPI2/titles/golf_digest/years/2014/magazines

Get issues in a year
URL: {base_url}/titles/:title_id/years/:year/magazines
Method: GET
Parameters:
[accept_webp]: Set this to 1 to let server know WebP is supported.
Response:
[
{
"title": "vogue",
"bid": "53991490214f2",
"published_date": 1402541604,
"published_at": 1402541604,
"issue": "2014/6 月號 第 213 期",
"is_new": true,
"available_from": 0,
"available_to": 2147483647,
"has_pdf": true,
"has_fit_reading": false,
"description": "郭雪芙出乎意料地獨立，那些一個人長大、沒辦法向父母撒嬌的歲月，成就了早熟的堅強，她對我們暢談心事，對家庭的渴望。",
"off_shelf_at": null,
"has_audio": false,
"has_video": false,
"has_translation": false,
"is_adult": false,
"is_left_flip": false,
"cover_version": 0,
"year": 2014,
"name": "VOGUE",
"covers": {
"large": {
"url": "https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/53991490214f2/1200/0.jpg"
},
"medium": {
"url": "https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/53991490214f2/700/0.jpg"
},
"small": {
"url": "https://d3w00ymmd8grqf.cloudfront.net/magazine_covers/53991490214f2/300/0.jpg"
}
}
}
]

components 僅用於單一頁面
ex.magazine 頁面中的 issue

建議作法
把 magazine 獨立成一個資料夾
-> Magazine.jsx 設成 index.jsx
-> Issue.jsx 放到 magazine 中的 components 資料夾

/pages/magazine/index.jsx
/pages/magazine/components/Issue.jsx
