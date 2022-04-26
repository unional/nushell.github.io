(window.webpackJsonp=window.webpackJsonp||[]).push([[852],{1360:function(s,t,a){"use strict";a.r(t);var e=a(34),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装-nu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-nu"}},[s._v("#")]),s._v(" 安装 Nu")]),s._v(" "),a("p",[s._v("有很多方法可以获取并使用 Nu。你可以从我们的"),a("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("发布页面"),a("OutboundLink")],1),s._v("下载预编译的二进制文件，也可以 "),a("a",{attrs:{href:"https://repology.org/project/nushell/versions",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用你喜欢的软件包管理器"),a("OutboundLink")],1),s._v("，或者从源码构建。")]),s._v(" "),a("h2",{attrs:{id:"预编译二进制包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预编译二进制包"}},[s._v("#")]),s._v(" 预编译二进制包")]),s._v(" "),a("p",[s._v("Nu 二进制文件在 "),a("a",{attrs:{href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub 的 Release 页"),a("OutboundLink")],1),s._v("发布，适用于 Linux、macOS 和 Windows。只需下载并解压二进制文件，然后将其复制到你的系统"),a("code",[s._v("PATH")]),s._v("上的某个位置即可。")]),s._v(" "),a("h2",{attrs:{id:"软件包管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件包管理器"}},[s._v("#")]),s._v(" 软件包管理器")]),s._v(" "),a("p",[s._v("Nu 可以通过几个软件包管理器获得：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://repology.org/project/nushell/versions",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://repology.org/badge/vertical-allrepos/nushell.svg",alt:"打包状态"}}),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("对于 macOS 和 Linux，"),a("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Homebrew"),a("OutboundLink")],1),s._v("是一个流行的选择（"),a("code",[s._v("brew install nushell")]),s._v("）。")]),s._v(" "),a("p",[s._v("对于 Windows 用户：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Winget"),a("OutboundLink")],1),s._v(" ("),a("code",[s._v("winget install nushell")]),s._v(")")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Chocolatey"),a("OutboundLink")],1),s._v(" ("),a("code",[s._v("choco install nushell")]),s._v(")")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://scoop.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Scoop"),a("OutboundLink")],1),s._v(" ("),a("code",[s._v("scoop install nu")]),s._v(")")])]),s._v(" "),a("h2",{attrs:{id:"从源码构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从源码构建"}},[s._v("#")]),s._v(" 从源码构建")]),s._v(" "),a("p",[s._v("你也可以从源代码构建"),a("code",[s._v("Nu")]),s._v("。首先，你需要设置 Rust 工具链和它的依赖项。")]),s._v(" "),a("h3",{attrs:{id:"安装编译器套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装编译器套件"}},[s._v("#")]),s._v(" 安装编译器套件")]),s._v(" "),a("p",[s._v("为了使 Rust 能够正常工作，你需要在你的系统上安装一个兼容的编译器套件。以下是推荐的编译器套件：")]),s._v(" "),a("ul",[a("li",[s._v("Linux：GCC 或 Clang")]),s._v(" "),a("li",[s._v("macOS：Clang (安装 Xcode)")]),s._v(" "),a("li",[s._v("Windows：MSVC（安装 "),a("a",{attrs:{href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Visual Studio"),a("OutboundLink")],1),s._v(" 或 "),a("a",{attrs:{href:"https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022",target:"_blank",rel:"noopener noreferrer"}},[s._v("Visual Studio Build Tools"),a("OutboundLink")],1),s._v(")\n"),a("ul",[a("li",[s._v('请确保安装 "用 C++进行桌面开发" 相关包')]),s._v(" "),a("li",[s._v("任何 Visual Studio 版本都可以(社区版是免费的)")])])])]),s._v(" "),a("h3",{attrs:{id:"安装-rust"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-rust"}},[s._v("#")]),s._v(" 安装 Rust")]),s._v(" "),a("p",[s._v("如果我们的系统中还没有 Rust，最好的方法是通过 "),a("a",{attrs:{href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("rustup"),a("OutboundLink")],1),s._v(" 来安装它。Rustup 是一种管理 Rust 安装的工具，可以管理使用不同的 Rust 版本。")]),s._v(" "),a("p",[s._v("Nu 目前需要 "),a("strong",[s._v("最新（1.59 或更高）的稳定")]),s._v(" 版本的 Rust。最好的方法是让"),a("code",[s._v("rustup")]),s._v("为你找到正确的版本。当你第一次打开"),a("code",[s._v("rustup")]),s._v("时，它会询问你想安装哪个版本的 Rust：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Current installation options:\n\ndefault "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" triple: x86_64-unknown-linux-gnu\ndefault toolchain: stable\nprofile: default\nmodify "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" variable: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Proceed with installation "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Customize installation\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Cancel installation\n")])])]),a("p",[s._v("一旦我们准备好了，我们就按 "),a("code",[s._v("1")]),s._v("，然后回车。")]),s._v(" "),a("p",[s._v("如果你不愿意通过"),a("code",[s._v("rustup")]),s._v("来安装 Rust，你也可以通过其他方法来安装它（比如从 Linux 发行版的软件包中）。只要确保安装 1.59 或更高版本的 Rust 即可。")]),s._v(" "),a("h3",{attrs:{id:"依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),a("h4",{attrs:{id:"debian-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debian-ubuntu"}},[s._v("#")]),s._v(" Debian/Ubuntu")]),s._v(" "),a("p",[s._v('你将需要安装 "pkg-config" 和 "libssl-dev" 包：')]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pkg-config libssl-dev\n")])])]),a("p",[s._v('对于希望使用 "rawkey" 或 "clipboard" 可选功能的 Linux 用户，需要安装 "libx11-dev" 和 "libxcb-composite0-dev" 软件包。')]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libxcb-composite0-dev libx11-dev\n")])])]),a("h4",{attrs:{id:"基于-rhel-的发行版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-rhel-的发行版"}},[s._v("#")]),s._v(" 基于 RHEL 的发行版")]),s._v(" "),a("p",[s._v('你需要安装 "libxcb"、"openssl-devel" 和 "libX11-devel"：')]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libxcb openssl-devel libX11-devel\n")])])]),a("h4",{attrs:{id:"macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[s._v("#")]),s._v(" macOS")]),s._v(" "),a("p",[s._v("使用 "),a("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Homebrew"),a("OutboundLink")],1),s._v('，你需要通过如下方式安装 "openssl" 和 "cmake" ：')]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssl cmake\n")])])]),a("h3",{attrs:{id:"使用-crates-io进行构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-crates-io进行构建"}},[s._v("#")]),s._v(" 使用 "),a("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("crates.io"),a("OutboundLink")],1),s._v("进行构建")]),s._v(" "),a("p",[s._v("Nu 发行版会作为源码发布到流行的 Rust 包仓库 "),a("a",{attrs:{href:"https://crates.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("crates.io"),a("OutboundLink")],1),s._v("，这使得使用 "),a("code",[s._v("cargo")]),s._v(" 构建并安装最新的 Nu 版本变得很容易：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cargo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nu\n")])])]),a("p",[s._v("如此即可! "),a("code",[s._v("cargo")]),s._v("工具将完成下载 Nu 及其源码依赖，构建并将其安装到 cargo bin 路径中，以便我们能够运行它。")]),s._v(" "),a("p",[s._v("如果你想安装更多的功能，你可以使用：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cargo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nu --features"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("extra\n")])])]),a("p",[s._v("安装完毕后，我们可以使用 "),a("code",[s._v("nu")]),s._v(" 命令运行 Nu：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ nu\n/home/jt/Source"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("h3",{attrs:{id:"从-github-仓库构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-github-仓库构建"}},[s._v("#")]),s._v(" 从 GitHub 仓库构建")]),s._v(" "),a("p",[s._v("我们也可以从 GitHub 上的最新源码构建自己的 Nu。这让我们可以立即获得最新的功能和错误修复。首先，克隆源码仓库：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/nushell/nushell.git\n")])])]),a("p",[s._v("然后，我们可以用以下方式构建和运行 Nu：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nushell\nnushell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cargo build --workspace --features"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("extra "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" cargo run --features"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("extra\n")])])]),a("p",[s._v("你也可以在"),a("strong",[s._v("发布")]),s._v("模式下构建和运行 Nu：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("nushell"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cargo build --release --workspace --features"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("extra "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" cargo run --release --features"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("extra\n")])])]),a("p",[s._v('熟悉 Rust 的人可能会问，如果 "run" 默认会构建，为什么我们还要做 "build" 和 "run" 这两个步骤？这是为了解决 Cargo 中新的 '),a("code",[s._v("default-run")]),s._v(" 选项的缺陷，并确保所有插件都被构建，尽管这在将来可能不再需要。")]),s._v(" "),a("h2",{attrs:{id:"设置登录-shell-nix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置登录-shell-nix"}},[s._v("#")]),s._v(" 设置登录 Shell (*nix)")]),s._v(" "),a("p",[a("strong",[s._v("!!! Nu 仍在开发中，对于日常使用可能并不稳定。!!!")])]),s._v(" "),a("p",[s._v("要设置登录 Shell，你可以使用"),a("a",{attrs:{href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("chsh")]),a("OutboundLink")],1),s._v("命令。\n一些 Linux 发行版有一个位于"),a("code",[s._v("/etc/shells")]),s._v("的有效 Shell 列表，在 Nu 被列入白名单之前不允许改变 Shell。如果你没有更新"),a("code",[s._v("shells")]),s._v("文件，你可能会看到类似于下面的错误：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("chsh: /home/username/.cargo/bin/nu is an invalid shell\n")])])]),a("p",[s._v("你可以通过在"),a("code",[s._v("shells")]),s._v("文件中添加你的 Nu 二进制文件来把 Nu 添加到允许的 Shells 列表中。\n添加的路径可以用"),a("code",[s._v("which nu")]),s._v("命令找到，通常是"),a("code",[s._v("$HOME/.cargo/bin/nu")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"设置默认的-shell-windows-终端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置默认的-shell-windows-终端"}},[s._v("#")]),s._v(" 设置默认的 Shell (Windows 终端)")]),s._v(" "),a("p",[s._v("如果你使用的是 "),a("a",{attrs:{href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows Terminal"),a("OutboundLink")],1),s._v("，你可以通过添加如下内容到你的终端设置"),a("code",[s._v('"profiles"')]),s._v("（JSON 文件）中来设置"),a("code",[s._v("nu")]),s._v("作为你的默认 Shell：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"guid"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{2b372ca1-1ee2-403d-a839-6d63077ad871}"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hidden"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Nu Shell"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commandline"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nu.exe"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("最后需要做的是将 "),a("code",[s._v('"defaultProfile"')]),s._v(" 改为:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"defaultProfile"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{2b372ca1-1ee2-403d-a839-6d63077ad871}"')]),s._v(",\n")])])]),a("p",[s._v("之后，"),a("code",[s._v("nu")]),s._v(" 应该会在 "),a("strong",[s._v("Windows Terminal")]),s._v(" 启动时被加载。")])])}),[],!1,null,null,null);t.default=r.exports}}]);