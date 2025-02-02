const inquirer = require ('inquirer')

inquirer.prompt([{
    name:'A1',
    message: "Dime el valor A de la primera ecuación de tu recta",
    default: "0"
},{
    name: 'B1',
    message: "Dime el valor B de la primera ecuación de tu recta",
    default: "0"
},{
    name: 'C1',
    message: "Dime el valor C de la primera ecuación de tu recta",
    default: "0"
},{
    name: 'D1',
    message: "Dime el valor D de la primera ecuación de tu recta",
    default: "0"
},{
    name: 'A2',
    message: "Dime el valor A de la segunda ecuación de tu recta",
    default: "0"
},{
    name: 'B2',
    message: "Dime el valor B de la segunda ecuación de tu recta",
    default: "0"
},{
    name: 'C2',
    message: "Dime el valor C de la segunda ecuación de tu recta",
    default: "0"
},{
    name: 'D2',
    message: "Dime el valor D de la segunda ecuación de tu recta",
    default: "0"
}
])
    .then(answer => {
        if(isNaN(answer.A1)||isNaN(answer.B1)||isNaN(answer.C1)||isNaN(answer.D1)||isNaN(answer.A2)||isNaN(answer.B2)||isNaN(answer.C2)||isNaN(answer.D2)){
            console.log("lo siento, solo se trabajar con números :(")
        }
            else if (answer.A1==answer.A2 && answer.B1==answer.B2 && answer.C1==answer.C2 && answer.D1==answer.D2){
                console.log("las dos ecuaciones son iguales y por lo tanto solo tengo una ecuación con la que no puedo hacer nada")
            }
                else if (answer.A1==0 && answer.B1==0 && answer.C1==0 && answer.D1==0 || answer.A2==0 && answer.B2==0 && answer.C2==0 && answer.D2==0){
                    console.log("hay una ecuación que lo único que me dice es 0=0 y siento decirte que con eso no puedo hacer nada")
                }
                    else {
                        a1 = JSON.parse(answer.A1)
                        b1 = JSON.parse(answer.B1)
                        c1 = JSON.parse(answer.C1)
                        d1 = JSON.parse(answer.D1)
                        a2 = JSON.parse(answer.A2)
                        b2 = JSON.parse(answer.B2)
                        c2 = JSON.parse(answer.C2)
                        d2 = JSON.parse(answer.D2)

                        // r1: 2x+ 3y+4z+2=0 && r2: 4x+ 2y+3z+1=0  ===> utilitçem la x amb el valor 0 i fem reducció 
                        // obtenim la z amb l'equació obtinguda amb gaus i després obtenim y substituint z pel nombre obtingut

                        var x = 0;

                        var red = b2/b1;
    
                        var b3 = red*b1 - b2;
                        var c3 = red*c1 - c2;
                        var d3 = red*d1 - d2;
    
                        var z = -d3/c3;
                        var y = ((-c1*z)-d1)/b1;
    
                       //calcular vector recta amb el determinant de la matriu ijk i A, B, C de les dues equacions de la recta
    
                        var i = (b1*c2)-(c1*b2);
                        var j = (c1*a2)-(a1*c2);
                        var k = (a1*b2)-(b1*a2);

                        console.log("un punto de esta recta es P=(" + x + ", " + y + ", " + z + ")");
                        console.log(`un vector director de esta recta es V=(${i}, ${j}, ${k})`)
                    }
        
    })