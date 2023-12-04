grammar Calculadora;

file: expr+;          

expr: 
        expr operation=(TIMES|DIV) expr     #timesDiv
        |
        expr operation=(PLUS|MINUS) expr    #plusSubtraction
        |
        NUMBER              #number
        ;

PLUS    :   '+';
MINUS   :   '-';
TIMES   :   '*';
DIV     :   '/';
NUMBER  :   [0-9]+;
SPACES  :   [ \t\r\n]+ -> skip;

