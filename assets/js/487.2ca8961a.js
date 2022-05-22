(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{1e3:function(t,e,s){"use strict";s.r(e);var a=s(35),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),s("h3",{attrs:{id:"fetching-json-from-a-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetching-json-from-a-url"}},[t._v("#")]),t._v(" Fetching JSON from a url")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fetch https://jsonplaceholder.typicode.com/posts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" first "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),s("p",[t._v("Output")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("━━━┯━━━━━━━━┯━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n # │ userId │ id │ title                                                   │ body\n───┼────────┼────┼─────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────\n 0 │      1 │  1 │ sunt aut facere repellat provident occaecati excepturi  │ quia et suscipit\n   │        │    │ optio reprehenderit                                     │ suscipit recusandae consequuntur expedita et cum\n   │        │    │                                                         │ reprehenderit molestiae ut ut quas totam\n   │        │    │                                                         │ nostrum rerum est autem sunt rem eveniet architecto\n 1 │      1 │  2 │ qui est esse                                            │ est rerum tempore vitae\n   │        │    │                                                         │ sequi sint nihil reprehenderit dolor beatae ea dolores\n   │        │    │                                                         │ neque\n   │        │    │                                                         │ fugiat blanditiis voluptate porro vel nihil molestiae ut\n   │        │    │                                                         │ reiciendis\n   │        │    │                                                         │ qui aperiam non debitis possimus qui neque nisi nulla\n 2 │      1 │  3 │ ea molestias quasi exercitationem repellat qui ipsa sit │ et iusto sed quo iure\n   │        │    │ aut                                                     │ voluptatem occaecati omnis eligendi aut ad\n   │        │    │                                                         │ voluptatem doloribus vel accusantium quis pariatur\n   │        │    │                                                         │ molestiae porro eius odio et labore et velit aut\n 3 │      1 │  4 │ eum et est occaecati                                    │ ullam et saepe reiciendis voluptatem adipisci\n   │        │    │                                                         │ sit amet autem assumenda provident rerum culpa\n   │        │    │                                                         │ quis hic commodi nesciunt rem tenetur doloremque ipsam\n   │        │    │                                                         │ iure\n   │        │    │                                                         │ quis sunt voluptatem rerum illo velit\n 4 │      1 │  5 │ nesciunt quas odio                                      │ repudiandae veniam quaerat sunt sed\n   │        │    │                                                         │ alias aut fugiat sit autem sed est\n   │        │    │                                                         │ voluptatem omnis possimus esse voluptatibus quis\n   │        │    │                                                         │ est aut tenetur dolor neque\n━━━┷━━━━━━━━┷━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])]),s("hr"),t._v(" "),s("h3",{attrs:{id:"fetch-from-multiple-urls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch-from-multiple-urls"}},[t._v("#")]),t._v(" Fetch from multiple urls")]),t._v(" "),s("p",[t._v("Suppose you are querying several endpoints,\nperhaps with different query parameters and you want to view all the responses as a single dataset.\nYou can make use of "),s("code",[t._v("$it")]),t._v(" to run nu commands on every row of data.")]),t._v(" "),s("p",[t._v("An example JSON file, "),s("code",[t._v("urls.json")]),t._v(", with the following contents:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"urls"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://jsonplaceholder.typicode.com/posts/1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://jsonplaceholder.typicode.com/posts/2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://jsonplaceholder.typicode.com/posts/3"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" urls.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get urls "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" each "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" fetch "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$u")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Output")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("━━━┯━━━━━━━━┯━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n # │ userId │ id │ title                                                   │ body\n───┼────────┼────┼─────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────\n 0 │      1 │  1 │ sunt aut facere repellat provident occaecati excepturi  │ quia et suscipit\n   │        │    │ optio reprehenderit                                     │ suscipit recusandae consequuntur expedita et cum\n   │        │    │                                                         │ reprehenderit molestiae ut ut quas totam\n   │        │    │                                                         │ nostrum rerum est autem sunt rem eveniet architecto\n 1 │      1 │  2 │ qui est esse                                            │ est rerum tempore vitae\n   │        │    │                                                         │ sequi sint nihil reprehenderit dolor beatae ea dolores\n   │        │    │                                                         │ neque\n   │        │    │                                                         │ fugiat blanditiis voluptate porro vel nihil molestiae ut\n   │        │    │                                                         │ reiciendis\n   │        │    │                                                         │ qui aperiam non debitis possimus qui neque nisi nulla\n 2 │      1 │  3 │ ea molestias quasi exercitationem repellat qui ipsa sit │ et iusto sed quo iure\n   │        │    │ aut                                                     │ voluptatem occaecati omnis eligendi aut ad\n   │        │    │                                                         │ voluptatem doloribus vel accusantium quis pariatur\n   │        │    │                                                         │ molestiae porro eius odio et labore et velit aut\n━━━┷━━━━━━━━┷━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])]),s("hr"),t._v(" "),s("p",[t._v("If you specify the "),s("code",[t._v("--raw")]),t._v(" flag, you'll see 3 separate json objects, one in each row.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" urls.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get urls "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" each "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" fetch "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$u")]),t._v(" -r "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Output")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n # │ <value>\n───┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────\n 0 │ {\n   │   "userId": 1,\n   │   "id": 1,\n   │   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n   │   "body": "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum\n   │ rerum est autem sunt rem eveniet architecto"\n   │ }\n 1 │ {\n   │   "userId": 1,\n   │   "id": 2,\n   │   "title": "qui est esse",\n   │   "body": "est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro\n   │ vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla"\n   │ }\n 2 │ {\n   │   "userId": 1,\n   │   "id": 3,\n   │   "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",\n   │   "body": "et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis\n   │ pariatur\\nmolestiae porro eius odio et labore et velit aut"\n   │ }\n━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')])])]),s("hr"),t._v(" "),s("p",[t._v("To combine these responses together into a valid JSON array, you can turn the table into json.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" urls.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get urls "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" each "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" fetch "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$u")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" to json\n")])])]),s("p",[t._v("Output")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qui est esse"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ea molestias quasi exercitationem repellat qui ipsa sit aut"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("hr"),t._v(" "),s("p",[t._v("Making a "),s("code",[t._v("post")]),t._v(" request to an endpoint with a JSON payload. To make long requests easier, you can organize your json payloads inside a file.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"my_payload"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" payload.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get my_payload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" to json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" post https://jsonplaceholder.typicode.com/posts "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$in")]),t._v("\n")])])]),s("p",[t._v("Output")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("━━━━━\n id\n─────\n 101\n━━━━━\n")])])]),s("hr"),t._v(" "),s("p",[t._v("We can put this all together into a pipeline where we read data, manipulate it, and then send it back to the API. Lets "),s("code",[t._v("fetch")]),t._v(" a post, "),s("code",[t._v("increment")]),t._v(" the id, and "),s("code",[t._v("post")]),t._v(" it back to the endpoint. In this particular example, the test endpoint gives back an arbitrary response which we can't actually mutate.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" urls.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get urls "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" first "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" fetch "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" upsert "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),t._v(".id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" inc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" to json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" post https://jsonplaceholder.typicode.com/posts "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$in")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("━━━━━\n id\n─────\n 101\n━━━━━\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);