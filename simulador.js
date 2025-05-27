import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class CalculadoraEdad {

    public static void main(String[] args) {
        // Crear la ventana
        JFrame ventana = new JFrame("Calculadora de Edad");
        ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        ventana.setSize(300, 150);
        ventana.setLayout(new FlowLayout());

        // Crear componentes
        JLabel etiqueta = new JLabel("Mi edad:");
        JTextField campoEdad = new JTextField(10);
        JButton boton = new JButton("Calcular edad");
        JLabel resultado = new JLabel("");

        // Agregar acción al botón
        boton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String edadTexto = campoEdad.getText();
                resultado.setText("Tu edad es " + edadTexto);
            }
        });

        // Agregar componentes a la ventana
        ventana.add(etiqueta);
        ventana.add(campoEdad);
        ventana.add(boton);
        ventana.add(resultado);

        // Mostrar la ventana
        ventana.setVisible(true);
    }
}
