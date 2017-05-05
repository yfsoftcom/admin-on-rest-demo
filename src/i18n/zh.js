export default {
    aor: {
        action: {
            delete: "删除",
            show: "显示",
            list: "列表",
            save: "保存",
            create: "创建",
            edit: "编辑",
            cancel: "取消",
            refresh: "刷新",
            add_filter: "筛选",
            remove_filter: "取消删选"
        },
        boolean: {
            true: "Yes",
            false: "No"
        },
        page: {
            list: "%{name} 列表",
            edit: "%{name} #%{id}",
            show: "%{name} #%{id}",
            create: "创建 %{name}",
            delete: "删除 %{name} #%{id}",
            dashboard: "仪表板"
        },
        input: {
            image: {
                upload_several: "点击上传多张图片",
                upload_single: "点击上传单张图片"
            }
        },
        message: {
            yes: "Yes",
            no: "No",
            are_you_sure: "确定执行该操作么 ?",
            about: "提示"
        },
        navigation: {
            no_results: "> <! 没有相关数据",
            page_out_of_boundaries: "Page number %{page} out of boundaries",
            page_out_from_end: "Cannot go after last page",
            page_out_from_begin: "Cannot go before page 1",
            page_range_info: "%{offsetBegin}-%{offsetEnd} of %{total}",
            next: "下一页",
            prev: "上一页"
        },
        auth: {
            username: "用户名",
            password: "密码",
            sign_in: "登录",
            sign_in_error: "登录错误，请重试",
            logout: "注销"
        },
        notification: {
            updated: "Element updated",
            created: "Element created",
            deleted: "Element deleted",
            item_doesnt_exist: "Element does not exist",
            http_error: "Server communication error"
        },
        validation: {
            required: "不能为空",
            minLength: "最少 %{min} 位字符",
            maxLength: "最多 %{max} 位字符",
            minValue: "不得小于 %{min}",
            maxValue: "不得大于 %{max}",
            number: "必须是数字",
            email: "必须是合法的邮箱地址"
        }
    },
    pos: {
        search: '搜索',
        configuration: '设置',
        language: '语言',
        theme: {
            name: '主题',
            light: '亮色',
            dark: '深色',
        },
        dashboard: {
            monthly_revenue: '月销售',
            new_orders: '新订单',
            pending_reviews: '新评价',
            new_customers: '新用户',
            pending_orders: '进行中的订单',
            order: {
                items: 'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: '欢迎使用',
                subtitle: 'FPM通用后台.',
                aor_button: 'Admin-on-rest website',
                demo_button: 'Source for this demo',
            },
        },
    },
    resources: {
        customers: {
            name: '用户 |||| Customers',
            fields: {
                commands: '订单',
                groups: '分组',
                last_seen_gte: '上次登录时间',
                name: '姓名',
            },
            tabs: {
                identity: 'ID',
                address: '地址',
                orders: '订单',
                reviews: '评价',
                stats: '状态',
            },
            page: {
                delete: '删除用户信息',
            },

        },
        commands: {
            name: '订单 |||| 订单',
            fields: {
                basket: {
                    delivery: '收货地址',
                    reference: '商品',
                    quantity: '数量',
                    sum: '总数量',
                    tax_rate: '邮费',
                    total: '总价',
                    unit_price: '单价',
                },
                customer_id: 'Customer',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
            },
        },
        products: {
            name: '产品 |||| Posters',
            fields: {
                category_id: '分类',
                height_gte: 'Min height',
                height_lte: 'Max height',
                height: '高度',
                image: '图片',
                price: '价格',
                reference: 'Reference',
                stock_lte: '最小库存量',
                stock: '库存',
                thumbnail: '缩略图',
                width_gte: '最小宽度',
                width_lte: '最大宽度',
                width: '宽度',
            },
            tabs: {
                image: '图片',
                details: '细节',
                description: '详情',
                reviews: '评价',
            },
        },
        categories: {
            name: '分类 |||| Categories',
            fields: {
                products: 'Products',
            },

        },
        reviews: {
            name: '评价 |||| Reviews',
            fields: {
                customer_id: 'Customer',
                command_id: 'Order',
                product_id: 'Product',
                date_gte: 'Posted since',
                date_lte: 'Posted before',
                date: 'Date',
                comment: 'Comment',
                rating: 'Rating',
            },
            action: {
                accept: '通过',
                reject: '不通过',
            },
            notification: {
                approved_success: 'Review approved',
                approved_error: 'Error: Review not approved',
                rejected_success: 'Review rejected',
                rejected_error: 'Error: Review not rejected',
            },
        },
        segments: {
            name: '分组',
            fields: {
                customers: '用户',
                name: '名称',
            },
            data: {
                compulsive: 'Compulsive',
                collector: 'Collector',
                ordered_once: 'Ordered once',
                regular: 'Regular',
                returns: 'Returns',
                reviewer: 'Reviewer',
            },
        },
    },
};
