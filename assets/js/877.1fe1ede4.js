(window.webpackJsonp=window.webpackJsonp||[]).push([[877],{1385:function(s,a,t){"use strict";t.r(a);var e=t(34),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"处理表格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理表格"}},[s._v("#")]),s._v(" 处理表格")]),s._v(" "),t("p",[s._v("在 Nu 中查看数据的一种常见方式是通过表格。Nu 提供了许多处理表格的命令以方便找到你想要的内容以及将数据缩小到你需要的范围。")]),s._v(" "),t("p",[s._v("首先，让我们获得一个可用的表：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> ls\n───┬───────────────┬──────┬─────────┬────────────\n # │ name          │ type │ size    │ modified\n───┼───────────────┼──────┼─────────┼────────────\n 0 │ files.rs      │ File │  4.6 KB │ 5 days ago\n 1 │ lib.rs        │ File │   330 B │ 5 days ago\n 2 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago\n 3 │ parse.rs      │ File │ 49.8 KB │ 1 day ago\n 4 │ path.rs       │ File │  2.1 KB │ 5 days ago\n 5 │ shapes.rs     │ File │  4.7 KB │ 5 days ago\n 6 │ signature.rs  │ File │  1.2 KB │ 5 days ago\n───┴───────────────┴──────┴─────────┴────────────\n")])])]),t("h2",{attrs:{id:"排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[s._v("#")]),s._v(" 排序")]),s._v(" "),t("p",[s._v("我们可以通过调用"),t("RouterLink",{attrs:{to:"/book/commands/sort-by.html"}},[t("code",[s._v("sort-by")])]),s._v("命令对一个表进行排序，并指定需要排序的列。比如，按照文件的大小对表格进行排序：")],1),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> ls | sort-by size\n───┬───────────────┬──────┬─────────┬────────────\n # │ name          │ type │ size    │ modified\n───┼───────────────┼──────┼─────────┼────────────\n 0 │ lib.rs        │ File │   330 B │ 5 days ago\n 1 │ signature.rs  │ File │  1.2 KB │ 5 days ago\n 2 │ path.rs       │ File │  2.1 KB │ 5 days ago\n 3 │ files.rs      │ File │  4.6 KB │ 5 days ago\n 4 │ shapes.rs     │ File │  4.7 KB │ 5 days ago\n 5 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago\n 6 │ parse.rs      │ File │ 49.8 KB │ 1 day ago\n───┴───────────────┴──────┴─────────┴────────────\n")])])]),t("p",[s._v('我们可以通过任何可以比较的列来对一个表进行排序。例如，我们也可以用 "name", "accessed" 或者 "modified" 列对上述内容进行排序。')]),s._v(" "),t("h2",{attrs:{id:"选取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选取"}},[s._v("#")]),s._v(" 选取")]),s._v(" "),t("p",[s._v("我们可以从表中通过选择特定的列或行来获得数据。让我们从表中选择（"),t("RouterLink",{attrs:{to:"/book/commands/select.html"}},[t("code",[s._v("select")])]),s._v("）几列吧：")],1),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> ls | select name size\n───┬───────────────┬─────────\n # │ name          │ size\n───┼───────────────┼─────────\n 0 │ files.rs      │  4.6 KB\n 1 │ lib.rs        │   330 B\n 2 │ lite_parse.rs │  6.3 KB\n 3 │ parse.rs      │ 49.8 KB\n 4 │ path.rs       │  2.1 KB\n 5 │ shapes.rs     │  4.7 KB\n 6 │ signature.rs  │  1.2 KB\n───┴───────────────┴─────────\n")])])]),t("p",[s._v("这有助于创建一个更专注于我们所需的表格。接下来，假设我们只想看这个目录中最小的 5 个文件：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> ls | sort-by size | first 5\n───┬──────────────┬──────┬────────┬────────────\n # │ name         │ type │ size   │ modified\n───┼──────────────┼──────┼────────┼────────────\n 0 │ lib.rs       │ File │  330 B │ 5 days ago\n 1 │ signature.rs │ File │ 1.2 KB │ 5 days ago\n 2 │ path.rs      │ File │ 2.1 KB │ 5 days ago\n 3 │ files.rs     │ File │ 4.6 KB │ 5 days ago\n 4 │ shapes.rs    │ File │ 4.7 KB │ 5 days ago\n───┴──────────────┴──────┴────────┴────────────\n")])])]),t("p",[s._v("你会注意到我们首先按大小对表进行排序以得到最小的文件，然后我们用"),t("code",[s._v("first 5")]),s._v("来返回表的前 5 行。")]),s._v(" "),t("p",[s._v("你也可以跳过("),t("code",[s._v("skip")]),s._v(")不需要的行，让我们跳过上面所得 5 行中的前两行：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> ls | sort-by size | first 5 | skip 2\n───┬───────────┬──────┬────────┬────────────\n # │ name      │ type │ size   │ modified\n───┼───────────┼──────┼────────┼────────────\n 0 │ path.rs   │ File │ 2.1 KB │ 5 days ago\n 1 │ files.rs  │ File │ 4.6 KB │ 5 days ago\n 2 │ shapes.rs │ File │ 4.7 KB │ 5 days ago\n───┴───────────┴──────┴────────┴────────────\n")])])]),t("p",[s._v("我们已将其缩小为我们关心的三行。")]),s._v(" "),t("p",[s._v("让我们看看其他几个用于选择数据的命令。您可能想知道为什么选取表格的行是通过数字，这是选择单行数据的便捷方式。让我们按文件名对表进行排序，然后使用 "),t("code",[s._v("select")]),s._v(" 命令通过行号来选择其中的一行：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> ls | sort-by name\n───┬───────────────┬──────┬─────────┬────────────\n # │ name          │ type │ size    │ modified\n───┼───────────────┼──────┼─────────┼────────────\n 0 │ files.rs      │ File │  4.6 KB │ 5 days ago\n 1 │ lib.rs        │ File │   330 B │ 5 days ago\n 2 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago\n 3 │ parse.rs      │ File │ 49.8 KB │ 1 day ago\n 4 │ path.rs       │ File │  2.1 KB │ 5 days ago\n 5 │ shapes.rs     │ File │  4.7 KB │ 5 days ago\n 6 │ signature.rs  │ File │  1.2 KB │ 5 days ago\n───┴───────────────┴──────┴─────────┴────────────\n\n> ls | sort-by name | select 5\n───┬───────────────┬──────┬─────────┬────────────\n # │ name          │ type │ size    │ modified\n───┼───────────────┼──────┼─────────┼────────────\n 0 │ shapes.rs     │ File │  4.7 KB │ 5 days ago\n───┴───────────────┴──────┴─────────┴────────────\n")])])]),t("h2",{attrs:{id:"从表格提取数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从表格提取数据"}},[s._v("#")]),s._v(" 从表格提取数据")]),s._v(" "),t("p",[s._v("到目前为止，我们在处理表格时都是将表格修剪成我们需要的样子。有时我们可能想更进一步，只看单元格本身的值，而不是取整列。比如，我们只想得到一个包含所有文件名的列表。在此，我们使用"),t("RouterLink",{attrs:{to:"/book/commands/get.html"}},[t("code",[s._v("get")])]),s._v(" 命令：")],1),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> ls | get name\n───┬───────────────\n 0 │ files.rs\n 1 │ lib.rs\n 2 │ lite_parse.rs\n 3 │ parse.rs\n 4 │ path.rs\n 5 │ shapes.rs\n 6 │ signature.rs\n───┴───────────────\n")])])]),t("p",[s._v("现在我们获得了每一个文件的文件名。")]),s._v(" "),t("p",[s._v("这可能看起来很像我们之前使用的"),t("RouterLink",{attrs:{to:"/book/commands/select.html"}},[t("code",[s._v("select")])]),s._v("命令，所以也把它放在这里以便于比较：")],1),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> ls | select name\n───┬───────────────\n # │ name\n───┼───────────────\n 0 │ files.rs\n 1 │ lib.rs\n 2 │ lite_parse.rs\n 3 │ parse.rs\n 4 │ path.rs\n 5 │ shapes.rs\n 6 │ signature.rs\n───┴───────────────\n")])])]),t("p",[s._v("这看起来非常相似！让我们看看能不能把这两个命令的区别说清楚：")]),s._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/book/commands/select.html"}},[t("code",[s._v("select")])]),s._v(" - 创建一个只包括指定列的新表；")],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/book/commands/get.html"}},[t("code",[s._v("get")])]),s._v(" - 以列表形式返回指定列内的值；")],1)]),s._v(" "),t("p",[s._v("区分这些表格的方法是 —— 列名没有了，也让我们知道这是一个我们可以处理的值的列表。")]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/book/commands/get.html"}},[t("code",[s._v("get")])]),s._v("命令可以更进一步，它可以接受表中更深的数据路径。这简化了对复杂数据的处理，比如那些你可能在.json 文件中发现的结构。")],1),s._v(" "),t("h2",{attrs:{id:"修改表格数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改表格数据"}},[s._v("#")]),s._v(" 修改表格数据")]),s._v(" "),t("p",[s._v("除了从表中选择数据外，还可以更新其中的数据。我们可能想合并表格，添加新的列，或编辑单元格的内容等。在 Nushell 中，本节中的每个命令都会在管道中返回一个新的表而非对原表进行编辑。")]),s._v(" "),t("h3",{attrs:{id:"拼接表格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拼接表格"}},[s._v("#")]),s._v(" 拼接表格")]),s._v(" "),t("p",[s._v("我们可以使用"),t("RouterLink",{attrs:{to:"/book/commands/append.html"}},[t("code",[s._v("append")])]),s._v("将列名相同的表拼接起来：")],1),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> let $first = [[a b]; [1 2]]\n> let $second = [[a b]; [3 4]]\n> $first | append $second\n───┬───┬───\n # │ a │ b\n───┼───┼───\n 0 │ 1 │ 2\n 1 │ 3 │ 4\n───┴───┴───\n")])])]),t("h3",{attrs:{id:"合并表格"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并表格"}},[s._v("#")]),s._v(" 合并表格")]),s._v(" "),t("p",[s._v("我们可以使用"),t("RouterLink",{attrs:{to:"/book/commands/merge.html"}},[t("code",[s._v("merge")])]),s._v("命令将两个（或多个）表格合并在一起：")],1),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$first")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("a b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$second")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$first")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$second")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n───┬───┬───┬───┬───\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ a │ b │ c │ d")]),s._v("\n───┼───┼───┼───┼───\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n───┴───┴───┴───┴───\n")])])]),t("p",[s._v("让我们再加一个表格吧：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$third")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("e f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("我们可以将以上三个表格合并在一起，操作如下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$first")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$second")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$third")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n───┬───┬───┬───┬───┬───┬───\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ a │ b │ c │ d │ e │ f")]),s._v("\n───┼───┼───┼───┼───┼───┼───\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n───┴───┴───┴───┴───┴───┴───\n")])])]),t("p",[s._v("或者我们可以使用"),t("RouterLink",{attrs:{to:"/book/commands/reduce.html"}},[t("code",[s._v("reduce")])]),s._v("命令来动态地合并所有的表格：")],1),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$first")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$second")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$third")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" reduce "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("it, acc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$acc")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$it")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n───┬───┬───┬───┬───┬───┬───\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ a │ b │ c │ d │ e │ f")]),s._v("\n───┼───┼───┼───┼───┼───┼───\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n───┴───┴───┴───┴───┴───┴───\n")])])]),t("h3",{attrs:{id:"添加新列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加新列"}},[s._v("#")]),s._v(" 添加新列")]),s._v(" "),t("p",[s._v("我们可以使用"),t("RouterLink",{attrs:{to:"/book/commands/insert.html"}},[t("code",[s._v("insert")])]),s._v("命令在表中增加新列，让我们看一个例子：")],1),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> open rustfmt.toml\n─────────┬──────\n edition │ 2018\n─────────┴──────\n")])])]),t("p",[s._v('让我们添加一个名为 "next_edition" 的列并将 2021 作为值：')]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> open rustfmt.toml | insert next_edition 2021\n──────────────┬──────\n edition      │ 2018\n next_edition │ 2021\n──────────────┴──────\n")])])]),t("p",[s._v("注意，我们如果打开原始文件，会发现内容没变：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> open rustfmt.toml\n─────────┬──────\n edition │ 2018\n─────────┴──────\n")])])]),t("p",[s._v("Nu 的更改是函数性更改，这意味着它们只在值上起作用，而不是试图引起永久性变更。这使我们可以在管道中进行许多不同类型的操作直到我们准备好将结果输出(如果我们选择这样做的话)。这里我们可以使用 "),t("RouterLink",{attrs:{to:"/book/commands/save.html"}},[t("code",[s._v("save")])]),s._v(" 命令保存结果：")],1),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> open rustfmt.toml | insert next_edition 2021 | save rustfmt2.toml\n> open rustfmt2.toml\n──────────────┬──────\n edition      │ 2018\n next_edition │ 2021\n──────────────┴──────\n")])])]),t("h3",{attrs:{id:"更新一列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新一列"}},[s._v("#")]),s._v(" 更新一列")]),s._v(" "),t("p",[s._v("与"),t("RouterLink",{attrs:{to:"/book/commands/insert.html"}},[t("code",[s._v("insert")])]),s._v("命令类似，我们也可以使用"),t("RouterLink",{attrs:{to:"/book/commands/update.html"}},[t("code",[s._v("update")])]),s._v("命令将某一列的内容修改为新值。为了看看效果，让我们打开同一个文件：")],1),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> open rustfmt.toml\n─────────┬──────\n edition │ 2018\n─────────┴──────\n")])])]),t("p",[s._v("现在，用我们希望支持的下一个版本更新 edition：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> open rustfmt.toml | update edition 2021\n─────────┬──────\n edition │ 2021\n─────────┴──────\n")])])]),t("p",[s._v("你也可以使用"),t("RouterLink",{attrs:{to:"/book/commands/upsert.html"}},[t("code",[s._v("upsert")])]),s._v("命令来插入或更新，这取决于该列是否已经存在。")],1),s._v(" "),t("h3",{attrs:{id:"移动列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动列"}},[s._v("#")]),s._v(" 移动列")]),s._v(" "),t("p",[s._v("你可以使用"),t("code",[s._v("move")]),s._v("来移动表中的列。例如，如果想把"),t("code",[s._v("ls")]),s._v('中的 "name" 列移到 "size" 列之后，我们可以这样做：')]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> ls | move name --after size\n╭────┬──────┬─────────┬───────────────────┬──────────────╮\n│ #  │ type │  size   │       name        │   modified   │\n├────┼──────┼─────────┼───────────────────┼──────────────┤\n│  0 │ dir  │   256 B │ Applications      │ 3 days ago   │\n│  1 │ dir  │   256 B │ Data              │ 2 weeks ago  │\n│  2 │ dir  │   448 B │ Desktop           │ 2 hours ago  │\n│  3 │ dir  │   192 B │ Disks             │ a week ago   │\n│  4 │ dir  │   416 B │ Documents         │ 4 days ago   │\n...\n")])])]),t("h3",{attrs:{id:"重命名列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重命名列"}},[s._v("#")]),s._v(" 重命名列")]),s._v(" "),t("p",[s._v("你也可以通过"),t("code",[s._v("rename")]),s._v("命令对表中的列进行"),t("strong",[s._v("重命名")]),s._v("。我们可以使用这个例子来运行"),t("code",[s._v("ls")]),s._v("并重命名这些列：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> ls | rename filename filetype filesize date\n╭────┬───────────────────┬──────────┬──────────┬──────────────╮\n│ #  │     filename      │ filetype │ filesize │     date     │\n├────┼───────────────────┼──────────┼──────────┼──────────────┤\n│  0 │ Applications      │ dir      │    256 B │ 3 days ago   │\n│  1 │ Data              │ dir      │    256 B │ 2 weeks ago  │\n│  2 │ Desktop           │ dir      │    448 B │ 2 hours ago  │\n│  3 │ Disks             │ dir      │    192 B │ a week ago   │\n│  4 │ Documents         │ dir      │    416 B │ 4 days ago   │\n...\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);