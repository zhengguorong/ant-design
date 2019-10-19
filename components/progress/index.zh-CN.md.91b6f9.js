(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1595:function(t,d){t.exports={content:["section",["p","展示操作的当前进度。"],["h2","何时使用"],["p","在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。"],["ul",["li",["p","当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；"]],["li",["p","当需要显示一个操作完成的百分比时。"]]]],meta:{category:"Components",subtitle:"进度条",type:"反馈",title:"Progress",filename:"components/progress/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","各类型共用的属性。"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","type"],["td","类型，可选 ",["code","line"]," ",["code","circle"]," ",["code","dashboard"]],["td","string"],["td",["code","line"]],["td"]],["tr",["td","format"],["td","内容的模板函数"],["td","function(percent, successPercent)"],["td",["code","percent => percent + '%'"]],["td"]],["tr",["td","percent"],["td","百分比"],["td","number"],["td","0"],["td"]],["tr",["td","showInfo"],["td","是否显示进度数值或状态图标"],["td","boolean"],["td","true"],["td"]],["tr",["td","status"],["td","状态，可选：",["code","success"]," ",["code","exception"]," ",["code","normal"]," ",["code","active"],"(仅限 line)"],["td","string"],["td","-"],["td"]],["tr",["td","strokeLinecap"],["td"],["td","Enum{ 'round', 'square' }"],["td",["code","round"]],["td","3.8.0"]],["tr",["td","strokeColor"],["td","进度条的色彩"],["td","string"],["td","-"],["td","3.7.0"]],["tr",["td","successPercent"],["td","已完成的分段百分比"],["td","number"],["td","0"],["td","3.2.0"]]]],["h3",["code",'type="line"']],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","strokeWidth"],["td","进度条线的宽度，单位 px"],["td","number"],["td","10"],["td","3.13.1"]],["tr",["td","strokeColor"],["td","进度条的色彩，传入 object 时为渐变"],["td","string ","|"," { from: string; to: string; direction: string }"],["td","-"],["td","3.16.0"]]]],["h3",["code",'type="circle"']],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","width"],["td","圆形进度条画布宽度，单位 px"],["td","number"],["td","132"],["td","3.13.1"]],["tr",["td","strokeWidth"],["td","圆形进度条线的宽度，单位是进度条画布宽度的百分比"],["td","number"],["td","6"],["td","3.13.1"]],["tr",["td","strokeColor"],["td","圆形进度条线的色彩，传入 object 时为渐变"],["td","string ","|"," object"],["td","-"],["td","3.19.8"]]]],["h3",["code",'type="dashboard"']],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","width"],["td","仪表盘进度条画布宽度，单位 px"],["td","number"],["td","132"],["td","3.13.1"]],["tr",["td","strokeWidth"],["td","仪表盘进度条线的宽度，单位是进度条画布宽度的百分比"],["td","number"],["td","6"],["td","3.13.1"]],["tr",["td","gapDegree"],["td","仪表盘进度条缺口角度，可取值 0 ~ 360"],["td","number"],["td","0"],["td","3.13.1"]],["tr",["td","gapPosition"],["td","仪表盘进度条缺口位置"],["td","Enum{ 'top', 'bottom', 'left', 'right' }"],["td",["code","top"]],["td","3.13.1"]]]]]}}}]);