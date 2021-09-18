(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{394:function(e,a,t){e.exports=t.p+"assets/img/0_17_0_playground.dadb1251.png"},457:function(e,a,t){"use strict";t.r(a);var n=t(45),o=Object(n.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"nushell-0-17-0"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-17-0"}},[e._v("#")]),e._v(" Nushell 0.17.0")]),e._v(" "),n("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),n("p",[e._v("Today, we're releasing 0.17 of Nu, the first Nu to include WebAssembly, custom keybindings, and much more.")]),e._v(" "),n("h1",{attrs:{id:"where-to-get-it"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),n("p",[e._v("Nu 0.17.0 is available as "),n("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.17.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),n("OutboundLink")],1),e._v(" or from "),n("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),n("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),n("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),n("p",[e._v("If you want more goodies, you can install "),n("code",[e._v("cargo install nu --features=stable")]),e._v(".")]),e._v(" "),n("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),n("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),n("h1",{attrs:{id:"what-s-new"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),n("h2",{attrs:{id:"webassembly-support-jonathandturner-and-upcoming-wasm-based-playground-jzaefferer-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webassembly-support-jonathandturner-and-upcoming-wasm-based-playground-jzaefferer-jonathandturner"}},[e._v("#")]),e._v(" WebAssembly support (jonathandturner) and upcoming wasm-based playground (jzaefferer, jonathandturner)")]),e._v(" "),n("p",[n("img",{attrs:{src:t(394),alt:"image of a wasm-based Nushell playground"}})]),e._v(" "),n("p",[n("em",[e._v("Nu, now in your browser")])]),e._v(" "),n("p",[e._v("As part of on-going cleanup and portability work, with 0.17 it's now possible to build Nu and target WebAssembly, allowing you to run Nu in the browser and call into it from JavaScript. This is the first (experimental!) step in building towards an interactive playground and possibly more. We're hoping to talk more about this porting process in the coming days.")]),e._v(" "),n("p",[e._v("If you'd like to see what we're building, "),n("a",{attrs:{href:"https://www.nushell.sh/demo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("check it out"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"custom-keybindings-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-keybindings-jonathandturner"}},[e._v("#")]),e._v(" Custom keybindings (jonathandturner)")]),e._v(" "),n("p",[e._v("Nushell now also supports custom keybindings. To configure your keybindings, you can add a keybindings.yml file beside your config file. You can find out the location for your system using:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> echo $nu.keybinding-path\n/home/jonathan/.config/nu/keybindings.yml\n")])])]),n("p",[e._v("You can base your custom file off this "),n("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/keybindings.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("example keybindings file"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"new-commands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-commands"}},[e._v("#")]),e._v(" New commands")]),e._v(" "),n("h3",{attrs:{id:"benchmark-pag4k"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#benchmark-pag4k"}},[e._v("#")]),e._v(" "),n("code",[e._v("benchmark")]),e._v(" (pag4k)")]),e._v(" "),n("p",[e._v("The new "),n("code",[e._v("benchmark")]),e._v(" command will time a block and output the length of time it took to run:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> benchmark { echo "hello" }\n363us 528ns\n')])])]),n("h3",{attrs:{id:"str-reverse-josephtlyons"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#str-reverse-josephtlyons"}},[e._v("#")]),e._v(" "),n("code",[e._v("str reverse")]),e._v(" (JosephTLyons)")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("str reverse")]),e._v(" command will reverse the characters of a string:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> echo "hello world" | str reverse\ndlrow olleh\n')])])]),n("h3",{attrs:{id:"str-length-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#str-length-jonathandturner"}},[e._v("#")]),e._v(" "),n("code",[e._v("str length")]),e._v(" (jonathandturner)")]),e._v(" "),n("p",[e._v("On a related note, you can now also get the length of a string.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> echo "hello world" | str length\n11\n')])])]),n("h3",{attrs:{id:"str-from-bailey-layzer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#str-from-bailey-layzer"}},[e._v("#")]),e._v(" "),n("code",[e._v("str from")]),e._v(" (bailey-layzer)")]),e._v(" "),n("p",[e._v("In previous versions of Nu, it was difficult to format numbers for precision and digit grouping. Starting with 0.17, there's now a new "),n("code",[e._v("str from")]),e._v(" subcommand to help with this.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> echo 1.456123 | str from --decimals 2\n1.46\n\n> echo 1234567 | str from --group-digits\n1,234,567\n")])])]),n("h3",{attrs:{id:"math-stddev-and-math-variance-amousa11"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#math-stddev-and-math-variance-amousa11"}},[e._v("#")]),e._v(" "),n("code",[e._v("math stddev")]),e._v(" and "),n("code",[e._v("math variance")]),e._v(" (amousa11)")]),e._v(" "),n("p",[e._v("You can now calculate standard deviation and variance in your numeric datasets:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> echo [ 1 2 3 4 5 ] | math stddev\n1.414213562373095048801688724209698078569671875376948073176679737990732478462107038850387534327641573\n\n> echo [ 1 2 3 4 5 ] | math variance\n2\n")])])]),n("h3",{attrs:{id:"if-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#if-jonathandturner"}},[e._v("#")]),e._v(" "),n("code",[e._v("if")]),e._v(" (jonathandturner)")]),e._v(" "),n("p",[e._v("Ever want to run one block if a condition was true and another if the condition was false? Now you can!")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> echo 0..5 | if $it > 3 { echo big } { echo small }\n───┬───────\n 0 │ small\n 1 │ small\n 2 │ small\n 3 │ small\n 4 │ big\n 5 │ big\n───┴───────\n")])])]),n("p",[e._v("The keen observer might notice we're stealthly sneaking in more commands you might use in future scripting.")]),e._v(" "),n("h3",{attrs:{id:"split-chars-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#split-chars-jonathandturner"}},[e._v("#")]),e._v(" "),n("code",[e._v("split chars")]),e._v(" (jonathandturner)")]),e._v(" "),n("p",[e._v("To more easily work with the characters in a string, you can now split the characters into separate items:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('> echo "hello" | split chars\n───┬───\n 0 │ h\n 1 │ e\n 2 │ l\n 3 │ l\n 4 │ o\n───┴───\n')])])]),n("h3",{attrs:{id:"move-column-andrasio"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#move-column-andrasio"}},[e._v("#")]),e._v(" "),n("code",[e._v("move column")]),e._v(" (andrasio)")]),e._v(" "),n("p",[e._v("Finally, you can now move columns in your table:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> ls\n───┬──────────────────────────────────┬──────┬─────────┬────────────\n # │ name                             │ type │ size    │ modified\n───┼──────────────────────────────────┼──────┼─────────┼────────────\n 0 │ 0.bootstrap.js                   │ File │ 30.9 KB │ 1 hour ago\n 1 │ 46a44c28f12d33243854.module.wasm │ File │  5.4 MB │ 1 hour ago\n 2 │ bootstrap.js                     │ File │ 16.3 KB │ 1 hour ago\n 3 │ index.html                       │ File │  1.4 KB │ 1 hour ago\n───┴──────────────────────────────────┴──────┴─────────┴────────────\n\n> ls | move column size --before type\n───┬──────────────────────────────────┬─────────┬──────┬────────────\n # │ name                             │ size    │ type │ modified\n───┼──────────────────────────────────┼─────────┼──────┼────────────\n 0 │ 0.bootstrap.js                   │ 30.9 KB │ File │ 1 hour ago\n 1 │ 46a44c28f12d33243854.module.wasm │  5.4 MB │ File │ 1 hour ago\n 2 │ bootstrap.js                     │ 16.3 KB │ File │ 1 hour ago\n 3 │ index.html                       │  1.4 KB │ File │ 1 hour ago\n───┴──────────────────────────────────┴─────────┴──────┴────────────\n")])])]),n("h2",{attrs:{id:"early-draft-of-a-new-website-pontaoski"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#early-draft-of-a-new-website-pontaoski"}},[e._v("#")]),e._v(" Early draft of a new website (pontaoski)")]),e._v(" "),n("p",[e._v("We're working on a refresh of our website. If you're interested in giving it a look, we've got an "),n("a",{attrs:{href:"https://github.com/nushell/website_exploration",target:"_blank",rel:"noopener noreferrer"}},[e._v("early draft started"),n("OutboundLink")],1),e._v(". If you'd like to help us with the design, reach out over github or discord.")]),e._v(" "),n("h2",{attrs:{id:"command-improvements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#command-improvements"}},[e._v("#")]),e._v(" Command improvements")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("sort-by")]),e._v(" can now sort with case-insensitivity (JosephTLyons)")]),e._v(" "),n("li",[n("code",[e._v("alias")]),e._v(" of externals should now be improved (bailey-layzer)")]),e._v(" "),n("li",[n("code",[e._v("history")]),e._v(" should be able to correctly store more than 100 rows now (fdncred)")]),e._v(" "),n("li",[n("code",[e._v("to html")]),e._v(" will now output pretty hex when given a binary it doesn't recognize (jonathandturner), and now has color themes (fdncred)")]),e._v(" "),n("li",[n("code",[e._v("uniq")]),e._v(" can now also work with simple values (k-brk)")]),e._v(" "),n("li",[e._v("Completions now have their own abstraction, so we can more easily improve them in the future (thegedge)")]),e._v(" "),n("li",[n("code",[e._v("table")]),e._v(" now prints column numbers a bit more orderly way (Porges)")]),e._v(" "),n("li",[n("code",[e._v("str")]),e._v(" made parsing more strict, to let the user know if there were parsing errors (andrasio)")]),e._v(" "),n("li",[n("code",[e._v("group-by")]),e._v(" can now take a block that allows for deep keying for grouping (andrasio)")]),e._v(" "),n("li",[e._v("autoenv (directory-specific environments) can now run commands on entry/exit (samhedin)")]),e._v(" "),n("li",[n("code",[e._v("str trim")]),e._v(" can now take an optional character to trim (bailey-layzer)")]),e._v(" "),n("li",[e._v("duration pretty-print is now easier to read (jonathandturner), durations are also now stored as nanoseconds internally (pag4k)")]),e._v(" "),n("li",[n("code",[e._v("str substring")]),e._v(" supports more argument types now (andrasio)")]),e._v(" "),n("li",[e._v("completions for filepaths should now work in more cases (almindor)")]),e._v(" "),n("li",[n("code",[e._v("rm")]),e._v(" now gives nicer output (arashout)")]),e._v(" "),n("li",[n("code",[e._v("ls -f")]),e._v(" will now do a better job of keeping the tables aligned (arashout)")]),e._v(" "),n("li",[e._v("general parser improvements (philip-peterson, jonathandturner)")]),e._v(" "),n("li",[n("code",[e._v("each")]),e._v(" can now number the outputs it creates, allowing for enumeration (jonathandturner)")])]),e._v(" "),n("h2",{attrs:{id:"bug-fixes-tests-and-more-philip-peterson-josephtlyons-u5surf-thegedge-arashout-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes-tests-and-more-philip-peterson-josephtlyons-u5surf-thegedge-arashout-jonathandturner"}},[e._v("#")]),e._v(" Bug fixes, tests and more (philip-peterson, JosephTLyons, u5surf, thegedge, arashout, jonathandturner)")]),e._v(" "),n("p",[e._v("Parsing now has more test coverage. Internal code cleanups. Command description copy paste issues fixed. Ensure that the MaybeTextCodec gets properly cleared. Fix documentation to renamed subcommands and "),n("code",[e._v("str to-int")]),e._v(". Internally more commands were moved to process their streams lazily. We can now generate documentation from reading the built-in docs on each command.")]),e._v(" "),n("h2",{attrs:{id:"breaking-changes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking changes")]),e._v(" "),n("h3",{attrs:{id:"bson-and-sqlite-move-to-plugins-jonathandturner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bson-and-sqlite-move-to-plugins-jonathandturner"}},[e._v("#")]),e._v(" BSON and Sqlite move to plugins (jonathandturner)")]),e._v(" "),n("p",[e._v("As part of the portability work, we've moved the "),n("code",[e._v("from bson")]),e._v(", "),n("code",[e._v("to bson")]),e._v(", "),n("code",[e._v("from sqlite")]),e._v(" and "),n("code",[e._v("to sqlite")]),e._v(" out of internal commands and into plugins. The functionality should remain largely unchanged, with the only difference being that you'll need to install these plugins for this functionality.")]),e._v(" "),n("h3",{attrs:{id:"command-renames"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#command-renames"}},[e._v("#")]),e._v(" Command renames")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("calc")]),e._v(" is now "),n("code",[e._v("math eval")]),e._v(" to join the "),n("code",[e._v("math")]),e._v(" subcommand family (coolshaurya)")]),e._v(" "),n("li",[n("code",[e._v("keep-until")]),e._v(" and "),n("code",[e._v("keep-while")]),e._v(" are now subcommands: "),n("code",[e._v("keep until")]),e._v(" and "),n("code",[e._v("keep while")]),e._v(" (k-brk)")]),e._v(" "),n("li",[n("code",[e._v("skip-while")]),e._v(" and "),n("code",[e._v("skip-until")]),e._v(" are also now subcommands: "),n("code",[e._v("skip while")]),e._v(" and skip until (andrasio)")]),e._v(" "),n("li",[n("code",[e._v("config")]),e._v(" is now split into subcommands based on the command flag, eg) "),n("code",[e._v("config set")]),e._v(", "),n("code",[e._v("config get")]),e._v(", etc. (ritobanrc, jonathandturner)")])]),e._v(" "),n("h2",{attrs:{id:"looking-forward"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#looking-forward"}},[e._v("#")]),e._v(" Looking forward")]),e._v(" "),n("p",[e._v("Just when we think we'll slow down a little, we're surprised by the amount of community feedback and help. This release covered nearly 4(!) pages of pull requests. Not bad for three weeks for work!")]),e._v(" "),n("p",[e._v("There's some parser work coming up to help continue removing roadblocks to using Nu as a scripting language, improving completions, and generally continuing to polish Nu.")])])}),[],!1,null,null,null);a.default=o.exports}}]);