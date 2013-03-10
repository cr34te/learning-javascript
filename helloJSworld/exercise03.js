var a = "";

for(i=1; i<=10; i++) {
	for(j=1; j<=10; j++) {
		if(j===i) {
			a += (1 + "  ");
		}
		else {	
			a += (0 + "  ");
		}
	}
	console.log(a);
	a = "";
}
