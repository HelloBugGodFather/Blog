---
title: VSCode 配置文件
tags:
    - vscode
    - js/ts
    - python
---

# VSCode 配置文件

> 其中 `colorTheme` 和 `iconTheme` 是自己整合的主题包

## 版本锁定 1.93.1

```json
{
    // 不更新
    "update.mode": "none",
    "extensions.autoUpdate": false,

    // 主题
    "window.title": "${appName}",
    "workbench.colorTheme": "Material Theme Dark",
    "workbench.iconTheme": "mocha",

    // 禁用工作区信任
    "security.workspace.trust.enabled": false,

    /*
    @界面布局
    - 活动栏
    - 侧边栏
    - 菜单栏
    - 命令框
    - 状态栏
    - 面包屑
  */
    "workbench.activityBar.location": "top",
    "workbench.sideBar.location": "left",
    "window.menuBarVisibility": "compact",
    "window.commandCenter": false,
    "workbench.statusBar.visible": true,
    "breadcrumbs.enabled": false,

    // 扩展不提示消息
    "extensions.ignoreRecommendations": true,

    // 字体
    "editor.fontFamily": "Maple Mono NF CN",
    "editor.fontSize": 15,
    "editor.lineHeight": 1.6,
    "editor.fontWeight": "300",

    // 滚动作用域
    "editor.stickyScroll.enabled": false,
    "terminal.integrated.stickyScroll.enabled": false,
    "workbench.tree.enableStickyScroll": false,

    //缩略图
    "editor.minimap.enabled": true,
    "editor.minimap.showSlider": "always",

    /*
    @保存格式化
    - 保存时
    - 输入一行时
    - 粘贴时
    - 自动延迟1秒保存
  */
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.formatOnPaste": true,
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 1000,

    /*
    @编辑器格式
    - utf8编码
    - 行尾LF字符
    - 4格Tab缩进
  */
    "files.encoding": "utf8",
    "files.eol": "\n",
    "editor.tabSize": 4,
    "editor.indentSize": "tabSize",

    /*
    @目录树
    - 不折叠文件夹
    - 不自动导航文件
    - 层级缩进
    - 缩进参考线
    - 文件删除
  */
    "explorer.compactFolders": false,
    "explorer.autoReveal": false,
    "workbench.tree.indent": 20,
    "workbench.tree.renderIndentGuides": "none",
    "files.enableTrash": false,

    /*
    @编辑器历史
    - 本地文件历史
    - 命令历史
    - 启动时
  */
    "workbench.localHistory.maxFileEntries": 10,
    "workbench.commandPalette.history": 0,
    "workbench.startupEditor": "none",

    // Vscode Animation
    "animations.Install-Method": "Apc Customize UI++",
    "apc.imports": [
        "file:///C:/Users/25322/.vscode/extensions/brandonkirbyson.vscode-animations-2.0.7/dist/updateHandler.js"
    ],
    "animations.CursorAnimationOptions": {
        /*
      #FF6188 红
      #FC9867 橙
      #FFD866 黄
      #A9DC76 绿
      #78DCE8 蓝
      #AB9DF2 紫
    */
        "Color": "#FF6188"
    },
    "animations.CursorAnimation": true,
    "editor.cursorSmoothCaretAnimation": "on",

    // Web
    "typescript.tsdk": "F:/CodeEnvironment/Nodejs/node_modules/typescript/lib",
    "[html][css][javascript][typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json][jsonc][yaml][yml][markdown][dockerfile][dockercompose]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[vue][javascriptreact][typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.quickSuggestions": {
        "other": "on",
        "comments": "on",
        "strings": "on"
    },
    "files.associations": {
        "*.css": "tailwindcss"
    },
    // Python
    "python.defaultInterpreterPath": "${workspaceFolder}/.venv/Scripts/python.exe",
    "python.languageServer": "Pylance",
    "python.analysis.typeCheckingMode": "standard",
    "python.analysis.inlayHints.callArgumentNames": "all",
    "[python]": {
        "editor.codeActionsOnSave": {
            "source.fixAll": "explicit",
            "source.organizeImports": "explicit"
        },
        "editor.defaultFormatter": "charliermarsh.ruff"
    },
    "ruff.configuration": "${workspaceFolder}/ruff.toml",
    // Lingma
    "Lingma.DisplayLanguage": "简体中文",
    "Lingma.PreferredLanguage for AI Chat": "简体中文",
    "Lingma.PreferredLanguage forCommitMessage": "简体中文",
    "Lingma.aI Chat.memories": false,
    "Lingma.methodQuickOperation": false
}
```
