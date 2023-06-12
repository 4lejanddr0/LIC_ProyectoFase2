function recibo(){


    var pdf = new jsPDF();
    
            pdf.text(75, 30, 'Pokemon Bank!');
            pdf.text(70, 45, '!Transaccion Exitosa!');
                pdf.text(50, 60, 'Numero de transaccion 20193442-12');
            pdf.text(70, 85, 'Su Nuevo saldo es de $');
            pdf.text(70, 140, 'Que Tenga Un Buen Dia!');
    pdf.text(85, 150, '||||||||||||||||||||||');
            pdf.save('Recibo.pdf');
}