let meuMap = new Map()
meuMap.set("nome", "gian")
meuMap.set("stack", "html, css, js")


console.log(meuMap)

const nome = meuMap.get("nome")

console.log(nome)

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

// meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave)
}

for (let valor of meuMap.values()) {
    console.log(valor)
}

for (let entrada of meuMap.entries()) {
    console.log(entrada)
}

meuMap.delete("stack")

console.log(meuMap)

const cpfs = new Set()

cpfs.add('02345678989')
cpfs.add('12345678989')
cpfs.add('22345678989')

console.log(cpfs)

cpfs.forEach((valor) => {
    console.log(valor)
})

const array = ['Gian Souza', 'Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza' ]

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)