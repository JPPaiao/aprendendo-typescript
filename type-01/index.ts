function showTikects(nome: string | null, tickets: number) {
    console.log(`Olá ${nome ?? 'User padrão'}. O seu bilhete é ${tickets} `)
}

showTikects('Jp', 2)
