$('#btnSubmit').click(function(){
    var input = $('#inputText').val();
    var ones = 0;
    var zeros = 0;
    var string = '';
    for (var i=0;i<input.length;i++){

            if(input[i]=='1'){
                ones ++;
            }
            else if(input[i]=='0'){
                zeros ++;
            }
    }
    for (var i=0;i<ones;i++){
     string = string + '1';
     if(zeros>0){
     string = string + '0';
        }
        zeros--;
        }
        if(zeros>0){
            for(var i=0;i<zeros;i++){
                string = string + '0';
            }
        }
 document.getElementById('outputLabel').innerHTML = string;
});
