AFRAME.registerComponent("messege",{
    schema:{
        msg:{type:"string",default:"hello"}
    },
    init:function(){
        console.log(this.data.msg)
    }
})
