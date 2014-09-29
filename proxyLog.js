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
		message && console.log(message,logObj) || console.log(logObj)
		
		return fn.apply(null,arguments);
	}
}

module.exports = proxyLog;