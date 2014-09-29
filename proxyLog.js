/* jshint asi:true, expr:true*/
function argNames(fn){
	fText = fn+''
	paren = {
	  left: fText.indexOf('(')+1,
	  right: fText.indexOf(')')
	}
	return fText.slice(paren.left ,paren.right)
	  .replace(/\s/,'')
	  .split(',')
}

function proxyLog(message,fn){
	var names = argNames(fn)
	return function(){
		var logObj = {};
		for(var i =0; i< arguments.length; i++){
			logObj[names[i]] = arguments[i];
		}
		message && console.log(message,logObj) || console.log(JSON.stringify(logObj),null,2)

		return fn.apply(null,arguments);
	}
}

if(typeof require !== 'undefined'){
		module.exports = proxyLog;
}
