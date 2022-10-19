var rule={
    title:'厂长资源',
    host:'https://www.czspp.com',
    url:'/fyclass/page/fypage',
    searchUrl:'/xssearch?q=**&f=_all&p=fypage',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{'User-Agent':'UC_UA', },
    play_parse:true,
    lazy:'',
    limit:6,
    class_name:'豆瓣电影Top250&最新电影&电视剧&国产剧&美剧&韩剧&番剧&动漫',
    class_url:'dbtop250&zuixindianying&dsj&gcj&meijutt&hanjutv&fanju&dm',
    推荐:'.bt_img;ul&&li;*;*;*;*',
    double:true,
    一级:'.bt_img&&ul&&li;h3.dytit&&Text;img.lazy&&data-original;.jidi&&Text;a&&href',
    二级:{"title":"h1&&Text;.moviedteail_list li&&a&&Text","img":"div.dyimg img&&src","desc":".moviedteail_list li:eq(3) a&&Text;.moviedteail_list li:eq(2) a&&Text;.moviedteail_list li:eq(1) a&&Text;.moviedteail_list li:eq(7) a&&Text;.moviedteail_list li:eq(5) a&&Text","content":".yp_context&&Text","tabs":".mi_paly_box&&span","lists":".paly_list_btn:eq(#id) a"},
    搜索:'.search_list&&ul&&li;*;*;*;*',
}
