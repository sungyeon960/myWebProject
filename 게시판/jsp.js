    var request = {};
    request.getParameter = function(p_name){ 
        var v_url = location.href;
        if(v_url.indexOf("?") == -1) return;
        v_url = decodeURIComponent(v_url);
        var v_queryString = v_url.split("?")[1];
        var v_nameValues =  v_queryString.split("&");
        for(var i=0; i< v_nameValues.length; i++){
            var v_nameValue = v_nameValues[i].split("=");
            if(v_nameValue[0] == p_name){
                return v_nameValue[1];  
            }
        }
        return null;
    }
    request.getParameterValues = function(p_name){
        var v_url = location.href;
        if(v_url.indexOf("?") == -1) return;
        v_url = decodeURIComponent(v_url);
        var v_retArr = [];
        var v_queryString = v_url.split("?")[1];
        var v_nameValues =  v_queryString.split("&");
        for(var i=0; i< v_nameValues.length; i++){
            var v_nameValue = v_nameValues[i].split("=");
            if(v_nameValue[0] == p_name){
                v_retArr[v_retArr.length] = v_nameValue[1];  
            }
        }
        if(v_retArr.length == 0){
            return null;   
        }
        return v_retArr;
    }

var out = {};
out.print = function(p_msg){
    document.write(p_msg);
}
out.println = function(p_msg){
    document.write(p_msg + "<br>");
}