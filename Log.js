AFRAME.registerComponent("move",{
  schema:{
    movex:{type:"number",default:1}
  },
  tick:function(){
    this.data.movex=this.data.movex+0.1
    var pos=this.el.getAttribute("position")
    pos.x=this.data.movex
    this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
  }
})

AFRAME.registerComponent("moving",{
  schema:{
    movey:{type:"number",default:0.01}
  },
  tick:function(){
    this.data.movey=this.data.movey+0.1
    var posi=this.el.getAttribute("position")
    posi.y=this.data.movey
    this.el.getAttribute("position",{x:posi.x,y:posi.y,z:posi.z})
  }
})
