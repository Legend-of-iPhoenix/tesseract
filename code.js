(t=>{a=document,d=Math,c=d.sin,o=d.cos,i=d.floor,r=0,l=a.body.appendChild(a.createElement("canvas")),s=l.getContext("2d");l.width=l.height=n=200,setInterval(t=>(e=>{r+=.01,s.clearRect(0,0,n,n);t=e.map(e=>[i(100+(h=45+15*e[2])*e[0]),i(100-h*e[1])]);"0102040813151923262a373b45464c575d676e7f898a8c9b9dabaebfcdcedfef".match(/../g).map(e=>{f=e.split("").map(e=>parseInt(e,16)),s.beginPath(),s.moveTo(...t[f[0]]),s.lineTo(...t[f[1]]),s.closePath(),s.stroke()})})(" ".repeat(16).split("").map((t,n)=>((t,n,d,i)=>[t,(a=o(r))*n-(e=c(r))*i,a*d-e*(p=e*n+a*i),e*d+a*p])(...n.toString(2).padStart(4,0).split("").map(e=>2*e-1)))),9)})()
