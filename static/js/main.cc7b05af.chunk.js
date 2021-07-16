(this["webpackJsonpgoit-react-hw-01"]=this["webpackJsonpgoit-react-hw-01"]||[]).push([[0],{11:function(t,e,n){t.exports={btn:"ContactForm_btn__hprVg"}},19:function(t,e,n){},2:function(t,e,n){t.exports={list:"ContactList_list__1zfnK",text:"ContactList_text__1CsTg",btn:"ContactList_btn__2ZeQU"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),i=(n(18),n(19),n(12)),o=n(3),u=n(4),l=n(6),b=n(5),d=n(9),h=n.n(d),m=n(0);var j=function(t){var e=t.title,n=t.children;return Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{children:e}),n]})},p=n(10),f=n(11),O=n.n(f),x=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={number:"",name:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInputChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Number"}),Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInputChange})]}),Object(m.jsx)("button",{className:O.a.btn,children:"Add contact"})]})}}]),n}(a.Component),v=n(13),C=n(2),g=n.n(C);function S(t){var e=t.contacts,n=t.onDelete;return Object(m.jsx)("ol",{className:g.a.list,children:e.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsxs)("p",{className:g.a.posBtn,children:[Object(m.jsxs)("span",{className:g.a.text,children:[t.name,": ",t.number]}),Object(m.jsx)("button",{type:"button",onClick:function(){return n(t.id)},className:g.a.btn,children:"Delete"})]})},t.id)}))})}var y=function(t){var e=t.value,n=t.onChange;return Object(m.jsx)("label",{children:Object(m.jsx)("input",{type:"text",value:e,onChange:n})})},_=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){if(t.state.contacts.some((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts."));else{var n={id:Object(v.a)(10),name:e.name,number:e.number};t.setState((function(t){return{contacts:[n].concat(Object(i.a)(t.contacts))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(m.jsxs)("div",{className:h.a.wrapper,children:[Object(m.jsx)(j,{title:"Phonebook",children:Object(m.jsx)(x,{onSubmit:this.formSubmitHandler})}),Object(m.jsxs)(j,{title:"Contacts",children:[Object(m.jsx)(y,{value:t,onChange:this.changeFilter}),Object(m.jsx)(S,{contacts:n,onDelete:this.deleteContact})]})]})}}]),n}(a.Component);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={wrapper:"App_wrapper__3HLfH"}}},[[21,1,2]]]);
//# sourceMappingURL=main.cc7b05af.chunk.js.map