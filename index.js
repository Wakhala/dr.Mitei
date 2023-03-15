function send(){

    var action = document.querySelector('#scoreA');
    var process = document.querySelector('#scoreB');
    var people = document.querySelector('#scoreC');
    var idea = document.querySelector('#scoreD');
    var blend = document.querySelector('#scoreE');
  
   
    var scoreA = 0;
    var scoreB = 0;
    var scoreC = 0;
    var scoreD = 0;
    var scoreE = 0;
    
    var a = document.body.groupA.value;
    var b = document.body.groupB.value;
    var c = document.body.groupC.value;
    var d = document.body.groupD.value;
    var e = document.body.groupE.value;
    var f = document.body.groupF.value;
    var g = document.body.groupG.value;
    var h = document.body.groupH.value;
    var i = document.body.groupI.value;
    var j = document.body.groupJ.value;
    var k = document.body.groupK.value;
    var l = document.body.groupL.value;
    var m = document.body.groupM.value;
    var n = document.body.groupN.value;
    var o = document.body.groupO.value;
    var p = document.body.groupP.value;
    var q = document.body.groupQ.value;
    var r = document.body.groupR.value;
    var s = document.body.groupS.value;
    var t = document.body.groupT.value;
    var u = document.body.groupU.value;
    var v = document.body.groupV.value;
    var w = document.body.groupW.value;
    var x = document.body.groupX.value;
    var y = document.body.groupY.value;
    var z = document.body.groupZ.value;
    var a1 = document.body.groupA1.value;
    var b1 = document.body.groupB1.value;
    var c1 = document.body.groupC1.value;
    var d1 = document.body.groupD1.value;
    var e1 = document.body.groupE1.value;
    var f1 = document.body.groupF1.value;
    var g1 = document.body.groupG1.value;
    var h1 = document.body.groupH1.value;
    var i1 = document.body.groupI1.value;
    var j1 = document.body.groupJ1.value;
    var k1 = document.body.groupK1.value;
    var l1 = document.body.groupL1.value;
    var m1 = document.body.groupM1.value;
    var n1 = document.body.groupN1.value;

    if (a==1) {scoreA ++};
    if (a==2){scoreB++};

    if (b==3) {scoreD ++};
    if (b==4) {scoreC++};

    if (c==5) {scoreC ++};
    if (c==6) {scoreD ++};

    if (d==7) {scoreA ++};
    if (d==8) {scoreB++};

    if (e==9) {scoreA ++};
    if (e==10) {scoreB++};

    if (f==11) {scoreD ++};
    if (f==12) {scoreC++};

    if (g==13) {scoreA ++};
    if (g==14) {scoreB++};

    if (h==15) {scoreD ++};
    if (h==16) {scoreC++};

    if (i==17) {scoreA ++};
    if (i==18) {scoreB++};

    if (j==19) {scoreC ++};
    if (j==20) {scoreD++};

    if (k==21) {scoreD ++};
    if (k==22) {scoreC++};

    if (l==23) {scoreB ++};
    if (l==24) {scoreA++};

    if (m==25) {scoreB ++};
    if (m==26) {scoreA++};

    if (n==27) {scoreC ++};
    if (n==28) {scoreD++};

    if (o==29) {scoreC ++};
    if (o==30) {scoreB++};

    if (p==31) {scoreD ++};
    if (p==32) {scoreA++};

    if (q==33) {scoreA ++};
    if (q==34) {scoreB++};

    if (r==35) {scoreD ++};
    if (r==36) {scoreC++};

    if (s==37) {scoreB ++};
    if (s==38) {scoreC++};

    if (t==39) {scoreA ++};
    if (t==40) {scoreD++};

    if (u==41) {scoreA ++};
    if (u==42) {scoreB++};

    if (v==43) {scoreC ++};
    if (v==44) {scoreD++};

    if (w==45) {scoreD ++};
    if (w==46) {scoreC++};

    if (x==47) {scoreB ++};
    if (x==48) {scoreA++};

    if (y==49) {scoreC ++};
    if (y==50) {scoreA++};

    if (z==51) {scoreB ++};
    if (z==52) {scoreD++};

    if (a1==53) {scoreA ++};
    if (a1==54) {scoreD++};

    if (b1==55) {scoreB ++};
    if (b1==56) {scoreC++};

    if (c1==57) {scoreA ++};
    if (c1==58) {scoreB++};

    if (d1==59) {scoreC ++};
    if (d1==60) {scoreD++};

    if (e1==61) {scoreD ++};
    if (e1==62) {scoreB++};

    if (f1==63) {scoreA ++};
    if (f1==64) {scoreC++};

    if (g1==65) {scoreA ++};
    if (g1==66) {scoreB++};

    if (h1==67) {scoreD ++};
    if (h1==68) {scoreC++};

    if (i1==69) {scoreB ++};
    if (i1==70) {scoreA++};

    if (j1==71) {scoreD ++};
    if (j1==72) {scoreC++};

    if (k1==73) {scoreD ++};
    if (k1==74) {scoreA++};

    if (l1==75) {scoreB ++};
    if (l1==76) {scoreC++};

    if (m1==77) {scoreB ++};
    if (m1==78) {scoreD++};

    if (n1==79) {scoreA ++};
    if (n1==80) {scoreC++};

    if (scoreA == scoreB && scoreA !==0){
        scoreE = 10
    }
    if (scoreA == scoreC && scoreA !==0){
        scoreE = 5
    }
    if (scoreA == scoreD && scoreA !==0){
        scoreE = 5
    }
    if (scoreC == scoreB && scoreC !==0){
        scoreE = 5
    }
    if (scoreD == scoreB && scoreB !==0){
        scoreE = 5
    }
    if (scoreC == scoreD && scoreD !==0){
        scoreE = 5
    }
    if (scoreA == scoreB && scoreA==scoreC && scoreA !==0){
        scoreE = 10
    }
    if (scoreA == scoreB && scoreA==scoreD && scoreA !==0){
        scoreE = 10
    }
    if (scoreC == scoreB && scoreD==scoreC){
        scoreE = 10
    }
    if (scoreA == scoreC && scoreA==scoreD){
        scoreE = 10
    }
    if (scoreA == scoreB && scoreB==scoreC && scoreC==scoreD){
        scoreE = 20
    }
    if (scoreA == 0 && scoreB==0 && scoreC ==0 && scoreD === 0){
        scoreE = 0
    }


    action.textContent = scoreA * 5 +('%');
    process.textContent = scoreB * 5 +('%');
    people.textContent = scoreC * 5 +('%');
    idea.textContent = scoreD * 5 +('%');
    blend.textContent = scoreE * 5 +('%');


}

