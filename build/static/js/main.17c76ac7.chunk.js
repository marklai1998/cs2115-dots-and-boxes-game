(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.7959c8ce.svg"},function(e,t,n){e.exports=n.p+"static/media/github-logo.750dac63.svg"},function(e,t,n){e.exports=n(43)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),o=n(11),i=n.n(o),s=(n(19),n(3)),l=n(4),u=n(5),m=n(7),f=n(6),h=n(8),v=n(1),b=n(2),d=(n(21),n(23),n(25),function(){return c.a.createElement("div",{className:"dot"},c.a.createElement("div",null))}),p=(n(27),{B:"B",R:"R"}),w=Object(s.a)({O:"O",N:"N",D:"D"},p),E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).onClick=function(){n.props.state===w.N&&n.props.onClick(n.props.row,n.props.col)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.state,r=e.current;return c.a.createElement("div",{className:"line ".concat(t," ").concat(n," current-").concat(r)},c.a.createElement("div",{className:"trigger",onClick:this.onClick}))}}]),t}(c.a.PureComponent),N=(n(29),c.a.memo(function(e){var t=e.state;return c.a.createElement("div",{className:"box ".concat(t)})})),g=c.a.memo(function(e){return c.a.createElement("div",{className:"board"},e.board.map(function(t,n){var r=n%2;return c.a.createElement("div",{className:"row",key:n},r?t.map(function(t,r){return r%2?c.a.createElement(N,{key:n+"-"+r,state:t}):c.a.createElement(E,{key:n+"-"+r,state:t,current:e.current,row:n,col:r,onClick:e.onLineClick})}):t.map(function(t,r){return t===w.O?c.a.createElement(d,{key:n+"-"+r}):c.a.createElement(E,{className:"even",key:n+"-"+r,state:t,current:e.current,row:n,col:r,onClick:e.onLineClick})}))}))}),O=n(9),j=function(e,t){for(var n=0;n<e.length;n+=2)for(var r=0;r<e.length;r+=2)e=k({row:n,col:r})(e,t);return e},k=function(e){return function(t,n){for(var r=t.length-e.row,a=t.length-e.col,c=2;c<r;c+=2)for(var o=2;o<a;o+=2){var i={width:o,height:c};B(e,i)(t)&&(t=R(e,i)(t,n))}return t}},B=function(e,t){return function(n){if(Object(b.b)(e.col,e.col+t.width,n[e.row]).some(function(e){return e===w.N}))return!1;if(Object(b.b)(e.col,e.col+t.width,n[e.row+t.height]).some(function(e){return e===w.N}))return!1;for(var r=1;r<t.height;r++){var a=n[e.row+r][e.col],c=n[e.row+r][e.col+t.width];if(a===w.N||c===w.N)return!1;for(var o=1;o<t.width;o++){var i=n[e.row+r][e.col+o];if(i!==w.N&&i!==w.O)return!1}}return!0}},R=function(e,t){return function(n,r){for(var a=1;a<t.height;a++)for(var c=1;c<t.width;c++){var o=e.row+a,i=e.col+c;n[o][i]!==w.O&&(n=o%2&&i%2?Object(b.a)([o,i],r,n):Object(b.a)([o,i],w.D,n))}return n}},y=(n(31),c.a.memo(function(e){var t=e.B,n=e.R,r=e.reset;return c.a.createElement("div",{className:"score-board"},c.a.createElement("span",{className:"score B"},t),c.a.createElement("button",{type:"button",className:"reset",onClick:r},c.a.createElement("i",{className:"fas fa-redo-alt"})),c.a.createElement("span",{className:"score R"},n))})),C=(n(33),c.a.memo(function(e){var t=e.current;return c.a.createElement("div",{className:"current-color ".concat(t)})})),x=function(e){for(var t,n=0,r=0,a=1;a<e.length;a+=2)for(var c=1;c<e.length;c+=2)e[a][c]===p.B&&n++,e[a][c]===p.R&&r++;return t={},Object(v.a)(t,p.B,n),Object(v.a)(t,p.R,r),t},L=(n(35),c.a.memo(function(e){var t=e.winner,n=e.show;return c.a.createElement("div",{className:n?"win-box show":"win-box"},t===p.B?"Blue":"Red"," Won!")})),z=function(e){var t=e.B,n=e.R,r=81-t-n;if(t<n){if(t+r<n)return p.R}else if(n+r<t)return p.B;return null},A=(r={size:10,current:p.B,get board(){return e=this.size,Object(O.a)(Array(2*e-1)).map(function(t,n){var r=n%2,a=Object(O.a)(Array(2*e-1));return r?a.fill(w.N):a.map(function(e,t){return t%2?w.N:w.O})});var e},winner:null},Object(v.a)(r,p.B,0),Object(v.a)(r,p.R,0),r),D=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state=A,n.onLineClick=function(e,t){var r=Object(b.a)([e,t],n.state.current,n.state.board),a=j(r,n.state.current),c=x(a),o=z(c),i=c.B!==n.state.B||c.R!==n.state.R?n.state.current:n.state.current===p.B?p.R:p.B;n.setState(Object(s.a)({board:a,current:i,winner:o},c))},n.reset=function(){n.setState(A)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"game-wrapper"},c.a.createElement(L,{winner:this.state.winner,show:null!==this.state.winner}),c.a.createElement(y,{B:this.state.B,R:this.state.R,reset:this.reset}),c.a.createElement(C,{current:this.state.current}),c.a.createElement(g,{size:this.state.size,board:this.state.board,current:this.state.current,onLineClick:this.onLineClick}))}}]),t}(c.a.PureComponent),S=(n(37),n(39),n(12)),J=n.n(S),P=n(13),G=n.n(P),I=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("img",{src:J.a,className:"logo",alt:"logo"}),c.a.createElement("div",{className:"title"},"CS2115 Dots & Boxes Game"),c.a.createElement("a",{href:"https://github.com/marklai1998/cs2115-dots-and-boxes-game"},c.a.createElement("img",{src:G.a,className:"ghLogo",alt:"git-hub-logo"})))},W=(n(41),function(){return c.a.createElement("footer",{className:"footer"},"Build with ",c.a.createElement("i",{className:"fab fa-react"}),"React.js")}),q=c.a.memo(function(){return c.a.createElement("div",{className:"app"},c.a.createElement(I,null),c.a.createElement(D,null),c.a.createElement(W,null))});i.a.render(c.a.createElement(q,null),document.getElementById("root"))}],[[14,2,1]]]);
//# sourceMappingURL=main.17c76ac7.chunk.js.map