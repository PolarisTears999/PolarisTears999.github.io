# 插件列表

[插件大全](https://github.com/docsifyjs/awesome-docsify?tab=readme-ov-file)

## 全文搜索-Search 

全文搜索插件会根据当前页面上的超链接获取文档内容，在 localStorage 内建立文档索引。默认过期时间为一天，当然我们可以自己指定需要缓存的文件列表或者配置过期时间。

```html
<script>
  window.$docsify = {
    search: 'auto', // 默认值

    search : [
      '/',            // => /README.md
      '/guide',       // => /guide.md
      '/get-started', // => /get-started.md
      '/zh-cn/',      // => /zh-cn/README.md
    ],

    // 完整配置参数
    search: {
      maxAge: 86400000, // 过期时间，单位毫秒，默认一天
      paths: [], // or 'auto'
      placeholder: 'Type to search',

      // 支持本地化
      placeholder: {
        '/zh-cn/': '搜索',
        '/': 'Type to search'
      },

      noData: 'No Results!',

      // 支持本地化
      noData: {
        '/zh-cn/': '找不到结果',
        '/': 'No Results'
      },

      // 搜索标题的最大层级, 1 - 6
      depth: 2,

      hideOtherSidebarContent: false, // 是否隐藏其他侧边栏内容

      // 避免搜索索引冲突
      // 同一域下的多个网站之间
      namespace: 'website-1',

      // 使用不同的索引作为路径前缀（namespaces）
      // 注意：仅适用于 paths: 'auto' 模式
      //
      // 初始化索引时，我们从侧边栏查找第一个路径
      // 如果它与列表中的前缀匹配，我们将切换到相应的索引
      pathNamespaces: ['/zh-cn', '/ru-ru', '/ru-ru/v1'],

      // 您可以提供一个正则表达式来匹配前缀。在这种情况下，
      // 匹配到的字符串将被用来识别索引
      pathNamespaces: /^(\/(zh-cn|ru-ru))?(\/(v1|v2))?/
    }
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>
```

当执行全文搜索时，该插件会忽略双音符（例如，"cafe" 也会匹配 "café"）。像 IE11 这样的旧版浏览器需要使用以下 [String.normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) polyfill 来忽略双音符：

```html
<script src="//polyfill.io/v3/polyfill.min.js?features=String.prototype.normalize"></script>
```



## 集成谷歌统计 

需要配置 track id 才能使用

```html
<script>
  window.$docsify = {
    ga: 'UA-XXXXX-Y'
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/ga.min.js"></script>
```

也可以通过 `data-ga` 配置 id

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js" data-ga="UA-XXXXX-Y"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/ga.min.js"></script>
```



## emoji

默认是提供 emoji 解析的，能将类似 `:100:` 解析成![100](https://github.githubassets.com/images/icons/emoji/unicode/1f4af.png?v8.png)。但是它不是精准的，因为没有处理非 emoji 的字符串。如果你需要正确解析 emoji 字符串，你可以引入这个插件。

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js"></script>
```

```
如果你不想解析成表情符号，可以使用__colon__或&#58;。如果你需要在标题中使用，我们建议使用&#58;。例如，&#58;100:。
```



## 字数统计

这是一款为docsify提供文字统计的插件. [@827652549](https://github.com/827652549)提供

它提供了统计中文汉字和英文单词的功能，并且排除了一些markdown语法的特殊字符例如*、-等

**Add JS**

```html
<script src="//unpkg.com/docsify-count/dist/countable.js"></script>
```

**Add settings**

```javascript
window.$docsify = {
  count:{
    countable:true,
    fontsize:'0.9em',
    color:'rgb(90,90,90)',
    language:'chinese'
  }
}
```



## Tabs

这个插件用来在 Markdown 中显示选项卡。

- [文档和示例](https://jhildenbiddle.github.io/docsify-tabs)

开发：[@jhildenbiddle](https://github.com/jhildenbiddle/docsify-tabs).

**Add JS**

```html
<!-- docsify (latest v4.x.x)-->
<script src="https://cdn.jsdelivr.net/npm/docsify@4"></script>

<!-- docsify-tabs (latest v1.x.x) -->
<script src="https://cdn.jsdelivr.net/npm/docsify-tabs@1"></script>
```

**Add settings**

```javascript
window.$docsify = {
  // ...
  tabs: {
    persist: true, // default
    sync: true, // default
    theme: 'classic', // default
    tabComments: true, // default
    tabHeadings: true // default
  }
};
```

查看[自定义](https://jhildenbiddle.github.io/docsify-tabs/#/?id=customization)部分并根据需要设置主题属性

```html
<style>
  :root {
    --docsifytabs-border-color: #ededed;
    --docsifytabs-tab-highlight-color: purple;
  }
</style>
```

**简要用法-非全**

1.`tabs:start`使用 HTML注释定义标签集`tabs:end`

HTML 注释用于标记标签集的开始和结束。使用 HTML 注释可防止在 docsify 网站（例如 GitHub、GitLab 等）之外将 markdown 呈现为 HTML 时显示与标签相关的标记。

```markdown
<!-- tabs:start -->

...

<!-- tabs:end -->
```

2.使用标题 + 粗体标记定义选项卡集中的选项卡

标题文本将用作选项卡标签，并且所有后续内容都将与该选项卡相关联，直到下一个选项卡或注释的开始`tab:end`。使用标题 + 粗体 markdown 允许使用标准 markdown 定义选项卡，并确保在 docsify 网站（例如 GitHub、GitLab 等）之外呈现时，选项卡内容会显示标题。

```markdown
<!-- tabs:start -->

#### **English**

Hello!

#### **French**

Bonjour!

#### **Italian**

Ciao!

<!-- tabs:end -->
```

[`options.tabHeadings`](https://jhildenbiddle.github.io/docsify-tabs/#/?id=tabheadings)有关详细信息或[`options.tabComments`](https://jhildenbiddle.github.io/docsify-tabs/#/?id=tabcomments)使用 HTML 注释定义选项卡的替代方法，请参阅。

3.瞧！标签集已形成

<!-- tabs:start -->

#### **English**

Hello!

#### **French**

Bonjour!

#### **Italian**

Ciao!

<!-- tabs:end -->

**选项**

[`window.$docsify`](https://docsify.js.org/#/configuration)选项在配置中的以下键下设置`tabs`：

```html
<script>
  window.$docsify = {
    // ...
    tabs: {
      persist: true, // default
      sync: true, // default
      theme: 'classic', // default
      tabComments: true, // default
      tabHeadings: true // default
    }
  };
</script>
```

**persist**

- 类型：`boolean`
- 默认：`true`

确定页面刷新/重新访问后是否恢复选项卡选择

**sync**

- 类型：`boolean`
- 默认：`true`

确定选项卡选择是否将在具有匹配标签的选项卡之间同步

**演示**

<!-- tabs:start -->

#### **English**

Hello!

#### **French**

Bonjour!

#### **Italian**

Ciao!

<!-- tabs:end -->

<!-- tabs:start -->

#### **English**

Hello!

#### **French**

Bonjour!

#### **Italian**

Ciao!

<!-- tabs:end -->

**主题**

- 类型：`string|boolean`
- 接受：`'classic'`，`'material'`,`'false'`
- 默认：`'classic'`

设置选项卡主题。值为`false`表示不应应用任何主题，应在创建自定义选项卡主题时使用该主题

**配置**

```javascript
window.$docsify = {
  // ...
  tabs: {
    theme: 'classic' // default
  }
};
```

**演示**

-待展示

## alerts

- [文档和示例](https://github.com/fzankl/docsify-plugin-flexible-alerts)

**简要用法-非全**

**Add JS**

```html
<script src="https://unpkg.com/docsify-plugin-flexible-alerts"></script>
```

**Add setting**

```javascript
window.$docsify ={
// note tip warning attention https://github.com/fzankl/docsify-plugin-flexible-alerts
	'flexible-alerts':{
		style: 'callout'
	},
}
```

**演示**

> [!TIP]
>
> An alert of type 'tip' using global style 'callout'.

> [!NOTE]
>
> An alert of type 'note' using global style 'callout'.

> [!WARNING]
>
> An alert of typee 'warning' using global style 'callout'.

> [!ATTENTION]
>
> An alert of typee'attention' using global style'callout'.



## 最近更新记录

**Add JS**

```html
<script src="https://cdn.jsdelivr.net/npm/docsify-updated/src/time-updater.min.js"></script>
```

**Add setting**

```javascript
window.$docsify ={
	timeUpdater:{
	  text:"<div align='right'Iwidth='100%'style='color:gray;font-size:16px;margin-top:10px;'>最后更新时间:{docsify-updated}</div>",formatUpdated:"{YYYY}-{MM}-{DD} {HH}:{mm}",
		},
}
```



##  进度条美化

**Add JS**

```html
<script src=https://cdn.jsdelivr.net/npm/docsify-progress@latest/dist/progress.min.js"></script>
```

**Add setting**

```javascript
window.$docsify = {
	progress:{
	  position: "top"
	  color: "var(--theme-color,#42b983)",
	  height: "3px",
	},
}
```



## 回到顶部

**Add JS**

```html
<scriptsrc="https://cdn.jsdelivr.net/gh/Sumsung524/docsify-backTop/dist/docsify-backTop.min.js"></script>
```

**Add setting**

```javascript
window.$docsify = {
    docsifyBackTop:{
    	size: 32, //数值，组件大小，默认值32。
    	bottom: 15, //数值，组件底部偏移距离，默认值15。
    	right: 15, //数值，组件右侧偏移距离，默认值15。
    	logo: 'top', //logo：字符串或svg矢量图代码，默认为svg代码图标。
    	bgColor:'#42b983' //背景颜色，#fff、pink等，logo为svg图标时，不填。
	},
}
```



## 集成百度统计

[视频演示地址](https://www.bilibili.com/video/BV1RD4y1H7su/?spm_id_from=333.788&vd_source=db084a4b1b64e35014e5bbba75a5dacd)

**Add JS**

```javascript
<script>
    var _hmt = _hmt ll [];
	(function() {
        var host = window.location.host;
        if(host.startswith("localhost") Il host.startswith("127.0.0.1")){
            return ;
        }
        var hm = document.createElement("script");
        hm.Src ="https://hm.baidu.com/hm.js?17b94311795f1539081c4a0a0f14d4fb";
        var S = document.getElementsByTagName("script")[0];
        S.parentNode.insertBefore(hm, s);
	})();
<script>
```

> [!TIP]
>
> 需要进入百度一站式智能数据分析与应用平台进行配置：https://tm.baidu.com/web5/welcome/login



## 显示文章右侧目录1

**Add JS**

```html
<link rel="stylesheet"href="https://unpkg.com/docsify-toc@1.0.0/dist/toc.css">
<script src="https://unpkg.com/docsify-toc@1.0.0/dist/toc.js"></script>
```

**Add setting**

```javascript
toc:{
    scope: '.markdown-section',
    headings: 'h1, h2, h3, h4, h5, h6',
    title: '目录',
},
```



## 显示文章右侧目录2

> [!TIP] 推荐使用此右侧目录

**Add JS**

```html
<link rel="stylesheet" href="https://unpkg.com/docsify-plugin-toc@1.3.1/dist/light.css">
<script src="https://unpkg.com/docsify-plugin-toc@1.3.1/dist/docsify-plugin-toc.min.js"></script>
```

**Add setting**

```javascript
toc:{
    tocMaxLevel:5,
    target:'h2,h3，h4，h5,h6',
    ignoreHeaders::['<!--{docsify-ignore} -->','<!-- {docsify-ignore-all} -->']
}
```



## 集成Gitalk评论

[参考链接](https://www.bilibili.com/video/BV1XA411z7Xo/?p=12&spm_id_from=pageDriver)

[处理toc与Gitalk的样式兼容问题](https://www.bilibili.com/video/BV1BM411e7rK/?spm_id_from=333.788&vd_source=db084a4b1b64e35014e5bbba75a5dacd)



## 英文自动加空格

[依赖插件 docsify-pangu](https://github.com/sy-records/docsify-pangu)

```html
<script src="//cdn.jsdelivr.net/npm/docsify-pangu/lib/pangu.min.js"></script>
```

