const numeros = [
    {
        id: crypto.randomUUID(),
        lexema: '0',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '1',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '2',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '3',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '4',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '5',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '6',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '7',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '8',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '9',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '10',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '11',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '12',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '13',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '14',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '15',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '16',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '17',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '18',
        categoria: 'NUM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '19',
        categoria: 'NUM'
    }
]
const palabrasReservadas = [
    {
        id: crypto.randomUUID(),
        lexema: 'auto',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'break',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'case',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'char',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'const',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'continue',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'default',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'do',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'double',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'else',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'enum',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'extern',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'float',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'for',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'goto',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'if',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'int',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'long',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'register',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'return',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'short',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'signed',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'sizeof',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'static',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'struct',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'switch',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'typedef',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'union',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'unsigned',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'void',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'volatile',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'main',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'while',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'include',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'printf',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'scanf',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'fprintf',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'fscanf',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'sprintf',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'fseek',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'fopen',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'fclose',
        categoria: 'PR'
    },
    {
        id: crypto.randomUUID(),
        lexema: 'getch',
        categoria: 'PR'
    },
]
const operadoresLogicos = [
    {
        id: crypto.randomUUID(),
        lexema: '|',
        categoria: 'OL'
    },
    {
        id: crypto.randomUUID(),
        lexema: '&',
        categoria: 'OL'
    },
    {
        id: crypto.randomUUID(),
        lexema: '!',
        categoria: 'OL'
    }
]
const operadoresRelacionales = [
    {
        id: crypto.randomUUID(),
        lexema: '>',
        categoria: 'OR'
    },
    {
        id: crypto.randomUUID(),
        lexema: '<',
        categoria: 'OR'
    },
    {
        id: crypto.randomUUID(),
        lexema: '=',
        categoria: 'OR'
    }
    // {
    //     id: crypto.randomUUID(),
    //     lexema: '>=',
    //     categoria: 'OR'
    // },
    // {
    //     id: crypto.randomUUID(),
    //     lexema: '<=',
    //     categoria: 'OR'
    // },
    // {
    //     id: crypto.randomUUID(),
    //     lexema: '==',
    //     categoria: 'OR'
    // },
    // {
    //     id: crypto.randomUUID(),
    //     lexema: '!=',
    //     categoria: 'OR'
    // },
]
const operadoresMatematicos = [
    {
        id: crypto.randomUUID(),
        lexema: '+',
        categoria: 'OM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '-',
        categoria: 'OM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '*',
        categoria: 'OM'
    },
    {
        id: crypto.randomUUID(),
        lexema: '/',
        categoria: 'OM'
    },
    // {
    //     id: crypto.randomUUID(),
    //     lexema: '=',
    //     categoria: 'OM'
    // },
    {
        id: crypto.randomUUID(),
        lexema: '%',
        categoria: 'OM'
    }
]
const operadoresAgrupacion = [
    {
        id: crypto.randomUUID(),
        lexema: '(',
        categoria: 'OA'
    },
    {
        id: crypto.randomUUID(),
        lexema: ')',
        categoria: 'OA'
    },
    {
        id: crypto.randomUUID(),
        lexema: '{',
        categoria: 'OA'
    },
    {
        id: crypto.randomUUID(),
        lexema: '}',
        categoria: 'OA'
    },
    {
        id: crypto.randomUUID(),
        lexema: '[',
        categoria: 'OA'
    },
    {
        id: crypto.randomUUID(),
        lexema: ']',
        categoria: 'OA'
    }
]
const operadoresEspaciamiento = [
    {
        id: crypto.randomUUID(),
        lexema: ',',
        categoria: 'OE'
    },
    {
        id: crypto.randomUUID(),
        lexema: '.',
        categoria: 'OE'
    },
    {
        id: crypto.randomUUID(),
        lexema: ':',
        categoria: 'OE'
    }
]
const semiColon = [
    {
        id: crypto.randomUUID(),
        lexema: ';',
        categoria: 'SC'
    }
]

export const diccionario = [
    {
        id: crypto.randomUUID(),
        nombre: 'PalabrasReservadas',
        lista: palabrasReservadas
    },
    {
        id: crypto.randomUUID(),
        nombre: 'operadoresLogicos',
        lista: operadoresLogicos
    },
    {
        id: crypto.randomUUID(),
        nombre: 'operadoresRelacionales',
        lista: operadoresRelacionales
    },
    {
        id: crypto.randomUUID(),
        nombre: 'operadoresMatematicos',
        lista: operadoresMatematicos
    },
    {
        id: crypto.randomUUID(),
        nombre: 'operadoresAgrupacion',
        lista: operadoresAgrupacion
    },
    {
        id: crypto.randomUUID(),
        nombre: 'operadoresEspaciamiento',
        lista: operadoresEspaciamiento
    },
    // {
    //     id: crypto.randomUUID(),
    //     nombre: 'numeros',
    //     lista: numeros
    // },
    {
        id: crypto.randomUUID(),
        nombre: 'semiColon',
        lista: semiColon
    }
]
