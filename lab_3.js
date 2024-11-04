function circleAreaPeri()
    {
        radiusCircle=parseFloat(document.getElementById("radiusInput").value)
        let periCircle=2*Math.PI*radiusCircle
        let areaCircle=radiusCircle*radiusCircle*Math.PI
        document.getElementById("circleOut").innerText="The perimeter of the Circle is " + periCircle + " and the area of the circle is " + areaCircle;
    };

function areaAndPeriOfRect()
    {
        lenRect=parseFloat(document.getElementById("lenInput").value)
        widRect=parseFloat(document.getElementById("widthInput").value)
        const areaRect=lenRect*widRect;
        const periRect=2*(lenRect+widRect);
        document.getElementById("RectOut").innerText="The perimeter of the Rectangle is " + periRect + " and the area of the Rectangle is " + areaRect;
    };  

function areaAndVolOfCylinder()
    {
        radiusCylinder=parseFloat(document.getElementById("radCylInput").value)
        heightCylinder=parseFloat(document.getElementById("heightCylInput").value)
        const areaCyl=2*Math.PI*radiusCylinder*heightCylinder
        const volCyl=Math.PI*radiusCylinder*radiusCylinder*heightCylinder
        document.getElementById("CylOut").innerText="Area of cylinder is " + areaCyl + " and Volume of cylinder is " + volCyl
    };

function subtotalAndGratuitity()
    {
        subTotal=parseFloat(document.getElementById("subtotalInput").value)
        gratRate=parseFloat(document.getElementById("gratRate").value)
        const gratAmt=subTotal*(gratRate/100)
        const totalAmt=subTotal+gratAmt
        document.getElementById("gratAndTotalAmtOut").innerText="Gratuity amount is " + gratAmt + " and total amount to pay is " + totalAmt
    };



