
KeymanWeb.KR(new Keyboard_eduria());

function Keyboard_eduria()
{
  
  this.KI="Keyboard_eduria";
  this.KN="Eduria";
  this.KMINVER="9.0";
  this.KV={F:' 1em "Tahoma"',K102:0};
  this.KDU=1;
  this.KV.KLS={
    "default": ["`","1","2","3","4","5","6","7","8","9","0","-","=","","","","q","w","e","r","t","y","u","i","o","p","[","ʉ","\\","","","","a","s","d","f","g","h","j","k","l",";","'","","","","","","\\","z","x","c","v","b","n","m",",",".","/","","","","",""," "],
    "shift": ["~","!","@","#","$","%","^","&","*","(",")","_","+","","","","Q","W","E","R","T","Y","U","I","O","P","{","Ʉ","|","","","","A","S","D","F","G","H","J","K","L",":","\"","","","","","","|","Z","X","C","V","B","N","M","‘","’","?","","","","",""," "],
    "ctrl": ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""," "]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KH='';
  this.KM=0;
  this.KBVER="9";
  this.KMBM=0x0010;
  this.KVER="10.0.1201.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, 0x4010, 0x31)&&k.KCM(1,t,"!",1)) {   // Line 19
      r=m=1;
      k.KO(1,t,"¡");
    }
    else if(k.KKM(e, 0x4000, 0xBD)&&k.KCM(1,t,"-",1)) {   // Line 31
      r=m=1;
      k.KO(1,t,"–");
    }
    else if(k.KKM(e, 0x4000, 0xBA)&&k.KCM(1,t,";",1)) {   // Line 32
      r=m=1;
      k.KO(1,t,"ˈ");
    }
    else if(k.KKM(e, 0x4010, 0xBC)&&k.KCM(1,t,"‘",1)) {   // Line 22
      r=m=1;
      k.KO(1,t,"“");
    }
    else if(k.KKM(e, 0x4010, 0xBC)&&k.KCM(1,t,"/",1)) {   // Line 24
      r=m=1;
      k.KO(1,t,"«");
    }
    else if(k.KKM(e, 0x4010, 0xBC)&&k.KCM(1,t,"|",1)) {   // Line 28
      r=m=1;
      k.KO(1,t,"<");
    }
    else if(k.KKM(e, 0x4010, 0xBC)) {   // Line 20
      r=m=1;
      k.KO(0,t,"‘");
    }
    else if(k.KKM(e, 0x4000, 0xBB)&&k.KCM(1,t,"=",1)) {   // Line 30
      r=m=1;
      k.KO(1,t,"—");
    }
    else if(k.KKM(e, 0x4010, 0xBE)&&k.KCM(1,t,"’",1)) {   // Line 23
      r=m=1;
      k.KO(1,t,"”");
    }
    else if(k.KKM(e, 0x4010, 0xBE)&&k.KCM(1,t,"/",1)) {   // Line 25
      r=m=1;
      k.KO(1,t,"»");
    }
    else if(k.KKM(e, 0x4010, 0xBE)&&k.KCM(1,t,"|",1)) {   // Line 29
      r=m=1;
      k.KO(1,t,">");
    }
    else if(k.KKM(e, 0x4010, 0xBE)) {   // Line 21
      r=m=1;
      k.KO(0,t,"’");
    }
    else if(k.KKM(e, 0x4010, 0xBF)&&k.KCM(1,t,"?",1)) {   // Line 18
      r=m=1;
      k.KO(1,t,"¿");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(1,t,";",1)) {   // Line 40
      r=m=1;
      k.KO(1,t,"Á");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(1,t,"[",1)) {   // Line 56
      r=m=1;
      k.KO(1,t,"Ã");
    }
    else if(k.KKM(e, 0x4010, 0x41)&&k.KCM(1,t,"{",1)) {   // Line 81
      r=m=1;
      k.KO(1,t,"Ã́");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(1,t,";",1)) {   // Line 41
      r=m=1;
      k.KO(1,t,"É");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(1,t,"[",1)) {   // Line 57
      r=m=1;
      k.KO(1,t,"Ẽ");
    }
    else if(k.KKM(e, 0x4010, 0x45)&&k.KCM(1,t,"{",1)) {   // Line 82
      r=m=1;
      k.KO(1,t,"Ẽ́ ");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(1,t,";",1)) {   // Line 42
      r=m=1;
      k.KO(1,t,"Í");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(1,t,"[",1)) {   // Line 58
      r=m=1;
      k.KO(1,t,"Ĩ");
    }
    else if(k.KKM(e, 0x4010, 0x49)&&k.KCM(1,t,"{",1)) {   // Line 83
      r=m=1;
      k.KO(1,t,"Ĩ́");
    }
    else if(k.KKM(e, 0x4010, 0x4E)&&k.KCM(1,t,"{",1)) {   // Line 72
      r=m=1;
      k.KO(1,t,"Ñ");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,";",1)) {   // Line 43
      r=m=1;
      k.KO(1,t,"Ó");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"[",1)) {   // Line 59
      r=m=1;
      k.KO(1,t,"Õ");
    }
    else if(k.KKM(e, 0x4010, 0x4F)&&k.KCM(1,t,"{",1)) {   // Line 84
      r=m=1;
      k.KO(1,t,"Ṍ");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,";",1)) {   // Line 44
      r=m=1;
      k.KO(1,t,"Ú");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,"[",1)) {   // Line 60
      r=m=1;
      k.KO(1,t,"Ũ");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,":",1)) {   // Line 76
      r=m=1;
      k.KO(1,t,"Ü");
    }
    else if(k.KKM(e, 0x4010, 0x55)&&k.KCM(1,t,"{",1)) {   // Line 85
      r=m=1;
      k.KO(1,t,"Ṹ");
    }
    else if(k.KKM(e, 0x4000, 0xDD)&&k.KCM(1,t,"\\",1)) {   // Line 26
      r=m=1;
      k.KO(1,t,"]");
    }
    else if(k.KKM(e, 0x4000, 0xDD)&&k.KCM(1,t,";",1)) {   // Line 53
      r=m=1;
      k.KO(1,t,"ʉ́");
    }
    else if(k.KKM(e, 0x4000, 0xDD)&&k.KCM(1,t,"[",1)) {   // Line 69
      r=m=1;
      k.KO(1,t,"ʉ̃");
    }
    else if(k.KKM(e, 0x4000, 0xDD)&&k.KCM(1,t,"{",1)) {   // Line 94
      r=m=1;
      k.KO(1,t,"ʉ̃́");
    }
    else if(k.KKM(e, 0x4000, 0xDD)) {   // Line 37
      r=m=1;
      k.KO(0,t,"ʉ");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,";",1)) {   // Line 48
      r=m=1;
      k.KO(1,t,"á");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"[",1)) {   // Line 64
      r=m=1;
      k.KO(1,t,"ã");
    }
    else if(k.KKM(e, 0x4000, 0x41)&&k.KCM(1,t,"{",1)) {   // Line 89
      r=m=1;
      k.KO(1,t,"ã́");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,";",1)) {   // Line 49
      r=m=1;
      k.KO(1,t,"é");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"[",1)) {   // Line 65
      r=m=1;
      k.KO(1,t,"ẽ");
    }
    else if(k.KKM(e, 0x4000, 0x45)&&k.KCM(1,t,"{",1)) {   // Line 90
      r=m=1;
      k.KO(1,t,"ẽ́");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,";",1)) {   // Line 50
      r=m=1;
      k.KO(1,t,"í");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"[",1)) {   // Line 66
      r=m=1;
      k.KO(1,t,"ĩ");
    }
    else if(k.KKM(e, 0x4000, 0x49)&&k.KCM(1,t,"{",1)) {   // Line 91
      r=m=1;
      k.KO(1,t,"ĩ́");
    }
    else if(k.KKM(e, 0x4000, 0x4E)&&k.KCM(1,t,"[",1)) {   // Line 73
      r=m=1;
      k.KO(1,t,"ñ");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,";",1)) {   // Line 51
      r=m=1;
      k.KO(1,t,"ó");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"[",1)) {   // Line 67
      r=m=1;
      k.KO(1,t,"õ");
    }
    else if(k.KKM(e, 0x4000, 0x4F)&&k.KCM(1,t,"{",1)) {   // Line 92
      r=m=1;
      k.KO(1,t,"ṍ");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,";",1)) {   // Line 52
      r=m=1;
      k.KO(1,t,"ú");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"[",1)) {   // Line 68
      r=m=1;
      k.KO(1,t,"ũ");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,":",1)) {   // Line 77
      r=m=1;
      k.KO(1,t,"ü");
    }
    else if(k.KKM(e, 0x4000, 0x55)&&k.KCM(1,t,"{",1)) {   // Line 93
      r=m=1;
      k.KO(1,t,"ṹ");
    }
    else if(k.KKM(e, 0x4010, 0xDB)&&k.KCM(1,t,"{",1)) {   // Line 27
      r=m=1;
      k.KO(1,t,"}");
    }
    else if(k.KKM(e, 0x4010, 0xDD)&&k.KCM(1,t,";",1)) {   // Line 45
      r=m=1;
      k.KO(1,t,"Ʉ́");
    }
    else if(k.KKM(e, 0x4010, 0xDD)&&k.KCM(1,t,"[",1)) {   // Line 61
      r=m=1;
      k.KO(1,t,"Ʉ̃");
    }
    else if(k.KKM(e, 0x4010, 0xDD)&&k.KCM(1,t,"{",1)) {   // Line 86
      r=m=1;
      k.KO(1,t,"Ʉ̃́");
    }
    else if(k.KKM(e, 0x4010, 0xDD)) {   // Line 35
      r=m=1;
      k.KO(0,t,"Ʉ");
    }
    return r;
  };
}
