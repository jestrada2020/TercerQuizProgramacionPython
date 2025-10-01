// Respuestas correctas para el Quiz - 30 Preguntas
const correctAnswers = {
          // Preguntas 1-4 (ya actualizadas)
          q1: ["%", "par"],   // Clasificador Par/Impar
          q2: ["range", "==", "break", "denegado"],   // Validación de contraseña
          q3: ["90", "elif", "else", "F"],   // Calificador de exámenes
          q4: ["len", "continue", "monitor", "else"],   // Procesamiento con continue

          // Preguntas 5-8: Ciclos FOR con condicionales
          q5: ["lower", "in", "+=", "contador_vocales"],   // Contador de vocales
          q6: ["nombre", "Tierra", "upper", "else"],   // Recorrido de arreglos - Planetas
          q7: ["enumerate", "90", "+", "p"],   // Enumerate con puntajes
          q8: ["zip", ">", "Alto", "categoria"],   // ZIP con productos y precios

          // Preguntas 9-14: Ciclos WHILE
          q9: ["while", "%", "+=", "contador"],   // Contador con WHILE - Múltiplos de 3
          q10: ["True", "numero_secreto", "break", "bajo"],   // Adivina el número
          q11: ["while", "140.0", "0.05", "*="],   // Simulación de descuentos
          q12: ["tareas", "pop", "in", "len"],   // Gestor de tareas
          q13: ["!=", "input", "1", "elif"],   // Menú interactivo
          q14: ["0", "len", "i", "+="],   // WHILE con arreglos - Verificación de stock

          // Preguntas 15-20: Suma de Gauss y Factorial
          q15: ["range", "+=", "*", "formula_check"],   // Suma de Gauss con FOR - Básico
          q16: ["range", "<", "str", "suma_gauss"],   // Suma de Gauss detallada
          q17: ["1", "<=", "+=", "2"],   // Suma de Gauss con WHILE - Ascendente
          q18: ["0", "0", "*=", "factorial_resultado"],   // Factorial con FOR descendente
          q19: ["1", "range", "*=", "6"],   // Factorial con FOR ascendente
          q20: [">", "str", "else", "expresion_matematica"],   // Factorial con cadena formateada

          // Preguntas 21-24: Fibonacci
          q21: ["0", "range", "-1", "append"],   // Fibonacci con FOR - Básico con lista
          q22: ["-2", "+", ">", "break"],   // Fibonacci con FOR y BREAK
          q23: ["2", "while", "append", "+="],   // Fibonacci con WHILE - Básico con contador
          q24: ["1", "<=", "b", "secuencia"],   // Fibonacci con WHILE - Límite de valor

          // Preguntas 25-30: Matrices bidimensionales
          q25: ["fila", "elemento", "end", "print"],   // Matriz FOR - Recorrido por valor
          q26: ["range", "len", "i", "+="],   // Matriz FOR - Recorrido por índice con suma
          q27: ["range", "i", "*=", "for"],   // Matriz FOR - Modificación de elementos
          q28: ["len", "<", "0", "+="],   // Matriz WHILE - Recorrido con índices
          q29: ["False", "valor_buscado", "break", "encontrado"],   // Matriz WHILE - Búsqueda con parada
          q30: ["range", "columnas", "append", "append"]   // Crear matriz con FOR - Rangos fijos
        };
        
        // Valores de puntos para cada pregunta (Total: 50 puntos)
        const pointValues = {
          // Preguntas 1-8: Ciclos FOR con condicionales (12 puntos)
          q1: 1, q2: 2, q3: 2, q4: 2,
          q5: 1, q6: 1, q7: 1, q8: 2,
          // Preguntas 9-14: Ciclos WHILE (10 puntos)
          q9: 2, q10: 2, q11: 2, q12: 1, q13: 1, q14: 2,
          // Preguntas 15-20: Suma de Gauss y Factorial (12 puntos)
          q15: 2, q16: 2, q17: 2, q18: 2, q19: 2, q20: 2,
          // Preguntas 21-24: Fibonacci (8 puntos)
          q21: 2, q22: 2, q23: 2, q24: 2,
          // Preguntas 25-30: Matrices bidimensionales (8 puntos)
          q25: 1, q26: 2, q27: 1, q28: 2, q29: 1, q30: 1
        };