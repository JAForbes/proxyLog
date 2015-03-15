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
		var logArgs = message && [message] || []
		for(var i =0; i< arguments.length; i++){
			logArgs.push(names[i]+':'+arguments[i])
		}

		var output = fn.apply(null,arguments);

		logArgs.push('=>',output)
		console.log.apply(console,logArgs)

		return output
	}
}

if(typeof require !== 'undefined'){
		module.exports = proxyLog;
}
