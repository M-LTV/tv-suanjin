var rule = Object.assign(muban.mxpro,{
title:'cokemv',
host:'https://cokemv.me',
url:'/index.php/vod/show/id/fypage.html',
class_parse:'.navbar-items li:gt(1):lt(7);a&&Text;a&&href;/(\\d+).html',
});
