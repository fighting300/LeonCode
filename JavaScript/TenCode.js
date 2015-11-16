// 简单回调
function foo(){
	console.log(this.a);
}
function dofoo(fn){
	fn();
}
function dofoo2(o){
	o.foo();
}
var obj = {
	a:2,
	foo:foo
};
var a = "I'm an a";
dofoo(obj.foo);
dofoo2(obj); 






function fooa(somthing){
	console.log(this.a,somthing);
}
function bind(fn, obj){
	return function(){
		return fn.apply(obj,arguments);
	}
}
var obja = {
	a:2
}
var bar = bind(fooa, obj);
var b = bar(3);
console.log(b);

/** 在Javascript中，this指向函数 执行时的当前对象，而非声明环境有。
执行doFoo的时候执行环境就是doFoo函数，执行环境为全局。
执行doFoo2时是在对象内部调用函数，this指针指向该对象。**/