grammar Calculadora;

file: expr+;          

expr: 
        PA expr PC                          #parentesis
        |
        expr operation=(TIMES|DIV) expr     #timesDiv
        |
        expr operation=(PLUS|MINUS) expr    #plusSubtraction
        |
        NUMBER              #number
        ;


PA      :   '(';
PC      :   ')';
PLUS    :   '+';
MINUS   :   '-';
TIMES   :   '*';
DIV     :   '/';
NUMBER  :   [0-9]+;
SPACES  :   [ \t\r\n]+ -> skip;

