@AGENTS.md
Prompt Engineering for AI Guide: https://cloud.google.com/discover/what-is-prompt-engineering
Prompt Engineering for AI Guide:viết prompt để rende design

steak AI renden promt
Các bạn dùng react, nextjs thì dùng Redux tookit/ RTK query/ Tankstack Query để quản lý state cho các API như list post, prodct... nha

# GrapSQL Strapi
```text
 khi tạo component vd: coponent có tên là 'heading'

 sử dụng coponent trong từ block đặt trùng tên là headingBlock
    block 1: chọn coponent heading với repeater
    block 2: chọn coponent heading với singer

=> lỗi grapSQL vì sql không phân biệt được các kiểu dữ kiệu khác nhau khi trùng tên , cùng dùng component chung
```
###  cài đặt grap sql và bật cho nó chạy
```text
*/ lệnh cài đặt : */
npm install @strapi/plugin-graphql

*/ cấu hình chạy grapsql: vào config/plugin  */
    graphql: {
        enabled: true,
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: true, // truy cập thành công trên server thật.
            depthLimit: 10,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
                introspection: true,//bật menu trên grapsql (dùng thì bật, chạy dự án thật tắt đi tránh lỗ hỏng)
            },
        }
    }
```