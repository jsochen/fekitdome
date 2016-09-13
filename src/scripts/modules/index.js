var $ = require('../libs/jquery.js');
module.exports = function(){
	$.ajax({
		// url:'/fekitdome/mock/index.json',
		url:'/api/livelistdo',
		type:'get',
		data:{},
		success:function (res) {
      var str = "";
			$.each(res.data,function(index,value) {
			  str +="<li>"+value+"</li>";
			})
			$('.body ul').html(str);
		},
		error:function(data){
			console.log(data);
			console.log('错误');
		}
	})
};
